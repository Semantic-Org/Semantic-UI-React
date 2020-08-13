import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Portal from '../Portal'
import Transition from '../../modules/Transition'
import { TRANSITION_STATUS_ENTERING } from '../../modules/Transition/utils/computeStatuses'
import { getUnhandledProps, makeDebugger } from '../../lib'

const debug = makeDebugger('transitionable_portal')

/**
 * A sugar for `Portal` and `Transition`.
 * @see Portal
 * @see Transition
 */
export default class TransitionablePortal extends Component {
  state = {}

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------

  static getDerivedStateFromProps(props, state) {
    // This is definitely a hack :(
    //
    // It's coupled with handlePortalClose() for force set the state of `portalOpen` omitting
    // props.open. It's related to implementation of the component itself as `onClose()` will be
    // called after a transition will end.
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/2382
    if (state.portalOpen === -1) {
      return { portalOpen: false }
    }

    if (_.isUndefined(props.open)) {
      return null
    }

    return { portalOpen: props.open }
  }

  // ----------------------------------------
  // Callback handling
  // ----------------------------------------

  handlePortalClose = () => {
    debug('handlePortalClose()')

    this.setState({ portalOpen: -1 })
  }

  handlePortalOpen = () => {
    debug('handlePortalOpen()')

    this.setState({ portalOpen: true })
  }

  handleTransitionHide = (nothing, data) => {
    debug('handleTransitionHide()')
    const { portalOpen } = this.state

    this.setState({ transitionVisible: false })
    _.invoke(this.props, 'onClose', null, { ...data, portalOpen: false, transitionVisible: false })
    _.invoke(this.props, 'onHide', null, { ...data, portalOpen, transitionVisible: false })
  }

  handleTransitionStart = (nothing, data) => {
    debug('handleTransitionStart()')
    const { portalOpen } = this.state
    const { status } = data
    const transitionVisible = status === TRANSITION_STATUS_ENTERING

    _.invoke(this.props, 'onStart', null, { ...data, portalOpen, transitionVisible })

    // Heads up! TransitionablePortal fires onOpen callback on the start of transition animation
    if (!transitionVisible) return

    this.setState({ transitionVisible })
    _.invoke(this.props, 'onOpen', null, { ...data, transitionVisible, portalOpen: true })
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  render() {
    debug('render()', this.state)

    const { children, transition } = this.props
    const { portalOpen, transitionVisible } = this.state

    const open = portalOpen || transitionVisible
    const rest = getUnhandledProps(TransitionablePortal, this.props)

    return (
      <Portal {...rest} open={open} onOpen={this.handlePortalOpen} onClose={this.handlePortalClose}>
        <Transition
          {...transition}
          transitionOnMount
          onStart={this.handleTransitionStart}
          onHide={this.handleTransitionHide}
          visible={portalOpen}
        >
          {children}
        </Transition>
      </Portal>
    )
  }
}

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
