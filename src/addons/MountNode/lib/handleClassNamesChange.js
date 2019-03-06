import _ from 'lodash'

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
    _.forEach(forAdd, className => nodeRef.current.classList.add(className))
    _.forEach(forRemoval, className => nodeRef.current.classList.remove(className))
  }

  prevClassNames.set(nodeRef, currentClassNames)
}

export default handleClassNamesChange
