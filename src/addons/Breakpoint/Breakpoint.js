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
 * A Breakpoint can control visibility of content.
 */
export default class Breakpoint extends Component {
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

    /** Breakpoints definition. */
    points: PropTypes.shape({
      computer: PropTypes.number.isRequired,
      largeScreen: PropTypes.number.isRequired,
      mobile: PropTypes.number.isRequired,
      tablet: PropTypes.number.isRequired,
      widescreen: PropTypes.number.isRequired,
    }),
  }

  static defaultProps = {
    points: {
      computer: 992,
      largeScreen: 1200,
      mobile: 320,
      tablet: 768,
      widescreen: 1920,
    },
  }

  static _meta = {
    name: 'Breakpoint',
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
  // Breakpoint matchers
  // ----------------------------------------

  computer = () => {
    const { points: { computer } } = this.props
    const { width } = this.state

    return width >= computer
  }

  largeScreen = () => {
    const { points: { largeScreen, widescreen } } = this.props
    const { width } = this.state

    return width >= largeScreen && width < widescreen
  }

  mobile = () => {
    const { points: { mobile, tablet } } = this.props
    const { width } = this.state

    return width >= mobile && width < tablet
  }

  tablet = () => {
    const { points: { computer, tablet } } = this.props
    const { width } = this.state

    return width >= tablet && width < computer
  }

  widescreen = () => {
    const { points: { widescreen } } = this.props
    const { width } = this.state

    return width >= widescreen
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  visible = () => {
    const { only } = this.props
    const points = only.replace('large screen', 'largeScreen').split(' ')

    return _.some(points, point => _.invoke(this, point))
  }

  // ----------------------------------------
  // Event handlers
  // ----------------------------------------

  handleUpdate = e => {
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

    const ElementType = getElementType(Breakpoint, this.props)
    const rest = getUnhandledProps(Breakpoint, this.props)

    if (this.visible()) return <ElementType {...rest}>{children}</ElementType>
    return null
  }
}


