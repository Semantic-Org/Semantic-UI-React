import PropTypes from 'prop-types'
import React, {Component} from 'react'

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

    /** Controls whether or not the portal is displayed. */
    open: PropTypes.bool,
  }

  static _meta = {
    name: 'TransitionablePortal',
    type: META.TYPES.ADDON,
  }

  constructor(props) {
    super(props)

    this.state = {
      portalOpen: props.open,
    }
  }

  // ----------------------------------------
  // Callback handling
  // ----------------------------------------

  handlePortalMount = (e, props) => {
    debug('handlePortalOpen()')

    this.setState({portalOpen: true})
  }

  handlePortalUnmount = (e, props) => {
    debug('handlePortalUnmount()')

    this.setState({portalOpen: !this.state.portalOpen})
  }

  handleTransitionHide = (e, props) => {
    debug('handleTransitionHide()')

    this.setState({transitionVisible: false})
  }

  handleTransitionStart = (e, {status}) => {
    debug('handleTransitionStart()')

    if(status === Transition.ENTERING) this.setState({transitionVisible: true})
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  render() {
    const {children} = this.props
    const {portalOpen, transitionVisible} = this.state

    const open = portalOpen || transitionVisible
    const rest = getUnhandledProps(TransitionablePortal, this.props)

    return (
      <Portal
        {...rest}
        open={open}
        onOpen={this.handlePortalMount}
        onClose={this.handlePortalUnmount}
      >
        <Transition
          duration={2000}
          animation='scale'
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
