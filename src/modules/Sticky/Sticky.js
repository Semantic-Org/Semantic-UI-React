import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { META } from '../../lib'
import StickyContext from './StickyContext'

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
    offset: 0,
    bottomOffset: 0,
  }

  static propTypes = {
    as: PropTypes.function,
    children: PropTypes.node,
    className: PropTypes.string,
    offset: PropTypes.number,
    bottomOffset: PropTypes.number,
    pushing: PropTypes.bool,
  }

  static contextTypes = {
    contextEl: PropTypes.node,
  }

  static Context = StickyContext

  componentDidMount() {
    this.contextEl = this.getContextEl()
    this.update()
    window.addEventListener('scroll', this.update)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.update)
  }

  getContextEl() {
    let parent = this.refs.trigger.parentElement

    while (!(
      (parent === document.body) ||
      (parent.classList.contains('ui') && parent.classList.contains('context'))
    )) {
      parent = parent.parentElement
    }

    return parent
  }

  calcBoundingRects() {
    this.triggerBoundingRect = this.refs.trigger.getBoundingClientRect()
    this.contextBoundingRect = this.contextEl.getBoundingClientRect()
    this.stickyBoundingRect = this.refs.sticky.getBoundingClientRect()
  }

  // Return true when the component reached the bottom of the context
  hasReachedContextBottom() {
    return this.stickyBoundingRect.height + this.props.offset >= this.contextBoundingRect.bottom
  }

  // Return true when the component reached the top of the context
  hasReachedContextTop() {
    return this.stickyBoundingRect.top <= this.triggerBoundingRect.top
  }

  // Return true when the top of the screen overpasses the Sticky component
  hasTouchedScreenTop() {
    return this.triggerBoundingRect.top < this.props.offset
  }

  // Return true when the bottom of the screen overpasses the Sticky component
  hasTouchedScreenBottom() {
    return this.contextBoundingRect.bottom + this.props.bottomOffset <= window.innerHeight
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
  setSticky(sticky) {
    this.setState({ sticky })
  }

  stickToContextTop() {
    this.setSticky(false)
    this.setPushing(false)
  }

  stickToContextBottom() {
    this.setSticky(true)
    this.setState({
      top: this.contextBoundingRect.bottom - this.stickyBoundingRect.height,
      bottom: null,
    })
    this.setPushing(true)
  }

  stickToScreenTop() {
    this.setSticky(true)
    this.setState({ top: this.props.offset, bottom: null })
  }

  stickToScreenBottom() {
    this.setSticky(true)
    this.setState({ top: null, bottom: this.props.bottomOffset })
  }

  update = () => {
    this.calcBoundingRects()

    const state = this.state || {}

    if (state.pushing) {
      if (this.hasReachedContextTop()) {
        return this.stickToContextTop()
      }

      if (this.hasTouchedScreenBottom()) {
        return this.stickToContextBottom()
      }

      return this.stickToScreenBottom()
    }

    if (this.isOversized()) {
      if (this.contextBoundingRect.top > 0) {
        return this.stickToContextTop()
      }

      if (this.contextBoundingRect.bottom < window.innerHeight) {
        return this.stickToContextBottom()
      }
    }

    if (this.hasTouchedScreenTop()) {
      if (this.hasReachedContextBottom()) {
        return this.stickToContextBottom()
      }

      return this.stickToScreenTop()
    }

    return this.stickToContextTop()
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
    return (
      <div {...this.props}>
        <div ref='trigger' />
        <div ref='sticky' style={this.getStyle()}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Sticky
