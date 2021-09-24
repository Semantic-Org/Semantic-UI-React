import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { createPortal } from 'react-dom'

import { isBrowser, makeDebugger, useEventCallback } from '../../lib'
import usePortalElement from './usePortalElement'

const debug = makeDebugger('PortalInner')

/**
 * An inner component that allows you to render children outside their parent.
 */
const PortalInner = React.forwardRef(function (props, ref) {
  const handleMount = useEventCallback(() => _.invoke(props, 'onMount', null, props))
  const handleUnmount = useEventCallback(() => _.invoke(props, 'onUnmount', null, props))

  const element = usePortalElement(props.children, ref)

  React.useEffect(() => {
    debug('componentDidMount()')
    handleMount()

    return () => {
      debug('componentWillUnmount()')
      handleUnmount()
    }
  }, [])

  if (!isBrowser()) {
    return null
  }

  return createPortal(element, props.mountNode || document.body)
})

PortalInner.displayName = 'PortalInner'
PortalInner.propTypes = {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /** The node where the portal should mount. */
  mountNode: PropTypes.any,

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func,
}

export default PortalInner
