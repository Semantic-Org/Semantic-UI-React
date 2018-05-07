import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import ShapeSide from './ShapeSide'

/**
 * A shape is a three dimensional object displayed on a two dimensional plane.
 */
export default class Shape extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Index of the currently active item. */
    activeIndex: PropTypes.number,

    /** Named animation event to used. */
    animation: PropTypes.oneOf(['flip left', 'flip up', 'flip down', 'flip right', 'flip over', 'flip back']),

    /** Additional classes. */
    className: PropTypes.string,

    /** A cube shape is formatted so that each side is the face of a cube. */
    cube: PropTypes.bool,

    /** Duration of side change animation in ms. */
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    height: PropTypes.oneOfType([
      PropTypes.oneOf(['auto', 'initial', 'next']),
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Shorthand array of props for Shape.Side. */
    items: customPropTypes.collectionShorthand,

    style: PropTypes.object,

    /** A text shape is formatted to allow for sides of text to be displayed. */
    text: PropTypes.bool,

    width: PropTypes.oneOfType([
      PropTypes.oneOf(['auto', 'initial', 'next']),
      PropTypes.number,
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    activeIndex: 0,
    duration: 25000,
    height: 'initial',
    width: 'initial',
  }

  static _meta = {
    name: 'Shape',
    type: META.TYPES.MODULE,
  }

  static Side = ShapeSide

  sideRefs = []

  constructor(...args) {
    super(...args)

    const { activeIndex } = this.props
    this.state = { activeIndex }
  }

  componentWillReceiveProps(nextProps) {
    const { activeIndex: prevIndex } = this.props
    const { activeIndex, duration } = nextProps

    if(activeIndex === prevIndex) return
    this.setState({
      activeIndex,
      prevIndex,
      animating: true,
    }, () => setTimeout(this.completeAnimation, duration))
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  completeAnimation = () => {
    this.setState({ animating: false, prevIndex: null })
  }

  // ----------------------------------------
  // Style computers
  // ----------------------------------------

  computeStageHeight = () => {
    const { height } = this.props

    if(height === 'initial') return this.rootRef.getBoundingClientRect().height
    if(height === 'next') return nextSide.outerHeight
    return height
  }

  computeStageWidth = () => {
    const { width } = this.props

    if(width === 'initial') return this.rootRef.getBoundingClientRect().width
    if(width === 'next') return nextSide.outerHeight
    return width
  }

  computeRootStyle = () => {
    const { style } = this.props
    const { animating } = this.state

    if(animating) {
      return {
        ...style,
        height: this.computeStageHeight(),
        width: this.computeStageWidth(),
      }
    }
    return style
  }

  actualRect = el => {
    const { style } = el
    const prev = _.pick(el.style, ['display', 'left', 'position', 'visibility'])

    style.display = 'block'
    style.visibility = 'hidden'
    style.position = 'absolute'
    style.left = '-9999px'

    const rect = {
      height: el.clientHeight
    }

    style.display = prev.display
    style.visibility = prev.visibility
    style.position = prev.position
    style.left = prev.left

    return rect
  }

  computeSideParams = () => {
    const { animation } = this.props
    const { activeIndex, prevIndex } = this.state

    console.log(animation, this.sideRefs[activeIndex], this.sideRefs[prevIndex])
    const activeRect = this.actualRect(this.sideRefs[activeIndex].el())
    const prevRect = this.actualRect(this.sideRefs[prevIndex].el())
// console.log(this.actualRect(this.sideRefs[activeIndex].el()), this.actualRect(this.sideRefs[prevIndex].el()))

    // prev
    // side active hidden
    // transform: rotateY(0deg) translateZ(145px); transition-duration: 50000ms;

    // next
    // side animating
    // left: 0px; transform: rotateY(-90deg) translateZ(145px); transition-duration: 50000ms;

    return {
      deg: 90,
      x: 0,
      z: -145,
    }

    if(animation === 'flip down') {
      return {
        deg: 90,
        y: -((prevRect.height - activeRect.height) / 2),
        z: -(prevRect.height / 2),
      }
    }

    if(animation === 'flip left') {
      return {
        deg: 90,
        y: -((prevRect.width - activeRect.width) / 2),
        z: -(prevRect.width / 2),
      }
    }


    // up: function() {
    //   var
    //     translate = {
    //       y: -(($activeSide.outerHeight(true) - $nextSide.outerHeight(true)) / 2),
    //       z: -($activeSide.outerHeight(true) / 2)
    //     }
    //   ;
    //   return {
    //     transform: 'translateY(' + translate.y + 'px) translateZ('+ translate.z + 'px) rotateX(-90deg)'
    //   };
    // },
    //
    //
    // left: function() {
    //   var
    //     translate = {
    //       x : -(($activeSide.outerWidth(true) - $nextSide.outerWidth(true)) / 2),
    //       z : -($activeSide.outerWidth(true) / 2)
    //     }
    //   ;
    //   return {
    //     transform: 'translateX(' + translate.x + 'px) translateZ(' + translate.z + 'px) rotateY(90deg)'
    //   };
    // },
    //
    // right: function() {
    //   var
    //     translate = {
    //       x : -(($activeSide.outerWidth(true) - $nextSide.outerWidth(true)) / 2),
    //       z : -($activeSide.outerWidth(true) / 2)
    //     }
    //   ;
    //   return {
    //     transform: 'translateX(' + translate.x + 'px) translateZ(' + translate.z + 'px) rotateY(-90deg)'
    //   };
    // },
    //
    // over: function() {
    //   var
    //     translate = {
    //       x : -(($activeSide.outerWidth(true) - $nextSide.outerWidth(true)) / 2)
    //     }
    //   ;
    //   return {
    //     transform: 'translateX(' + translate.x + 'px) rotateY(180deg)'
    //   };
    // },
    //
    // back: function() {
    //   var
    //     translate = {
    //       x : -(($activeSide.outerWidth(true) - $nextSide.outerWidth(true)) / 2)
    //     }
    //   ;
    //   return {
    //     transform: 'translateX(' + translate.x + 'px) rotateY(-180deg)'
    //   };
    // }
  }

  computeSidesStyle = () => {
    const { duration } = this.props
    const { animating } = this.state
console.log(animating)
    if(!animating) return {}
    const { deg, y, x, z } = this.computeSideParams()
    // translateY(0px) translateZ(-145px) rotateX(90deg)
    // transform: translateX(0px) translateZ(-145px) rotateY(90deg); transition-duration: 50000ms;
    console.log(this.computeSideParams(), x, y, z, {
      transform: `translateX(${x}px) translateZ(${z}px) rotateX(${deg}deg)`,
      transitionDuration: `${duration}ms`
    })

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateX(${deg}deg)`,
      transitionDuration: `${duration}ms`
    }
  }

  // ----------------------------------------
  // Refs
  // ----------------------------------------

  handleRootRef = c => (this.rootRef = c)

  handleSideRef = index => c => (this.sideRefs[index] = c)

  // ----------------------------------------
  // Render
  // ----------------------------------------

  renderItems = () => {
    const { duration, items } = this.props
    const { activeIndex, animating, prevIndex } = this.state

    return _.map(items, (item, index) => ShapeSide.create(item, {
      defaultProps: {
        duration,
        animating: animating && index === prevIndex,
        active: index === activeIndex,
        hidden: animating && index === activeIndex,
        ref: this.handleSideRef(index)
      },
    }))
  }

  render() {
    const { className, cube } = this.props
    const { animating } = this.state

    const classes = cx(
      'ui',
      useKeyOnly(animating, 'animating'),
      useKeyOnly(cube, 'cube'),
      'shape',
      className,
    )
    const rest = getUnhandledProps(Shape, this.props)
    const ElementType = getElementType(Shape, this.props)

    return (
      <ElementType {...rest} className={classes} ref={this.handleRootRef} style={this.computeRootStyle()}>
        <div className='sides' style={this.computeSidesStyle()}>
          {this.renderItems()}
        </div>
      </ElementType>
    )
  }
}
