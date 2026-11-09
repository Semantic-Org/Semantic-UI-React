import * as React from 'react'
import { useMergedRefs } from '../../../dropdown/lib'

/**
 * Assigns a merged ref to an existing element if possible, or wraps it with an additional "div".
 *
 * @param {React.ReactNode} node
 * @param {React.Ref} userRef
 */
export default function usePortalElement(node, userRef) {
  const ref = useMergedRefs(node?.props?.ref, userRef)

  if (React.isValidElement(node)) {
    if (node.type?.$$typeof === Symbol.for('react.forward_ref')) {
      return React.cloneElement(node, { ref })
    }

    if (typeof node.type === 'string') {
      return React.cloneElement(node, { ref })
    }
  }

  return (
    <div data-suir-portal="true" ref={ref}>
      {node}
    </div>
  )
}
