import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { cloneElement, Component } from 'react'

import { makeDebugger, normalizeTransitionDuration, SUI, useKeyOnly } from '../../lib'
import TransitionGroup from './TransitionGroup'
import {
  computeStatuses,
  TRANSITION_STATUS_ENTERED,
  TRANSITION_STATUS_ENTERING,
  TRANSITION_STATUS_EXITED,
  TRANSITION_STATUS_EXITING,
  TRANSITION_STATUS_INITIAL,
  TRANSITION_STATUS_UNMOUNTED,
} from './utils/computeStatuses'

const debug = makeDebugger('transition')

const TRANSITION_CALLBACK_TYPE = {
  [TRANSITION_STATUS_ENTERED]: 'show',
  [TRANSITION_STATUS_EXITED]: 'hide',
}
const TRANSITION_STYLE_TYPE = {
  [TRANSITION_STATUS_ENTERING]: 'show',
  [TRANSITION_STATUS_EXITING]: 'hide',
}

/**
 * A transition is an animation usually used to move content in or out of view.
 */
export default class Transition extends Component {
  /** @deprecated Static properties will be removed in v2. */
  static INITIAL = TRANSITION_STATUS_INITIAL
  static ENTERED = TRANSITION_STATUS_ENTERED
  static ENTERING = TRANSITION_STATUS_ENTERING
  static EXITED = TRANSITION_STATUS_EXITED
  static EXITING = TRANSITION_STATUS_EXITING
  static UNMOUNTED = TRANSITION_STATUS_UNMOUNTED

  static Group = TransitionGroup

  state = {
    status: TRANSITION_STATUS_INITIAL,
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------

  static getDerivedStateFromProps(props, state) {
    const derivedState = computeStatuses({
      mountOnShow: props.mountOnShow,
      status: state.status,
      transitionOnMount: props.transitionOnMount,
      visible: props.visible,
      unmountOnHide: props.unmountOnHide,
    })

    debug('getDerivedStateFromProps()', props, state, derivedState)

    return derivedState
  }

  componentDidMount() {
    debug('componentDidMount()')
    this.updateStatus({})
  }

  componentDidUpdate(prevProps, prevState) {
    debug('componentDidUpdate()')
    this.updateStatus(prevState)
  }

  componentWillUnmount() {
    debug('componentWillUnmount()')
    clearTimeout(this.timeoutId)
  }

  // ----------------------------------------
  // Callback handling
  // ----------------------------------------

  handleStart = (nextStatus) => {
    const { duration } = this.props

    const durationType = TRANSITION_CALLBACK_TYPE[nextStatus]
    const durationValue = normalizeTransitionDuration(duration, durationType)

    this.timeoutId = setTimeout(() => this.setState({ status: nextStatus }), durationValue)
  }

  updateStatus = (prevState) => {
    if (prevState.status !== this.state.status) {
      // Timeout should be cleared in any case as previous can lead set to unexpected `nextStatus`
      clearTimeout(this.timeoutId)

      if (this.state.nextStatus) {
        this.handleStart(this.state.nextStatus)
      }
    }

    if (!prevState.animating && this.state.animating) {
      _.invoke(this.props, 'onStart', null, { ...this.props, status: this.state.status })
    }

    if (prevState.animating && !this.state.animating) {
      const callback = this.state.status === TRANSITION_STATUS_ENTERED ? 'onShow' : 'onHide'

      _.invoke(this.props, 'onComplete', null, { ...this.props, status: this.state.status })
      _.invoke(this.props, callback, null, { ...this.props, status: this.state.status })
    }
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  computeClasses = () => {
    const { animation, directional, children } = this.props
    const { animating, status } = this.state

    const childClasses = _.get(children, 'props.className')
    const isDirectional = _.isNil(directional)
      ? _.includes(SUI.DIRECTIONAL_TRANSITIONS, animation)
      : directional

    if (isDirectional) {
      return cx(
        animation,
        childClasses,
        useKeyOnly(animating, 'animating'),
        useKeyOnly(status === TRANSITION_STATUS_ENTERING, 'in'),
        useKeyOnly(status === TRANSITION_STATUS_EXITING, 'out'),
        useKeyOnly(status === TRANSITION_STATUS_EXITED, 'hidden'),
        useKeyOnly(status !== TRANSITION_STATUS_EXITED, 'visible'),
        'transition',
      )
    }

    return cx(animation, childClasses, useKeyOnly(animating, 'animating transition'))
  }

  computeStyle = () => {
    const { children, duration } = this.props
    const { status } = this.state

    const childStyle = _.get(children, 'props.style')
    const type = TRANSITION_STYLE_TYPE[status]
    const animationDuration = type && `${normalizeTransitionDuration(duration, type)}ms`

    return { ...childStyle, animationDuration }
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  render() {
    debug('render(): props', this.props)
    debug('render(): state', this.state)

    const { children } = this.props
    const { status } = this.state

    if (status === TRANSITION_STATUS_UNMOUNTED) {
      return null
    }

    return cloneElement(children, {
      className: this.computeClasses(),
      style: this.computeStyle(),
    })
  }
}

Transition.propTypes = {
  /** Named animation event to used. Must be defined in CSS. */
  animation: PropTypes.oneOfType([PropTypes.oneOf(SUI.TRANSITIONS), PropTypes.string]),

  /** Primary content. */
  children: PropTypes.element.isRequired,

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional: PropTypes.bool,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      hide: PropTypes.number,
      show: PropTypes.number,
    }),
    PropTypes.string,
  ]),

  /** Show the component; triggers the enter or exit animation. */
  visible: PropTypes.bool,

  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnShow: PropTypes.bool,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onComplete: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onHide: PropTypes.func,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onShow: PropTypes.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onStart: PropTypes.func,

  /** React's key of the element. */
  reactKey: PropTypes.string,

  /** Run the enter animation when the component mounts, if it is initially shown. */
  transitionOnMount: PropTypes.bool,

  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnHide: PropTypes.bool,
}

Transition.defaultProps = {
  animation: 'fade',
  duration: 500,
  visible: true,
  mountOnShow: true,
  transitionOnMount: false,
  unmountOnHide: false,
}
