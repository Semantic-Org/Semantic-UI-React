import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { createPortal } from 'react-dom'

import { documentRef } from '@stardust-ui/react-component-event-listener'
import useEventListener from '@stardust-ui/react-component-event-listener/dist/commonjs/hooks/useEventListener'
import { customPropTypes } from '../../lib'
import Ref from '../Ref'

/**
 * An inner component that allows you to render children outside their parent.
 */
function PortalInner(props) {
  const { children, innerRef, mountNode = document.body } = props

  React.useLayoutEffect(() => {
    _.invoke(props, 'onMount', null, props)

    return () => {
      _.invoke(props, 'onUnmount', null, props)
    }
  }, [])

  useEventListener({
    listener: props.onPortalMouseLeave,
    type: 'mouseleave',
    targetRef: innerRef,
  })
  useEventListener({
    listener: props.onPortalMouseEnter,
    targetRef: innerRef,
    type: 'mouseenter',
  })
  useEventListener({
    listener: props.onDocumentMouseDown,
    targetRef: documentRef,
    type: 'mousedown',
  })
  useEventListener({
    listener: props.onDocumentClick,
    type: 'click',
    targetRef: documentRef,
  })
  useEventListener({
    listener: props.onEscape,
    targetRef: documentRef,
    type: 'keydown',
  })

  return (
    <React.Fragment>
      {createPortal(<Ref innerRef={innerRef}>{children}</Ref>, mountNode)}
    </React.Fragment>
  )
}

PortalInner.propTypes = {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /** Called with a ref to the inner node. */
  innerRef: customPropTypes.ref,

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
