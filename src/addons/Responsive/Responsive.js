import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  eventStack,
  getUnhandledProps,
  isBrowser,
  META,
  withElementType,
} from '../../lib'

/**
 * Responsive can control visibility of content.
 */
class Responsive extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** The maximum width at which content will be displayed. */
    maxWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** The minimum width at which content will be displayed. */
    minWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /**
     * Called on update.
     *
     * @param {SyntheticEvent} event - The React SyntheticEvent object
     * @param {object} data - All props and the event value.
     */
    onUpdate: PropTypes.func,
  }

  static _meta = {
    name: 'Responsive',
    type: META.TYPES.ADDON,
  }

  constructor(...args) {
    super(...args)

    this.state = { width: isBrowser ? window.innerWidth : 0 }
  }

  componentDidMount() {
    eventStack.sub('resize', this.handleResize, { target: 'window' })
  }

  componentWillUnmount() {
    eventStack.unsub('resize', this.handleResize, { target: 'window' })
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  fitsMaxWidth = () => {
    const { maxWidth } = this.props
    const { width } = this.state

    return _.isNil(maxWidth) ? true : width <= maxWidth
  }

  fitsMinWidth = () => {
    const { minWidth } = this.props
    const { width } = this.state

    return _.isNil(minWidth) ? true : width >= minWidth
  }

  isVisible = () => this.fitsMinWidth() && this.fitsMaxWidth()

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  handleResize = (e) => {
    if (this.ticking) return

    this.ticking = true
    requestAnimationFrame(() => this.handleUpdate(e))
  }

  handleUpdate = (e) => {
    this.ticking = false
    const width = window.innerWidth

    this.setState({ width })
    _.invoke(this.props, 'onUpdate', e, { ...this.props, width })
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  render() {
    const { as: ElementType, children } = this.props
    const rest = getUnhandledProps(Responsive, this.props)
console.error(ElementType)
    if (this.isVisible()) return <ElementType {...rest}>{children}</ElementType>
    return null
  }
}

const ResponsiveEnc = withElementType(Responsive)

ResponsiveEnc.onlyMobile = { minWidth: 320, maxWidth: 767 }
ResponsiveEnc.onlyTablet = { minWidth: 768, maxWidth: 991 }
ResponsiveEnc.onlyComputer = { minWidth: 992 }
ResponsiveEnc.onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 }
ResponsiveEnc.onlyWidescreen = { minWidth: 1920 }

export default ResponsiveEnc
