import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Ref from '../../addons/Ref'
import {
  childrenUtils,
  customPropTypes,
  doesNodeContainClick,
  eventStack,
  getUnhandledProps,
  getElementType,
  useKeyOnly,
} from '../../lib'
import SidebarPushable from './SidebarPushable'
import SidebarPusher from './SidebarPusher'

/**
 * A sidebar hides additional content beside a page.
 */
class Sidebar extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Animation style. */
    animation: PropTypes.oneOf([
      'overlay',
      'push',
      'scale down',
      'uncover',
      'slide out',
      'slide along',
    ]),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** Direction the sidebar should appear on. */
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /** Duration of sidebar animation. */
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Called before a sidebar begins to animate out.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onHide: PropTypes.func,

    /**
     * Called after a sidebar has finished animating out.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onHidden: PropTypes.func,

    /**
     * Called when a sidebar has finished animating in.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onShow: PropTypes.func,

    /**
     * Called when a sidebar begins animating in.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onVisible: PropTypes.func,

    /** Controls whether or not the sidebar is visible on the page. */
    visible: PropTypes.bool,

    /** Sidebar width. */
    width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide']),
  }

  static defaultProps = {
    direction: 'left',
    duration: 500,
  }

  static autoControlledProps = ['visible']

  static Pushable = SidebarPushable
  static Pusher = SidebarPusher

  state = {}

  componentDidMount() {
    const { visible } = this.props

    if (visible) this.addListener()
  }

  componentWillUnmount() {
    const { visible } = this.props

    if (visible) this.removeListener()
    clearTimeout(this.animationTimer)
  }

  componentDidUpdate(prevProps) {
    const { visible: prevVisible } = prevProps
    const { visible: currentVisible } = this.props

    if (prevVisible === currentVisible) return

    this.handleAnimationStart()

    if (currentVisible) {
      this.addListener()
      return
    }

    this.removeListener()
  }

  addListener() {
    eventStack.sub('click', this.handleDocumentClick)
  }

  removeListener() {
    eventStack.unsub('click', this.handleDocumentClick)
  }

  handleAnimationStart = () => {
    const { duration, visible } = this.props
    const callback = visible ? 'onVisible' : 'onHide'

    this.setState({ animating: true }, () => {
      clearTimeout(this.animationTimer)
      this.animationTimer = setTimeout(this.handleAnimationEnd, duration)

      if (this.skipNextCallback) {
        this.skipNextCallback = false
        return
      }

      _.invoke(this.props, callback, null, this.props)
    })
  }

  handleAnimationEnd = () => {
    const { visible } = this.props
    const callback = visible ? 'onShow' : 'onHidden'

    this.setState({ animating: false })
    _.invoke(this.props, callback, null, this.props)
  }

  handleDocumentClick = (e) => {
    if (!doesNodeContainClick(this.ref, e)) {
      this.skipNextCallback = true
      _.invoke(this.props, 'onHide', e, { ...this.props, visible: false })
    }
  }

  handleRef = c => (this.ref = c)

  render() {
    const { animation, className, children, content, direction, visible, width } = this.props
    const { animating } = this.state

    const classes = cx(
      'ui',
      animation,
      direction,
      width,
      useKeyOnly(animating, 'animating'),
      useKeyOnly(visible, 'visible'),
      'sidebar',
      className,
    )
    const rest = getUnhandledProps(Sidebar, this.props)
    const ElementType = getElementType(Sidebar, this.props)

    return (
      <Ref innerRef={this.handleRef}>
        <ElementType {...rest} className={classes}>
          {childrenUtils.isNil(children) ? content : children}
        </ElementType>
      </Ref>
    )
  }
}

export default Sidebar
