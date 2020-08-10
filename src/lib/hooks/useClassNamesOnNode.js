import React from 'react'
import { isRefObject } from '@stardust-ui/react-component-ref'

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

const CLASS_NAME_DELITIMITER = /\s+/

export function computeClassNames(classNameRefs) {
  const classNames = []

  if (classNameRefs) {
    classNameRefs.forEach((classNameRef) => {
      if (typeof classNameRef.current === 'string') {
        // TODO: describe why
        classNameRef.current.split(CLASS_NAME_DELITIMITER).forEach((className) => {
          classNames.push(className)
        })
      }
    })

    return classNames.filter(
      (className, i, array) => className.length > 0 && array.indexOf(className) === i,
    )
  }

  return []
}

export function computeClassNamesDifference(prevClassNames, currentClassNames) {
  return [
    currentClassNames.filter((className) => prevClassNames.indexOf(className) === -1),
    prevClassNames.filter((className) => currentClassNames.indexOf(className) === -1),
  ]
}

const prevClassNames = new Map()

/**
 * @param {HTMLElement} node
 * @param {Object[]} components
 */
export const handleClassNamesChange = (node, components) => {
  const currentClassNames = computeClassNames(components)
  const [forAdd, forRemoval] = computeClassNamesDifference(
    prevClassNames.get(node) || [],
    currentClassNames,
  )

  if (node) {
    forAdd.forEach((className) => node.classList.add(className))
    forRemoval.forEach((className) => node.classList.remove(className))
  }

  prevClassNames.set(node, currentClassNames)
}

export class NodeRegistry {
  constructor() {
    this.nodes = new Map()
  }

  add = (node, component) => {
    if (this.nodes.has(node)) {
      const set = this.nodes.get(node)

      set.add(component)
      return
    }

    // IE11 do not support constructor params
    const set = new Set()
    set.add(component)

    this.nodes.set(node, set)
  }

  del = (node, component) => {
    if (!this.nodes.has(node)) {
      return
    }

    const set = this.nodes.get(node)

    if (set.size === 1) {
      this.nodes.delete(node)
      return
    }

    set.delete(component)
  }

  emit = (node, callback) => {
    callback(node, this.nodes.get(node))
  }
}

const nodeRegistry = new NodeRegistry()

export default function useClassNamesOnNode(node, className) {
  const classNameRef = React.useRef()
  const isMounted = React.useRef(false)

  useIsomorphicLayoutEffect(() => {
    classNameRef.current = className

    if (isMounted.current) {
      const element = isRefObject(node) ? node.current : node
      nodeRegistry.emit(element, handleClassNamesChange)
    }

    isMounted.current = true
  }, [className])
  useIsomorphicLayoutEffect(() => {
    const element = isRefObject(node) ? node.current : node

    nodeRegistry.add(element, classNameRef)
    nodeRegistry.emit(element, handleClassNamesChange)

    return () => {
      nodeRegistry.del(element, classNameRef)
      nodeRegistry.emit(element, handleClassNamesChange)
    }
  }, [node])
}
