import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  META,
  getElementType,
  getUnhandledProps,
} from '../../lib'
import StickyContext from './StickyContext'

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

  static contextTypes = {
    contextEl: PropTypes.node,
  }

  static Context = StickyContext

  state = {}

  componentDidMount() {
    this.contextEl = this.getContextEl()
    this.update()
    window.addEventListener('scroll', this.update)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.update)
  }

  getContextEl() {
    let parent = this.triggerRef.parentElement

    while (!(
      (parent === document.body) ||
      (parent.classList.contains('ui') && parent.classList.contains('context'))
    )) {
      parent = parent.parentElement

      if (!parent) {
        parent = document.body
      }
    }

    return parent
  }

  calcBoundingRects() {
    this.triggerBoundingRect = this.triggerRef.getBoundingClientRect()
    this.contextBoundingRect = this.contextEl.getBoundingClientRect()
    this.stickyBoundingRect = this.stickyRef.getBoundingClientRect()
  }

  // Return true when the component reached the bottom of the context
  hasReachedContextBottom() {
    return this.stickyBoundingRect.height + this.props.offset >= this.contextBoundingRect.bottom
  }

  // Return true when the component reached the starting point
  hasReachedStartingPoint() {
    return this.stickyBoundingRect.top <= this.triggerBoundingRect.top
  }

  // Return true when the top of the screen overpasses the Sticky component
  hasTouchedScreenTop() {
    return this.triggerBoundingRect.top < this.props.offset
  }

  // Return true when the bottom of the screen overpasses the Sticky component
  hasTouchedScreenBottom() {
    return this.contextBoundingRect.bottom + this.props.bottomOffset > window.innerHeight
  }

  // Return true if the height of the component is higher than the window
  isOversized() {
    return this.stickyBoundingRect.height > window.innerHeight
  }

  // If true, the component will stick to the bottom of the screen instead of the top
  setPushing(pushing) {
    if (this.props.pushing) this.setState({ pushing })
  }

  stickToContextTop(e) {
    if (e && this.props.onTop) this.props.onTop(e)
    this.unstick(e)
    this.setPushing(false)
  }

  stickToContextBottom(e) {
    if (e && this.props.onBottom) this.props.onBottom(e)
    this.stick(e)
    this.setState({
      top: this.contextBoundingRect.bottom - this.stickyBoundingRect.height,
      bottom: null,
    })
    this.setPushing(true)
  }

  stickToScreenTop(e) {
    this.stick(e)
    this.setState({ top: this.props.offset, bottom: null })
  }

  stickToScreenBottom(e) {
    this.stick(e)
    this.setState({ top: null, bottom: this.props.bottomOffset })
  }

  update = (e) => {
    this.calcBoundingRects()

    const state = this.state || {}

    if (state.pushing) {
      if (this.hasReachedStartingPoint()) {
        return this.stickToContextTop(e)
      }

      if (!this.hasTouchedScreenBottom()) {
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

    if (this.hasTouchedScreenTop()) {
      if (this.hasReachedContextBottom()) {
        return this.stickToContextBottom(e)
      }

      return this.stickToScreenTop(e)
    }

    return this.stickToContextTop(e)
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  getStyle() {
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
    _.invoke(this.props, 'onStick', e, this.props)
  }

  unstick = e => {
    this.setState({ sticky: false })
    _.invoke(this.props, 'onUnstick', e, this.props)
  }

  // ----------------------------------------
  // Refs
  // ----------------------------------------

  handleTriggerRef = c => (this.triggerRef = c)

  handleStickyRef = c => (this.stickyRef = c)

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
