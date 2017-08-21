import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
} from '../../lib'

/**
 * Responsive can control visibility of content.
 */
export default class Responsive extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** A row can appear only for a specific device, or screen sizes. */
    only: customPropTypes.onlyProp(SUI.VISIBILITY).isRequired,

    /**
     * Called on update.
     *
     * @param {SyntheticEvent} event - The React SyntheticEvent object
     * @param {object} data - All props and the event value.
     */
    onUpdate: PropTypes.func,

    /** Responsives definition. */
    breakpoints: PropTypes.shape({
      computer: PropTypes.number.isRequired,
      largeScreen: PropTypes.number.isRequired,
      mobile: PropTypes.number.isRequired,
      tablet: PropTypes.number.isRequired,
      widescreen: PropTypes.number.isRequired,
    }),
  }

  static defaultProps = {
    breakpoints: {
      computer: 992,
      largeScreen: 1200,
      mobile: 320,
      tablet: 768,
      widescreen: 1920,
    },
  }

  static _meta = {
    name: 'Responsive',
    type: META.TYPES.ADDON,
  }

  constructor(...args) {
    super(...args)
    this.state = { width: window.innerWidth }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleUpdate)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleUpdate)
  }

  // ----------------------------------------
  // Responsive matchers
  // ----------------------------------------

  isComputer = () => {
    const { breakpoints: { computer } } = this.props
    const { width } = this.state

    return width >= computer
  }

  isLargeScreen = () => {
    const { breakpoints: { largeScreen, widescreen } } = this.props
    const { width } = this.state

    return width >= largeScreen && width < widescreen
  }

  isMobile = () => {
    const { breakpoints: { mobile, tablet } } = this.props
    const { width } = this.state

    return width >= mobile && width < tablet
  }

  isTablet = () => {
    const { breakpoints: { computer, tablet } } = this.props
    const { width } = this.state

    return width >= tablet && width < computer
  }

  isWidescreen = () => {
    const { breakpoints: { widescreen } } = this.props
    const { width } = this.state

    return width >= widescreen
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  isVisible = () => {
    const { only = '' } = this.props
    const breakpoints = only.replace('large screen', 'largeScreen').split(' ')

    return _.some(breakpoints, point => _.invoke(this, `is${_.upperFirst(point)}`))
  }

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  handleUpdate = (e) => {
    requestAnimationFrame(() => {
      const width = window.innerWidth

      this.setState({ width })
      _.invoke(this.props, 'onUpdate', e, { ...this.props, width })
    })
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  render() {
    const { children } = this.props

    const ElementType = getElementType(Responsive, this.props)
    const rest = getUnhandledProps(Responsive, this.props)

    if (this.isVisible()) return <ElementType {...rest}>{children}</ElementType>
    return null
  }
}
