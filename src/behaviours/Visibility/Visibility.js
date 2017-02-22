import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'


const _meta = {
  name: 'Visibility',
  type: META.TYPES.BEHAVIOUR,
}

class Visibility extends Component {
  static _meta = _meta

  static defaultProps = {
    continuous: false,
    once: false,
    onUpdate: () => {},
    onTopVisible: () => {},
    onTopPassed: () => {},
    onBottomVisible: () => {},
    onPassing: () => {},
    onBottomPassed: () => {},
  }

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
  }

  constructor(...args) {
    super(...args)
    this.firedCallbacks = []
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentWillReceiveProps({ continuous, once }) {
    if (
      (continuous !== this.props.continuous) ||
      (once !== this.props.once)
    ) {
      this.firedCallbacks = []
    }
  }

  fireCallbacks() {
    const {
      continuous,
      once,
      onUpdate,
      onTopVisible,
      onTopPassed,
      onBottomVisible,
      onPassing,
      onBottomPassed,
    } = this.props

    onUpdate(this.calculations)

    const callbacks = {
      topPassed: onTopPassed,
      bottomPassed: onBottomPassed,
      topVisible: onTopVisible,
      bottomVisible: onBottomVisible,
      passing: onPassing,
    }

    Object.entries(callbacks).forEach(([name, callback]) => {
      if (this.calculations[name]) {
        if (continuous) {
          // Always fire callback if continuous = true
          callback(this.calculations)
        } else if (once) {
          // If once = true, fire callback only if it wasn't fired before
          if (!this.firedCallbacks.includes(name)) {
            this.firedCallbacks.push(name)
            callback(this.calculations)
          }
        } else {
          // Fire callback only if the value changed
          if (this.calculations[name] !== this.oldCalculations[name]) {
            callback(this.calculations)
          }
        }
      }
    })
  }

  handleScroll(event) {
    const node = ReactDOM.findDOMNode(this)
    const nodeRect = node.getBoundingClientRect()

    /** Generate calculations **/
    const height = nodeRect.height
    const width = nodeRect.width

    const topPassed = nodeRect.top < 0
    const bottomPassed = nodeRect.bottom < 0

    const pixelsPassed = bottomPassed ? 0 : Math.max(nodeRect.top * -1, 0)
    const percentagePassed = pixelsPassed / height

    const topVisible = nodeRect.top >= 0 && nodeRect.top <= window.innerHeight
    const bottomVisible = nodeRect.bottom >= 0 && nodeRect.bottom <= window.innerHeight

    const fits = topVisible && bottomVisible

    const passing = topPassed && !bottomPassed

    const onScreen = (topVisible || topPassed) && !bottomPassed
    const offScreen = !onScreen

    this.oldCalculations = this.calculations
    this.calculations = {
      height,
      width,
      topPassed,
      bottomPassed,
      pixelsPassed,
      percentagePassed,
      topVisible,
      bottomVisible,
      fits,
      passing,
      onScreen,
      offScreen,
    }

    this.fireCallbacks()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  render() {
    const ElementType = getElementType(Visibility, this.props)
    const unhandledProps = getUnhandledProps(Visibility, this.props)

    return <ElementType {...unhandledProps}>{this.props.children}</ElementType>
  }
}

export default Visibility
