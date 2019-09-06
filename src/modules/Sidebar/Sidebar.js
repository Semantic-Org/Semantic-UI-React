import { EventListener, documentRef } from '@stardust-ui/react-component-event-listener'
import { isRefObject, toRefObject, Ref } from '@stardust-ui/react-component-ref'
import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'

import {
  childrenUtils,
  customPropTypes,
  doesNodeContainClick,
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
    as: PropTypes.elementType,

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

    /** A sidebar can handle clicks on the passed element. */
    target: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject]),

    /** Controls whether or not the sidebar is visible on the page. */
    visible: PropTypes.bool,

    /** Sidebar width. */
    width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide']),
  }

  static defaultProps = {
    direction: 'left',
    target: documentRef,
    visible: false,
  }

  static animationDuration = 500
  static autoControlledProps = ['visible']

  static Pushable = SidebarPushable
  static Pusher = SidebarPusher

  ref = createRef()

  constructor(props) {
    super(props)

    this.state = {
      animationTick: 0,
      visible: props.visible,
    }
  }

  static getDerivedStateFromProps(props, state) {
    // We use `animationTick` to understand when an animation should be scheduled
    const tickIncrement = !!props.visible === !!state.visible ? 0 : 1

    return {
      animationTick: state.animationTick + tickIncrement,
      visible: props.visible,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.animationTick > prevState.animationTick) {
      this.handleAnimationStart()
    }
  }

  componentWillUnmount() {
    clearTimeout(this.animationTimer)
  }

  handleAnimationStart = () => {
    const { visible } = this.props
    const callback = visible ? 'onVisible' : 'onHide'

    clearTimeout(this.animationTimer)
    this.animationTimer = setTimeout(this.handleAnimationEnd, Sidebar.animationDuration)

    if (this.skipNextCallback) {
      this.skipNextCallback = false
      return
    }

    _.invoke(this.props, callback, null, this.props)
  }

  handleAnimationEnd = () => {
    const { visible } = this.props
    const callback = visible ? 'onShow' : 'onHidden'

    this.setState({ animationTick: 0 })
    _.invoke(this.props, callback, null, this.props)
  }

  handleDocumentClick = (e) => {
    if (!doesNodeContainClick(this.ref.current, e)) {
      this.skipNextCallback = true
      _.invoke(this.props, 'onHide', e, { ...this.props, visible: false })
    }
  }

  render() {
    const {
      animation,
      className,
      children,
      content,
      direction,
      target,
      visible,
      width,
    } = this.props
    const { animationTick } = this.state

    const classes = cx(
      'ui',
      animation,
      direction,
      width,
      useKeyOnly(animationTick > 0, 'animating'),
      useKeyOnly(visible, 'visible'),
      'sidebar',
      className,
    )
    const rest = getUnhandledProps(Sidebar, this.props)
    const ElementType = getElementType(Sidebar, this.props)
    const targetRef = isRefObject(target) ? target : toRefObject(target)

    return (
      <Ref innerRef={this.ref}>
        <ElementType {...rest} className={classes}>
          {childrenUtils.isNil(children) ? content : children}
          {visible && (
            <EventListener listener={this.handleDocumentClick} targetRef={targetRef} type='click' />
          )}
        </ElementType>
      </Ref>
    )
  }
}

export default Sidebar
