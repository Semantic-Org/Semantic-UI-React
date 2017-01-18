import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { META } from '../../lib'

const _meta = {
  name: 'Visibility',
  type: META.TYPES.BEHAVIOUR,
}

class Visibility extends Component {
  static _meta = _meta
  static propTypes = {
    /** Primary content. */
    children: PropTypes.node,

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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  isTopVisible() {}

  handleScroll(event) {
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

    console.log(JSON.stringify(calculations, null, 2));
  }

  render() {
    return this.props.children
  }
}

export default Visibility
