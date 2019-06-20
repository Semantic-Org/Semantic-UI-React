import forEach from 'lodash/forEach'

import computeClassNames from './computeClassNames'
import computeClassNamesDifference from './computeClassNamesDifference'

const prevClassNames = new Map()

/**
 * @param {React.RefObject} nodeRef
 * @param {Object[]} components
 */
const handleClassNamesChange = (nodeRef, components) => {
  const currentClassNames = computeClassNames(components)
  const [forAdd, forRemoval] = computeClassNamesDifference(
    prevClassNames.get(nodeRef),
    currentClassNames,
  )

  if (nodeRef.current) {
    forEach(forAdd, (className) => nodeRef.current.classList.add(className))
    forEach(forRemoval, (className) => nodeRef.current.classList.remove(className))
  }

  prevClassNames.set(nodeRef, currentClassNames)
}

export default handleClassNamesChange
