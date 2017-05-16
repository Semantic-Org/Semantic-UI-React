import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * Visibility provides a set of callbacks for when a content appears in the viewport.
 */
export default class Visibility extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /**
     * When set to true a callback will occur anytime an element passes a condition not just immediately after the
     * threshold is met.
     */
    continuous: PropTypes.bool,

    /**
     * Element's bottom edge has passed top of screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onBottomPassed: PropTypes.func,

    /**
     * Element's bottom edge has not passed top of screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onBottomPassedReverse: PropTypes.func,

    /**
     * Element's bottom edge has passed bottom of screen
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onBottomVisible: PropTypes.func,

    /**
     * Element's bottom edge has not passed bottom of screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onBottomVisibleReverse: PropTypes.func,

    /** When set to false a callback will occur each time an element passes the threshold for a condition. */
    once: PropTypes.bool,

    /** Element is not visible on the screen. */
    onPassed: PropTypes.object,

    /**
     * Any part of an element is visible on screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onPassing: PropTypes.func,

    /**
     * Element's top has not passed top of screen but bottom has.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onPassingReverse: PropTypes.func,

    /**
     * Element is not visible on the screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onOffScreen: PropTypes.func,

    /**
     * Element is visible on the screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onOnScreen: PropTypes.func,

    /**
     * Element's top edge has passed top of the screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onTopPassed: PropTypes.func,

    /**
     * Element's top edge has not passed top of the screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onTopPassedReverse: PropTypes.func,

    /**
     * Element's top edge has passed bottom of screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onTopVisible: PropTypes.func,

    /**
     * Element's top edge has not passed bottom of screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onTopVisibleReverse: PropTypes.func,

    /**
     * Element's top edge has passed bottom of screen.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onUpdate: PropTypes.func,
  }

  static defaultProps = {
    continuous: false,
    once: true,
  }

  static _meta = {
    name: 'Visibility',
    type: META.TYPES.BEHAVIOR,
  }

  calculations = {
    topPassed: false,
    bottomPassed: false,
    topVisible: false,
    bottomVisible: false,
    fits: false,
    passing: false,
    onScreen: false,
    offScreen: false,
  }

  firedCallbacks = []

  componentWillReceiveProps({ continuous, once }) {
    const cleanOut = continuous !== this.props.continuous || once !== this.props.once
    if (cleanOut) this.firedCallbacks = []
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  execute = (callback, name) => {
    const { continuous, once } = this.props

    if (!callback) return
    // Reverse callbacks aren't fired continuously
    if (this.calculations[name] === false) return

    // Always fire callback if continuous = true
    if (continuous) {
      callback(null, { ...this.props, calculations: this.calculations })
      return
    }

    // If once = true, fire callback only if it wasn't fired before
    if (once) {
      if (!_.includes(this.firedCallbacks, name)) {
        this.firedCallbacks.push(name)
        callback(null, { ...this.props, calculations: this.calculations })
      }

      return
    }

    // Fire callback only if the value changed
    if (this.calculations[name] !== this.oldCalculations[name]) {
      callback(null, { ...this.props, calculations: this.calculations })
    }
  }

  fireCallbacks() {
    const {
      onBottomPassed,
      onBottomPassedReverse,
      onBottomVisible,
      onBottomVisibleReverse,
      onPassing,
      onPassingReverse,
      onTopPassed,
      onTopPassedReverse,
      onTopVisible,
      onTopVisibleReverse,
      onOffScreen,
      onOnScreen,
    } = this.props
    const callbacks = {
      bottomPassed: onBottomPassed,
      bottomVisible: onBottomVisible,
      passing: onPassing,
      offScreen: onOffScreen,
      onScreen: onOnScreen,
      topPassed: onTopPassed,
      topVisible: onTopVisible,
    }
    const reverse = {
      bottomPassed: onBottomPassedReverse,
      bottomVisible: onBottomVisibleReverse,
      passing: onPassingReverse,
      topPassed: onTopPassedReverse,
      topVisible: onTopVisibleReverse,
    }

    _.invoke(this.props, 'onUpdate', null, { ...this.props, calculations: this.calculations })
    this.fireOnPassed()

    _.forEach(callbacks, (callback, name) => this.execute(callback, name))
    _.forEach(reverse, (callback, name) => this.execute(callback, name))
  }

  fireOnPassed = () => {
    const { percentagePassed, pixelsPassed } = this.calculations
    const { onPassed } = this.props

    _.forEach(onPassed, (callback, passed) => {
      const pixelsValue = Number(passed)

      if (pixelsValue && pixelsPassed >= pixelsValue) {
        this.execute(callback, passed)
        return
      }

      const matchPercentage = `${passed}`.match(/^(\d+)%$/)
      if (!matchPercentage) return

      const percentageValue = Number(matchPercentage[1]) / 100
      if (percentagePassed >= percentageValue) this.execute(callback, passed)
    })
  }

  handleRef = c => (this.ref = c)

  handleScroll = () => {
    const { bottom, height, top, width } = this.ref.getBoundingClientRect()

    const topPassed = top < 0
    const bottomPassed = bottom < 0

    const pixelsPassed = bottomPassed ? 0 : Math.max(top * -1, 0)
    const percentagePassed = pixelsPassed / height

    const bottomVisible = bottom >= 0 && bottom <= window.innerHeight
    const topVisible = top >= 0 && top <= window.innerHeight

    const fits = topVisible && bottomVisible
    const passing = topPassed && !bottomPassed

    const onScreen = (topVisible || topPassed) && !bottomPassed
    const offScreen = !onScreen

    this.oldCalculations = this.calculations
    this.calculations = {
      bottomPassed,
      bottomVisible,
      fits,
      height,
      passing,
      percentagePassed,
      pixelsPassed,
      offScreen,
      onScreen,
      topPassed,
      topVisible,
      width,
    }

    this.fireCallbacks()
  }

  render() {
    const { children } = this.props
    const ElementType = getElementType(Visibility, this.props)
    const rest = getUnhandledProps(Visibility, this.props)

    return <ElementType {...rest} ref={this.handleRef}>{children}</ElementType>
  }
}
