import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import Ref from '../../addons/Ref'
import {
  AutoControlledComponent as Component,
  childrenUtils,
  customPropTypes,
  eventStack,
  getUnhandledProps,
  getElementType,
  META,
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
    animation: PropTypes.oneOf(['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along']),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Controls whether or not to close sidebar when click outside. */
    closable: PropTypes.bool,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** Initial value of visible. */
    defaultVisible: PropTypes.bool,

    /** Direction the sidebar should appear on. */
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /** Duration of sidebar animation. */
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /**
     * Called when a sidebar begins to hide or show.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onChange: PropTypes.func,

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

    /** Called when a sidebar begins animating in.
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
    closable: true,
    direction: 'left',
    duration: 500,
  }

  static autoControlledProps = [
    'visible',
  ]

  static _meta = {
    name: 'Sidebar',
    type: META.TYPES.MODULE,
  }

  static Pushable = SidebarPushable
  static Pusher = SidebarPusher

  componentDidMount() {
    const { visible } = this.state

    if (visible) eventStack.sub('click', this.handleDocumentClick)
  }

  componentWillUnmount() {
    const { visible } = this.state

    if (visible) eventStack.unsub('click', this.handleDocumentClick)
  }

  componentDidUpdate(prevProps, { visible: prev }) {
    const { visible: next } = this.state

    if (prev === next) return

    this.handleAnimationStart()
    if (next) eventStack.sub('click', this.handleDocumentClick)
    if (!next) eventStack.unsub('click', this.handleDocumentClick)
  }

  handleAnimationStart = () => {
    const { duration } = this.props

    this.setState({ animating: true }, () => {
      clearTimeout(this.stopAnimatingTimer)
      this.stopAnimatingTimer = setTimeout(this.handleAnimationEnd, duration)
    })
  }

  handleAnimationEnd = () => {
    const { visible } = this.state
    const callback = visible ? 'onShow' : 'onHidden'

    this.setState({ animating: false })
    _.invoke(this.props, callback, null, this.props)
  }

  handleDocumentClick = (e) => {
    const { target } = e
    const { visible } = this.state

    if (!visible || this.ref.contains(target)) return

    this.trySetState({ visible: false })
    _.invoke(this.props, 'onChange', e, { ...this.props, visible: false })
    _.invoke(this.props, 'onHide', e, { ...this.props, visible: false })
  }

  handleRef = c => (this.ref = c)

  render() {
    const { animation, className, children, content, direction, width } = this.props
    const { animating, visible } = this.state

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
