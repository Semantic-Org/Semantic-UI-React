import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  makeDebugger,
  META,
  useKeyOnly,
} from '../../lib'

const debug = makeDebugger('transition')

const _meta = {
  name: 'Transition',
  type: META.TYPES.MODULE,
  props: {
    animation: [
      'scale',

      'fade',
      'fade up',
      'fade down',
      'fade left',
      'fade right',

      'vertical flip',
      'horizontal flip',

      'drop',

      'fly up',
      'fly down',
      'fly left',
      'fly right',

      'swing up',
      'swing down',
      'swing left',
      'swing right',

      'browse left',
      'browse right',

      'slide up',
      'slide down',
      'slide left',
      'slide right',

      // static animations
      'jiggle',
      'flash',
      'shake',
      'pulse',
      'tada',
      'bounce',
    ],
  },
}

/**
 * A transition is an animation usually used to move content in or out of view.
 * */
export default class Transition extends Component {
  static defaultProps = {
    animation: 'fade',
    duration: 500,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    active: PropTypes.bool,

    /** Named animation event to used. */
    animation: PropTypes.oneOf(_meta.props.animation),

    /** Additional classes. */
    className: PropTypes.string,

    /** Duration of the CSS transition animation. */
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }

  static _meta = _meta

  animationHandler

  animationQueue = []

  state = {}

  constructor(props) {
    super(props)

    const { active } = props
    this.state = { visible: active }
  }

  componentWillReceiveProps(nextProps) {
    const current = this.props.active
    const next = nextProps.active

    if (current !== next) this.handleAnimationAdd(nextProps)
  }

  handleAnimationAdd = (props) => {
    const { active, animation, duration } = props
    const type = active ? 'out' : 'in'

    this.animationQueue.push([animation, type, duration])
    debug('handleAnimationAdd()', { animation, type, duration })

    if (!this.animationHandler) this.handleAnimationStart()
  }

  handleAnimationEnd = () => {
    const { type } = this.state
    const visible = type === 'in'

    debug('handleAnimationEnd()', { visible })

    if (this.animationQueue.length > 0) {
      this.setState({ visible })
      this.handleAnimationStart()

      return
    }

    this.animationHandler = null
    this.setState({ animation: null, duration: null, type: null, visible })
  }

  handleAnimationStart = () => {
    const [animation, type, duration] = this.animationQueue.pop()

    debug('handleAnimationStart()', { animation, type, duration })

    this.setState({ animation, type, duration })
    this.animationHandler = setTimeout(this.handleAnimationEnd, duration)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextState, this.state)
  }

  render() {
    const { className } = this.props
    const { animation, duration, type, visible } = this.state

    debug('render()', { animation, type, duration })

    const classes = cx(
      animation,
      type,
      useKeyOnly(animation, 'animating'),
      useKeyOnly(!animation && !visible, 'hidden'),
      useKeyOnly(type === 'in' || visible, 'visible'),
      'transition',
      className,
    )
    const style = duration && {
      animationDuration: `${duration}ms`,
    }
    const rest = getUnhandledProps(Transition, this.props)
    const ElementType = getElementType(Transition, this.props)

    return <ElementType {...rest} className={classes} style={style} />
  }
}
