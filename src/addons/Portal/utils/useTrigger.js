import React from 'react'

import { useMergedRefs } from '../../../lib'
import validateTrigger from './validateTrigger'

/**
 * @param {React.ReactNode} trigger
 * @param {React.Ref} triggerRef
 */
function useTrigger(trigger, triggerRef) {
  const ref = useMergedRefs(trigger?.ref, triggerRef)

  if (trigger) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      validateTrigger(trigger)
    }

    return [ref, React.cloneElement(trigger, { ref })]
  }

  return [ref, null]
}

export default useTrigger
