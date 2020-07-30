import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { eventStack, getElementType, getUnhandledProps, isBrowser } from '../../lib'
import isVisible from './lib/isVisible'

/**
 * Responsive can control visibility of content.
 *
 * @deprecated This component is deprecated and will be removed in next major release.
 */
export default class Responsive extends Component {
  state = {
    visible: true,
  }

  static getDerivedStateFromProps(props) {
    const width = _.invoke(props, 'getWidth')
    const visible = isVisible(width, props)

    return { visible }
  }

  componentDidMount() {
    const { fireOnMount } = this.props

    if (process.env.NODE_ENV !== 'production') {
      if (!Responsive.__deprecationWarningWasRaised) {
        Responsive.__deprecationWarningWasRaised = true

        // eslint-disable-next-line no-console
        console.warn(
          'Warning: "Responsive" component from Semantic UI React is deprecated and will be removed in the next major release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4008',
        )
      }
    }

    eventStack.sub('resize', this.handleResize, { target: 'window' })
    if (fireOnMount) this.handleUpdate()
  }

  componentWillUnmount() {
    eventStack.unsub('resize', this.handleResize, { target: 'window' })
    cancelAnimationFrame(this.frameId)
  }

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  handleResize = (e) => {
    if (this.ticking) return

    this.ticking = true
    this.frameId = requestAnimationFrame(() => this.handleUpdate(e))
  }

  handleUpdate = (e) => {
    this.ticking = false

    const { visible } = this.state
    const width = _.invoke(this.props, 'getWidth')
    const nextVisible = isVisible(width, this.props)

    if (visible !== nextVisible) this.setState({ visible: nextVisible })
    _.invoke(this.props, 'onUpdate', e, { ...this.props, width })
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  render() {
    const { children } = this.props
    const { visible } = this.state

    const ElementType = getElementType(Responsive, this.props)
    const rest = getUnhandledProps(Responsive, this.props)

    if (visible) return <ElementType {...rest}>{children}</ElementType>
    return null
  }
}

Responsive.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Fires callbacks immediately after mount. */
  fireOnMount: PropTypes.bool,

  /**
   * Called to get width of screen. Defaults to using `window.innerWidth` when in a browser;
   * otherwise, assumes a width of 0.
   */
  getWidth: PropTypes.func,

  /** The maximum width at which content will be displayed. */
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The minimum width at which content will be displayed. */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Called on update.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onUpdate: PropTypes.func,
}

Responsive.defaultProps = {
  getWidth: () => (isBrowser() ? window.innerWidth : 0),
}

Responsive.onlyMobile = { minWidth: 320, maxWidth: 767 }
Responsive.onlyTablet = { minWidth: 768, maxWidth: 991 }
Responsive.onlyComputer = { minWidth: 992 }
Responsive.onlyLargeScreen = { minWidth: 1200, maxWidth: 1919 }
Responsive.onlyWidescreen = { minWidth: 1920 }

if (process.env.NODE_ENV !== 'production') {
  Responsive.__deprecationWarningWasRaised = false
}
