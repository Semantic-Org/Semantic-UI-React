import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import Portal from '../Portal'
import Transition from '../../modules/Transition'
import { TRANSITION_STATUS_ENTERING } from '../../modules/Transition/utils/computeStatuses'
import { getUnhandledProps, makeDebugger, useForceUpdate } from '../../lib'

const debug = makeDebugger('transitionable_portal')

function usePortalState(props) {
  const portalOpen = React.useRef(false)
  const forceUpdate = useForceUpdate()

  const setPortalOpen = React.useCallback((value) => {
    portalOpen.current = value
    forceUpdate()
  }, [])

  React.useEffect(() => {
    if (!_.isUndefined(props.open)) {
      portalOpen.current = props.open
    }
  }, [props.open])

  if (_.isUndefined(props.open)) {
    // This is definitely a hack :(
    //
    // It's coupled with handlePortalClose() for force set the state of `portalOpen` omitting
    // props.open. It's related to implementation of the component itself as `onClose()` will be
    // called after a transition will end.
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/2382
    if (portalOpen.current === -1) {
      return [false, setPortalOpen]
    }

    return [portalOpen.current, setPortalOpen]
  }

  return [props.open, setPortalOpen]
}

/**
 * A sugar for `Portal` and `Transition`.
 * @see Portal
 * @see Transition
 */
function TransitionablePortal(props) {
  const { children, transition } = props

  const [portalOpen, setPortalOpen] = usePortalState(props)
  const [transitionVisible, setTransitionVisible] = React.useState(false)

  const open = portalOpen || transitionVisible

  // ----------------------------------------
  // Callback handling
  // ----------------------------------------

  const handlePortalClose = () => {
    debug('handlePortalClose()')
    setPortalOpen(-1)
  }

  const handlePortalOpen = () => {
    debug('handlePortalOpen()')
    setPortalOpen(true)
  }

  const handleTransitionHide = (nothing, data) => {
    debug('handleTransitionHide()')

    setTransitionVisible(false)
    _.invoke(props, 'onClose', null, { ...data, portalOpen: false, transitionVisible: false })
    _.invoke(props, 'onHide', null, { ...data, portalOpen, transitionVisible: false })
  }

  const handleTransitionStart = (nothing, data) => {
    debug('handleTransitionStart()')
    const { status } = data
    const nextTransitionVisible = status === TRANSITION_STATUS_ENTERING

    _.invoke(props, 'onStart', null, {
      ...data,
      portalOpen,
      transitionVisible: nextTransitionVisible,
    })

    // Heads up! TransitionablePortal fires onOpen callback on the start of transition animation
    if (!nextTransitionVisible) {
      return
    }

    setTransitionVisible(nextTransitionVisible)
    _.invoke(props, 'onOpen', null, {
      ...data,
      transitionVisible: nextTransitionVisible,
      portalOpen: true,
    })
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const rest = getUnhandledProps(TransitionablePortal, props)

  return (
    <Portal {...rest} open={open} onOpen={handlePortalOpen} onClose={handlePortalClose}>
      <Transition
        {...transition}
        transitionOnMount
        onStart={handleTransitionStart}
        onHide={handleTransitionHide}
        visible={portalOpen}
      >
        {children}
      </Transition>
    </Portal>
  )
}

TransitionablePortal.displayName = 'TransitionablePortal'
TransitionablePortal.propTypes = {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onClose: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onHide: PropTypes.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onOpen: PropTypes.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onStart: PropTypes.func,

  /** Controls whether or not the portal is displayed. */
  open: PropTypes.bool,

  /** Transition props. */
  transition: PropTypes.object,
}

TransitionablePortal.defaultProps = {
  transition: {
    animation: 'scale',
    duration: 400,
  },
}

export default TransitionablePortal
