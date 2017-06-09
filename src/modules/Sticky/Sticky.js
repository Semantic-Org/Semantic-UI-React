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

  static propTypes = {
    as: PropTypes.function,
    children: PropTypes.node,
    className: PropTypes.string,
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

  setPushing(pushing) {
    if (this.props.pushing) this.setState({ pushing })
  }

  setSticky(sticky) {
    this.setState({ sticky })
  }

  stickToContextTop() {
    this.setSticky(false)
  }

  stickToContextBottom() {
    this.setSticky(true)
    this.setState({
      top: this.contextBoundingRect.bottom - this.stickyBoundingRect.height,
      bottom: null,
    })
  }

  stickToScreenTop() {
    this.setSticky(true)
    this.setState({ top: 0, bottom: null })
  }

  stickToScreenBottom() {
    this.setSticky(true)
    this.setState({ top: null, bottom: 0 })
  }

  update = () => {
    this.calcBoundingRects()

    const state = this.state || {}

    if (state.pushing) {
      if (this.stickyBoundingRect.top <= this.triggerBoundingRect.top) {
        this.stickToContextTop()
        this.setPushing(false)
      } else if (this.stickyBoundingRect.bottom >= window.innerHeight) {
        this.stickToScreenBottom()
      } else {
        this.stickToContextBottom()
      }
    } else {
      if (this.stickyBoundingRect.height > this.contextBoundingRect.bottom) {
        this.stickToContextBottom()
        this.setPushing(true)
      } else if (this.triggerBoundingRect.top < 0) {
        this.stickToScreenTop()
      } else {
        this.stickToContextTop()
      }
    }
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
