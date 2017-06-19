import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  customPropTypes,
  META,
  getUnhandledProps,
} from '../../lib'

/**
 * Sticky content stays fixed to the browser viewport while
 * another column of content is visible on the page.
 */
class Sticky extends Component {
  static _meta = {
    name: 'Sticky',
    type: META.TYPES.MODULE,
  }

  static defaultProps = {
    as: 'div',
    offset: 0,
    bottomOffset: 0,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Context which sticky element should stick to. */
    context: PropTypes.node,

    /** Offset in pixels from the top of the screen when fixing element to viewport. */
    offset: PropTypes.number,

    /** Offset in pixels from the bottom of the screen when fixing element to viewport. */
    bottomOffset: PropTypes.number,

    /**
     * Whether element should be "pushed" by the viewport,
     * attaching to the bottom of the screen when scrolling up.
     */
    pushing: PropTypes.bool,

    /* Callback when element is fixed to page. */
    onStick: PropTypes.func,

    /* Callback when element is unfixed from page. */
    onUnstick: PropTypes.func,

    /* Callback when element is bound to top of parent container. */
    onTop: PropTypes.func,

    /* Callback when element is bound to bottom of parent container. */
    onBottom: PropTypes.func,
  }

  componentDidMount() {
    this.update()
    window.addEventListener('scroll', this.update)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.update)
  }

  calcBoundingRects() {
    this.triggerBoundingRect = this.refs.trigger.getBoundingClientRect()
    this.contextBoundingRect = (this.props.context || document.body).getBoundingClientRect()
    this.stickyBoundingRect = this.refs.sticky.getBoundingClientRect()
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

  // If true, the component have position: fixed
  setSticky(e, sticky) {
    const { onStick, onUnstick } = this.props

    this.setState({ sticky })

    if (e && sticky && onStick) {
      onStick(e)
    }

    if (e && !sticky && onUnstick) {
      onUnstick(e)
    }
  }

  stickToContextTop(e) {
    if (e && this.props.onTop) this.props.onTop(e)
    this.setSticky(e, false)
    this.setPushing(false)
  }

  stickToContextBottom(e) {
    if (e && this.props.onBottom) this.props.onBottom(e)
    this.setSticky(e, true)
    this.setState({
      top: this.contextBoundingRect.bottom - this.stickyBoundingRect.height,
      bottom: null,
    })
    this.setPushing(true)
  }

  stickToScreenTop(e) {
    this.setSticky(e, true)
    this.setState({ top: this.props.offset, bottom: null })
  }

  stickToScreenBottom(e) {
    this.setSticky(e, true)
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

  getStyle() {
    if (this.state && this.state.sticky) {
      return {
        position: 'fixed',
        width: this.triggerBoundingRect.width,
        top: this.state.top,
        bottom: this.state.bottom,
      }
    }
    return {}
  }

  render() {
    const rest = getUnhandledProps(Sticky, this.props)
    const As = this.props.as

    return (
      <As {...rest} className={this.props.className}>
        <div ref='trigger' />
        <div ref='sticky' style={this.getStyle()}>
          {this.props.children}
        </div>
      </As>
    )
  }
}

export default Sticky
