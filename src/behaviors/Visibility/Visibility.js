import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

export default class Visibility extends Component {
  static propTypes = {
    /** Primary content. */
    children: PropTypes.node,

    /**
     * When set to true a callback will occur anytime an element passes a
     * condition not just immediately after the threshold is met.
     **/
    continuous: PropTypes.bool,

    /** When set to false a callback will occur each time an element passes the threshold for a condition. **/
    once: PropTypes.bool,

    /** Element's top edge has passed bottom of screen **/
    onUpdate: PropTypes.func,

    /** Element's top edge has passed bottom of screen **/
    onTopVisible: PropTypes.func,

    /** Element's top edge has passed top of the screen	**/
    onTopPassed: PropTypes.func,

    /** Element's bottom edge has passed bottom of screen **/
    onBottomVisible: PropTypes.func,

    /** Any part of an element is visible on screen	**/
    onPassing: PropTypes.func,

    /** Element's bottom edge has passed top of screen **/
    onBottomPassed: PropTypes.func,

    /** Element's top edge has not passed bottom of screen **/
    onTopVisibleReverse: PropTypes.func,

    /** Element's top edge has not passed top of the screen	**/
    onTopPassedReverse: PropTypes.func,

    /** Element's bottom edge has not passed bottom of screen **/
    onBottomVisibleReverse: PropTypes.func,

    /** Element's top has not passed top of screen but bottom has	**/
    onPassingReverse: PropTypes.func,

    /** Element's bottom edge has not passed top of screen **/
    onBottomPassedReverse: PropTypes.func,

    /** Element is visible on the screen **/
    onOnScreen: PropTypes.func,

    /** Element is not visible on the screen **/
    onOffScreen: PropTypes.func,

    /** Element is not visible on the screen **/
    onPassed: PropTypes.object,
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

    // Always fire callback if continuous = true
    if (continuous) {
      callback(this.calculations)
      return
    }

    // If once = true, fire callback only if it wasn't fired before
    if (once && !_.includes(this.firedCallbacks, name)) {
      this.firedCallbacks.push(name)
      callback(this.calculations)

      return
    }

    // Fire callback only if the value changed
    if (this.calculations[name] !== this.oldCalculations[name]) {
      callback(this.calculations)
    }
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

  fireCallbacks = () => {
    const {
      onBottomVisible: bottomVisible,
      onBottomPassed: bottomPassed,
      onOffScreen: offScreen,
      onOnScreen: onScreen,
      onPassing: passing,
      onTopPassed: topPassed,
      onTopVisible: topVisible,
      onBottomPassedReverse,
      onBottomVisibleReverse,
      onPassingReverse,
      onTopPassedReverse,
      onTopVisibleReverse,
    } = this.props
    const callbacks = {
      bottomPassed,
      bottomVisible,
      onScreen,
      offScreen,
      passing,
      topPassed,
      topVisible,
    }
    const reverse = {
      bottomPassed: onBottomPassedReverse,
      bottomVisible: onBottomVisibleReverse,
      passing: onPassingReverse,
      topPassed: onTopPassedReverse,
      topVisible: onTopVisibleReverse,
    }

    _.invoke(this.props, 'onUpdate', this.calculations)
    this.fireOnPassed()

    _.forEach(callbacks, this.execute)
    _.forEach(reverse, this.execute)
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
      height,
      width,
      bottomPassed,
      bottomVisible,
      fits,
      passing,
      percentagePassed,
      pixelsPassed,
      offScreen,
      onScreen,
      topPassed,
      topVisible,
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
