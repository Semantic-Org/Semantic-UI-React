import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  META,
  getElementType,
  getUnhandledProps,
} from '../../lib'

/**
 * Sticky content stays fixed to the browser viewport while
 * another column of content is visible on the page.
 */
export default class Sticky extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Context which sticky element should stick to. */
    context: PropTypes.object,

    /** Offset in pixels from the top of the screen when fixing element to viewport. */
    offset: PropTypes.number,

    /** Offset in pixels from the bottom of the screen when fixing element to viewport. */
    bottomOffset: PropTypes.number,

    /** Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up. */
    pushing: PropTypes.bool,

    /* Callback when element is bound to bottom of parent container. */
    onBottom: PropTypes.func,

    /**
     * Callback when element is fixed to page.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     * */
    onStick: PropTypes.func,

    /* Callback when element is bound to top of parent container. */
    onTop: PropTypes.func,

    /**
     * Callback when element is unfixed from page.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     * */
    onUnstick: PropTypes.func,
  }

  static defaultProps = {
    offset: 0,
    bottomOffset: 0,
  }

  static _meta = {
    name: 'Sticky',
    type: META.TYPES.MODULE,
  }

  state = {
    sticky: false,
    top: null,
    bottom: null,
  }

  componentDidMount() {
    this.handleUpdate()
    window.addEventListener('scroll', this.handleUpdate)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleUpdate)
  }

  calcBoundingRects = () => {
    const { context } = this.props
    this.triggerBoundingRect = this.triggerRef.getBoundingClientRect()
    this.contextBoundingRect = (context || document.body).getBoundingClientRect()
    this.stickyBoundingRect = this.stickyRef.getBoundingClientRect()
  }

  // Return true when the component reached the bottom of the context
  reachedContextBottom = () => {
    const { offset } = this.props
    return this.stickyBoundingRect.height + offset >= this.contextBoundingRect.bottom
  }

  // Return true when the bottom of the screen overpasses the Sticky component
  touchedScreenBottom = () => {
    const { bottomOffset } = this.props
    return this.contextBoundingRect.bottom + bottomOffset > window.innerHeight
  }

  // Return true when the top of the screen overpasses the Sticky component
  touchedScreenTop = () => {
    const { offset } = this.props
    return this.triggerBoundingRect.top < offset
  }

  // Return true when the component reached the starting point
  reachedStartingPoint = () => {
    return this.stickyBoundingRect.top <= this.triggerBoundingRect.top
  }

  // Return true if the height of the component is higher than the window
  isOversized = () => {
    return this.stickyBoundingRect.height > window.innerHeight
  }

  // If true, the component will stick to the bottom of the screen instead of the top
  setPushing = (pushing) => {
    if (this.props.pushing) this.setState({ pushing })
  }

  stickToContextBottom = (e) => {
    if (e) _.invoke(this.props, 'onBottom', e, this.props)
    this.stick(e)
    this.setState({
      top: this.contextBoundingRect.bottom - this.stickyBoundingRect.height,
      bottom: null,
    })
    this.setPushing(true)
  }

  stickToContextTop = (e) => {
    if (e) _.invoke(this.props, 'onTop', e, this.props)
    this.unstick(e)
    this.setPushing(false)
  }

  stickToScreenBottom = (e) => {
    const { bottomOffset: bottom } = this.props
    this.stick(e)
    this.setState({ bottom, top: null })
  }

  stickToScreenTop = (e) => {
    const { offset: top } = this.props
    this.stick(e)
    this.setState({ bottom: null, top })
  }

  handleUpdate = (e) => {
    this.calcBoundingRects()

    if (this.state.pushing) {
      if (this.reachedStartingPoint()) {
        return this.stickToContextTop(e)
      }

      if (!this.touchedScreenBottom()) {
        return this.stickToContextBottom(e)
      }

      return this.stickToScreenBottom(e)
    }

    if (this.isOversized()) {
      if (this.contextBoundingRect.top > 0) {
        return this.stickToContextTop(e)
      }

      if (this.contextBoundingRect.bottom < window.innerHeight) {
        return this.stickToContextBottom(e)
      }
    }

    if (this.touchedScreenTop()) {
      if (this.reachedContextBottom()) {
        return this.stickToContextBottom(e)
      }

      return this.stickToScreenTop(e)
    }

    return this.stickToContextTop(e)
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  getStyle = () => {
    const { bottom, sticky, top } = this.state

    if (!sticky) return {}
    return {
      bottom,
      top,
      position: 'fixed',
      width: this.triggerBoundingRect.width,
    }
  }

  stick = e => {
    this.setState({ sticky: true })
    if (e) _.invoke(this.props, 'onStick', e, this.props)
  }

  unstick = e => {
    this.setState({ sticky: false })
    if (e) _.invoke(this.props, 'onUnstick', e, this.props)
  }

  // ----------------------------------------
  // Refs
  // ----------------------------------------

  handleStickyRef = c => (this.stickyRef = c)

  handleTriggerRef = c => (this.triggerRef = c)

  render() {
    const { children, className } = this.props
    const rest = getUnhandledProps(Sticky, this.props)
    const ElementType = getElementType(Sticky, this.props)

    return (
      <ElementType {...rest} className={className}>
        <div ref={this.handleTriggerRef} />
        <div ref={this.handleStickyRef} style={this.getStyle()}>{children}</div>
      </ElementType>
    )
  }
}
