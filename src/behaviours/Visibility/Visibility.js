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
    once: true,
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
    this.state = {
      firedCallbacks: [],
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  fire(callbackName, ...args) {
    const { continuous, [callbackName]: callback } = this.props
    const { firedCallbacks } = this.state

    if (continuous) {
      callback(...args)
    } else {
      if (!firedCallbacks.includes(callbackName)) {
        this.state = {
          firedCallbacks: [...firedCallbacks, callbackName],
        }

        callback(...args)
      }
    }
  }

  handleScroll(event) {
    const { onUpdate } = this.props

    const node = ReactDOM.findDOMNode(this)
    const nodeRect = node.getBoundingClientRect()

    /** Generate calculations **/
    const calculations = {}
    calculations.height = nodeRect.height
    calculations.width = nodeRect.width

    calculations.topPassed = nodeRect.top < 0
    calculations.bottomPassed = nodeRect.bottom < 0

    calculations.pixelsPassed = calculations.bottomPassed ? 0 : Math.max(nodeRect.top * -1, 0)
    calculations.percentagePassed = calculations.pixelsPassed / calculations.height

    calculations.topVisible = nodeRect.top >= 0 && nodeRect.top <= window.innerHeight
    calculations.bottomVisible = nodeRect.bottom >= 0 && nodeRect.bottom <= window.innerHeight

    calculations.fits = calculations.topVisible && calculations.bottomVisible

    calculations.passing = calculations.topPassed && !calculations.bottomPassed

    calculations.onScreen = (calculations.topVisible || calculations.topPassed) && !calculations.bottomPassed
    calculations.offScreen = !calculations.onScreen

    /** Events **/
    onUpdate(calculations)

    /** Standard events **/
    if (calculations.topVisible) {
      this.fire('onTopVisible', calculations)
    }

    if (calculations.bottomVisible) {
      this.fire('onBottomVisible', calculations)
    }

    if (calculations.topPassed) {
      this.fire('onTopPassed', calculations)
    }

    if (calculations.bottomPassed) {
      this.fire('onBottomPassed', calculations)
    }

    if (calculations.passing) {
      this.fire('onPassing', calculations)
    }
  }

  render() {
    const ElementType = getElementType(Visibility, this.props)
    const unhandledProps = getUnhandledProps(Visibility, this.props)

    return <ElementType {...unhandledProps}>{this.props.children}</ElementType>
  }
}

export default Visibility
