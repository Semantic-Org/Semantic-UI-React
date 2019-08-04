import { documentRef } from '@stardust-ui/react-component-event-listener'
import useEventListener from '@stardust-ui/react-component-event-listener/dist/commonjs/hooks/useEventListener'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { createPortal } from 'react-dom'

import { customPropTypes, handleRef } from '../../lib'
import Ref from '../Ref'

/**
 * An inner component that allows you to render children outside their parent.
 */
function PortalInner(props) {
  const { children, innerRef, mountNode = document.body } = props

  const contentRef = React.useRef()
  const handleContentRef = React.useCallback(
    (c) => {
      contentRef.current = c
      handleRef(innerRef, c)
    },
    [innerRef],
  )
  React.useLayoutEffect(() => {
    _.invoke(props, 'onMount', null, props)

    return () => {
      _.invoke(props, 'onUnmount', null, props)
    }
  }, [])

  useEventListener({
    listener: props.onMouseLeave,
    type: 'mouseleave',
    targetRef: contentRef,
  })
  useEventListener({
    listener: props.onMouseEnter,
    targetRef: contentRef,
    type: 'mouseenter',
  })
  useEventListener({
    listener: props.onDocumentClick,
    type: 'click',
    targetRef: documentRef,
  })
  useEventListener({
    listener: props.onDocumentKeyDown,
    targetRef: documentRef,
    type: 'keydown',
  })
  useEventListener({
    listener: props.onDocumentMouseDown,
    targetRef: documentRef,
    type: 'mousedown',
  })

  return (
    <React.Fragment>
      {createPortal(<Ref innerRef={handleContentRef}>{children}</Ref>, mountNode)}
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
   * Called on a document click.
   *
   * @param {MouseEvent} event
   */
  onDocumentClick: PropTypes.func,

  /**
   * Called on document key down.
   *
   * @param {KeyboardEvent} event
   */
  onDocumentKeyDown: PropTypes.func,

  /**
   * Called on a document mouse down.
   *
   * @param {MouseEvent} event
   */
  onDocumentMouseDown: PropTypes.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when mouse leaves the portal.
   *
   * @param {MouseEvent} event
   */
  onMouseLeave: PropTypes.func,

  /**
   * Called when mouse enters the portal.
   *
   * @param {MouseEvent} event
   */
  onMouseEnter: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func,
}

export default PortalInner
