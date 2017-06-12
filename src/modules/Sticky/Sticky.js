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

  hasReachedContextBottom() {
    return this.stickyBoundingRect.height >= this.contextBoundingRect.bottom - 1
  }

  hasReachedTrigger() {
    return this.stickyBoundingRect.top <= this.triggerBoundingRect.top
  }

  hasBeenTriggered() {
    return this.triggerBoundingRect.top < 0
  }

  isOversized() {
    return this.stickyBoundingRect.height > window.innerHeight
  }

  isContextBottomVisible() {
    return this.contextBoundingRect.bottom <= window.innerHeight
  }

  setPushing(pushing) {
    if (this.props.pushing) this.setState({ pushing })
  }

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
      if (this.hasReachedTrigger()) {
        return this.stickToContextTop()
      }

      if (this.isContextBottomVisible()) {
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

    if (this.hasBeenTriggered()) {
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
