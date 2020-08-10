import { isRefObject } from '@fluentui/react-component-ref'
import React from 'react'

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

const CLASS_NAME_DELITIMITER = /\s+/

/**
 * Accepts a set of ref objects that contain classnames as a string and returns an array of unique
 * classNames.
 *
 * @param {Set<React.RefObject>|undefined} classNameRefs
 * @returns String[]
 */
export function computeClassNames(classNameRefs) {
  const classNames = []

  if (classNameRefs) {
    classNameRefs.forEach((classNameRef) => {
      if (typeof classNameRef.current === 'string') {
        const classNamesForRef = classNameRef.current.split(CLASS_NAME_DELITIMITER)

        classNamesForRef.forEach((className) => {
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

/**
 * Computes classnames that should be removed and added to a node based on input differences.
 *
 * @param {String[]} prevClassNames
 * @param {String[]} currentClassNames
 */
export function computeClassNamesDifference(prevClassNames, currentClassNames) {
  return [
    currentClassNames.filter((className) => prevClassNames.indexOf(className) === -1),
    prevClassNames.filter((className) => currentClassNames.indexOf(className) === -1),
  ]
}

const prevClassNames = new Map()

/**
 * @param {HTMLElement} node
 * @param {Set<React.RefObject>|undefined} classNameRefs
 */
export const handleClassNamesChange = (node, classNameRefs) => {
  const currentClassNames = computeClassNames(classNameRefs)
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

  add = (node, classNameRef) => {
    if (this.nodes.has(node)) {
      const set = this.nodes.get(node)

      set.add(classNameRef)
      return
    }

    // IE11 does not support constructor params
    const set = new Set()
    set.add(classNameRef)

    this.nodes.set(node, set)
  }

  del = (node, classNameRef) => {
    if (!this.nodes.has(node)) {
      return
    }

    const set = this.nodes.get(node)

    if (set.size === 1) {
      this.nodes.delete(node)
      return
    }

    set.delete(classNameRef)
  }

  emit = (node, callback) => {
    callback(node, this.nodes.get(node))
  }
}

const nodeRegistry = new NodeRegistry()

/**
 * A React hooks that allows to manage classNames on a DOM node in declarative manner. Accepts
 * a HTML element or React ref objects with it.
 *
 * @param {HTMLElement|React.RefObject} node
 * @param {String} className
 */
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
