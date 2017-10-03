import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Portal from '../Portal'
import Transition from '../../modules/Transition'
import {
  getUnhandledProps,
  makeDebugger,
  META,
} from '../../lib'

const debug = makeDebugger('transitionable_portal')

/**
 * A sugar for `Portal` and `Transition`.
 * @see Portal
 * @see Transition
 */
export default class TransitionablePortal extends Component {
  static propTypes = {
    /** Primary content. */
    children: PropTypes.node.isRequired,

    /**
     * Called when a close event happens
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

  static _meta = {
    name: 'TransitionablePortal',
    type: META.TYPES.ADDON,
  }

  static defaultProps = {
    transition: {
      animation: 'scale',
      duration: 400,
    },
  }

  constructor(props) {
    super(props)

    this.state = {
      portalOpen: props.open,
    }
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------

  componentWillReceiveProps({ open }) {
    debug('componentWillReceiveProps()', { open })

    // Heads up! We apply `open` prop only when it's defined, otherwise it will break autocontrolled Portal
    if (!_.isNil(open)) this.setState({ portalOpen: open })
  }

  // ----------------------------------------
  // Callback handling
  // ----------------------------------------

  handlePortalClose = (e, data) => {
    debug('handlePortalClose()')
    const { open } = this.props
    const { portalOpen, transitionVisible } = this.state

    // Heads up! We simply call `onClose` when component is controlled with `open` prop.
    // But, when it's autocontrolled we should change the state to opposite to keep the transition
    // queue
    if (!_.isNil(open)) {
      _.invoke(this.props, 'onClose', e, { ...data, transitionVisible, portalOpen: false })
      return
    }

    this.setState({ portalOpen: !portalOpen })
    _.invoke(this.props, 'onClose', e, { ...data, portalOpen: !portalOpen, transitionVisible })
  }

  handlePortalOpen = (e, data) => {
    debug('handlePortalOpen()')
    const { transitionVisible } = this.state

    this.setState({ portalOpen: true })
    _.invoke(this.props, 'onOpen', e, { ...data, transitionVisible, portalOpen: true })
  }

  handleTransitionHide = (e, data) => {
    debug('handleTransitionHide()')
    const { portalOpen } = this.state

    this.setState({ transitionVisible: false })
    _.invoke(this.props, 'onHide', e, { ...data, portalOpen, transitionVisible: false })
  }

  handleTransitionStart = (e, data) => {
    debug('handleTransitionStart()')
    const { portalOpen } = this.state
    const { status } = data

    if (status === Transition.ENTERING) this.setState({ transitionVisible: true })
    _.invoke(this.props, 'onStart', e, { ...data, portalOpen, transitionVisible: true })
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
      <Portal
        {...rest}
        open={open}
        onOpen={this.handlePortalOpen}
        onClose={this.handlePortalClose}
      >
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
