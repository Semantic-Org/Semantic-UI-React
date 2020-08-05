import { isRefObject } from '@fluentui/react-component-ref'
import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'

import {
  customPropTypes,
  eventStack,
  getElementType,
  getUnhandledProps,
  isBrowser,
} from '../../lib'

/**
 * Sticky content stays fixed to the browser viewport while another column of content is visible on the page.
 */
export default class Sticky extends Component {
  state = {
    active: true,
    sticky: false,
  }

  stickyRef = createRef()
  triggerRef = createRef()

  componentDidMount() {
    if (!isBrowser()) return
    const { active } = this.state

    if (active) {
      this.handleUpdate()
      this.addListeners(this.props.scrollContext)
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.active !== props.active && !props.active) {
      return { active: props.active, sticky: false }
    }

    return { active: props.active }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.active === this.state.active) {
      if (prevProps.scrollContext !== this.props.scrollContext) {
        this.removeListeners(prevProps.scrollContext)
        this.addListeners(this.props.scrollContext)
      }

      return
    }

    if (this.state.active) {
      this.handleUpdate()
      this.addListeners(this.props.scrollContext)
      return
    }

    this.removeListeners(prevProps.scrollContext)
  }

  componentWillUnmount() {
    if (!isBrowser()) return
    const { active } = this.state

    if (active) {
      this.removeListeners(this.props.scrollContext)
      cancelAnimationFrame(this.frameId)
    }
  }

  // ----------------------------------------
  // Events
  // ----------------------------------------

  addListeners = (scrollContext) => {
    const scrollContextNode = isRefObject(scrollContext) ? scrollContext.current : scrollContext

    if (scrollContextNode) {
      eventStack.sub('resize', this.handleUpdate, { target: scrollContextNode })
      eventStack.sub('scroll', this.handleUpdate, { target: scrollContextNode })
    }
  }

  removeListeners = (scrollContext) => {
    const scrollContextNode = isRefObject(scrollContext) ? scrollContext.current : scrollContext

    if (scrollContextNode) {
      eventStack.unsub('resize', this.handleUpdate, { target: scrollContextNode })
      eventStack.unsub('scroll', this.handleUpdate, { target: scrollContextNode })
    }
  }

  // ----------------------------------------
  // Handlers
  // ----------------------------------------

  update = (e) => {
    const { pushing } = this.state

    this.ticking = false
    this.assignRects()

    if (pushing) {
      if (this.didReachStartingPoint()) return this.stickToContextTop(e)
      if (this.didTouchScreenBottom()) return this.stickToScreenBottom(e)
      return this.stickToContextBottom(e)
    }

    if (this.isOversized()) {
      if (this.contextRect.top > 0) return this.stickToContextTop(e)
      if (this.contextRect.bottom < window.innerHeight) return this.stickToContextBottom(e)
    }

    if (this.didTouchScreenTop()) {
      if (this.didReachContextBottom()) return this.stickToContextBottom(e)
      return this.stickToScreenTop(e)
    }

    return this.stickToContextTop(e)
  }

  handleUpdate = (e) => {
    if (!this.ticking) {
      this.ticking = true
      this.frameId = requestAnimationFrame(() => this.update(e))
    }
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  assignRects = () => {
    const { context } = this.props
    const contextNode = isRefObject(context) ? context.current : context || document.body

    this.triggerRect = this.triggerRef.current.getBoundingClientRect()
    this.contextRect = contextNode.getBoundingClientRect()
    this.stickyRect = this.stickyRef.current.getBoundingClientRect()
  }

  computeStyle() {
    const { styleElement } = this.props
    const { bottom, bound, sticky, top } = this.state

    if (!sticky) return styleElement
    return {
      bottom: bound ? 0 : bottom,
      top: bound ? undefined : top,
      width: this.triggerRect.width,
      ...styleElement,
    }
  }

  // Return true when the component reached the bottom of the context
  didReachContextBottom = () => {
    const { offset } = this.props

    return this.stickyRect.height + offset >= this.contextRect.bottom
  }

  // Return true when the component reached the starting point
  didReachStartingPoint = () => this.stickyRect.top <= this.triggerRect.top

  // Return true when the top of the screen overpasses the Sticky component
  didTouchScreenTop = () => this.triggerRect.top < this.props.offset

  // Return true when the bottom of the screen overpasses the Sticky component
  didTouchScreenBottom = () => {
    const { bottomOffset } = this.props

    return this.contextRect.bottom + bottomOffset > window.innerHeight
  }

  // Return true if the height of the component is higher than the window
  isOversized = () => this.stickyRect.height > window.innerHeight

  // ----------------------------------------
  // Stick helpers
  // ----------------------------------------

  // If true, the component will stick to the bottom of the screen instead of the top
  pushing = (pushing) => {
    const { pushing: possible } = this.props

    if (possible) this.setState({ pushing })
  }

  stick = (e, bound) => {
    this.setState({ bound, sticky: true })
    _.invoke(this.props, 'onStick', e, this.props)
  }

  unstick = (e, bound) => {
    this.setState({ bound, sticky: false })
    _.invoke(this.props, 'onUnstick', e, this.props)
  }

  stickToContextBottom = (e) => {
    _.invoke(this.props, 'onBottom', e, this.props)

    this.stick(e, true)
    this.pushing(true)
  }

  stickToContextTop = (e) => {
    _.invoke(this.props, 'onTop', e, this.props)

    this.unstick(e, false)
    this.pushing(false)
  }

  stickToScreenBottom = (e) => {
    const { bottomOffset: bottom } = this.props

    this.stick(e, false)
    this.setState({ bottom, top: null })
  }

  stickToScreenTop = (e) => {
    const { offset: top } = this.props

    this.stick(e, false)
    this.setState({ top, bottom: null })
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  render() {
    const { children, className } = this.props
    const { bottom, bound, sticky } = this.state
    const rest = getUnhandledProps(Sticky, this.props)
    const ElementType = getElementType(Sticky, this.props)

    const containerClasses = cx(
      sticky && 'ui',
      sticky && 'stuck-container',
      sticky && (bound ? 'bound-container' : 'fixed-container'),
      className,
    )
    const elementClasses = cx(
      'ui',
      sticky && (bound ? 'bound bottom' : 'fixed'),
      sticky && !bound && (bottom === null ? 'top' : 'bottom'),
      'sticky',
    )
    const triggerStyles = sticky && this.stickyRect ? { height: this.stickyRect.height } : {}

    return (
      <ElementType {...rest} className={containerClasses}>
        <div ref={this.triggerRef} style={triggerStyles} />
        <div className={elementClasses} ref={this.stickyRef} style={this.computeStyle()}>
          {children}
        </div>
      </ElementType>
    )
  }
}

Sticky.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A Sticky can be active. */
  active: PropTypes.bool,

  /** Offset in pixels from the bottom of the screen when fixing element to viewport. */
  bottomOffset: PropTypes.number,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Context which sticky element should stick to. */
  context: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject]),

  /** Offset in pixels from the top of the screen when fixing element to viewport. */
  offset: PropTypes.number,

  /**
   * Callback when element is bound to bottom of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBottom: PropTypes.func,

  /**
   * Callback when element is fixed to page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onStick: PropTypes.func,

  /**
   * Callback when element is bound to top of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onTop: PropTypes.func,

  /**
   * Callback when element is unfixed from page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onUnstick: PropTypes.func,

  /** Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up. */
  pushing: PropTypes.bool,

  /** Context which sticky should attach onscroll events. */
  scrollContext: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject]),

  /** Custom style for sticky element. */
  styleElement: PropTypes.object,
}

Sticky.defaultProps = {
  active: true,
  bottomOffset: 0,
  offset: 0,
  scrollContext: isBrowser() ? window : null,
}
