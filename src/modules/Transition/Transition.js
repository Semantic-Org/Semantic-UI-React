import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  getUnhandledProps,
  makeDebugger,
  META,
  SUI,
  useKeyOnly,
  useValueAndKey,
} from '../../lib'

const debug = makeDebugger('transition')

const _meta = {
  name: 'Transition',
  type: META.TYPES.MODULE,
  props: {
    animation: SUI.TRANSITIONS,
    direction: ['in', 'out'],
  },
}

/**
 * A transition is an animation usually used to move content in or out of view.
 * */
export default class Transition extends Component {
  static propTypes = {
    active: PropTypes.bool,

    /** Named animation event to used. */
    animation: PropTypes.oneOf(_meta.props.animation),

    /** Primary content. */
    children: PropTypes.element.isRequired,

    /** Additional classes. */
    className: PropTypes.string,

    direction: PropTypes.oneOf(_meta.props.direction),

    /** Duration of the CSS transition animation. */
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Callback on each transition complete. */
    onComplete: PropTypes.func,

    /** Callback on each transition that changes visibility to hidden. */
    onHide: PropTypes.func,

    /** Callback on animation start, useful for queued animations. */
    onShow: PropTypes.func,

    /** Callback on animation start, useful for queued animations. */
    onStart: PropTypes.func,
  }

  static defaultProps = {
    animation: 'fade',
    duration: 500,
  }

  static _meta = _meta

  state = {}

  queue = []

  constructor(props) {
    super(props)

    const { active: visible } = props
    this.state = { visible }
  }

  componentWillReceiveProps(nextProps) {
    const { active: current } = this.props
    const { active: next } = nextProps

    if (current !== next) this.handleAnimationAdd(nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextState, this.state)
  }

  handleAnimationAdd = ({ active, animation, direction, duration }) => {
    const { animation: animating } = this.state
    const full = _.includes(SUI.FULL_TRANSITIONS, animation)
    const transition = { active, animation, direction, duration, full }

    if (animating) {
      this.queue.push(transition)
      return
    }

    this.handleAnimationStart(transition)
  }

  handleAnimationEnd = () => {
    const transition = this.queue.shift()

    if (transition) {
      this.setState({ visible: false })
      this.handleAnimationStart(transition)

      return
    }

    const { active: visible } = this.state
    this.setState({ animation: null, visible })
  }

  handleAnimationStart = (transition) => {
    const { duration } = transition

    this.setState({ ...transition })
    setTimeout(this.handleAnimationEnd, duration)
  }

  render() {
    const { children, className } = this.props
    const {
      active,
      animation,
      duration,
      direction,
      full,
      visible,
    } = this.state

    debug('render()', { active, animation, duration })

    const animationIn = active && animation && full
    const animationOut = !active && animation && full
    const childClasses = children.props.className || ''
    const childStyle = children.props.style || {}

    const classes = cx(
      childClasses,
      useKeyOnly(animation, 'animating'),
      useKeyOnly(!animation && !visible, 'hidden'),
      useKeyOnly(animationIn || direction === 'in', 'in'),
      useKeyOnly(animationOut || visible, 'visible'),
      useKeyOnly(animationOut || direction === 'out', 'out'),
      useValueAndKey(animation, 'animating'),
      'transition',
      className,
    )
    const style = { ...childStyle, animationDuration: animation && `${duration}ms` }
    const rest = getUnhandledProps(Transition, this.props)

    return React.cloneElement(children, { ...rest, className: classes, style })
  }
}
