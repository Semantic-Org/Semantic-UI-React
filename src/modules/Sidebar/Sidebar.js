import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

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

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** Initial value of visible. */
    defaultVisible: PropTypes.bool,

    /** Direction the sidebar should appear on. */
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /** Called when the user clicks away from the sidebar. */
    onSidebarBlur: PropTypes.func,

    /** Controls whether or not the sidebar is visible on the page. */
    visible: PropTypes.bool,

    /** Sidebar width. */
    width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide']),
  }

  static defaultProps = {
    direction: 'left',
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
    if (this.state.visible) eventStack.sub('click', this.handleDocumentClick)
  }

  componentWillUnmount() {
    if (this.state.visible) eventStack.unsub('click', this.handleDocumentClick)
  }

  componentDidUpdate(prevProps, { visible: prev }) {
    const { visible: next } = this.state

    if (prev === next) return

    this.startAnimating()
    if (next) eventStack.sub('click', this.handleDocumentClick)
    if (!next) eventStack.unsub('click', this.handleDocumentClick)
  }

  startAnimating = (duration = 500) => {
    this.setState({ animating: true }, () => {
      clearTimeout(this.stopAnimatingTimer)
      this.stopAnimatingTimer = setTimeout(this.handleAnimationEnd, duration)
    })
  }

  handleAnimationEnd = () => {
    if (!this.state.visible) _.invoke(this.props, 'onHidden')
    this.setState({ animating: false })
  }

  handleDocumentClick = (e) => {
    if (!this.state.visible || this.ref.contains(e.target)) return

    this.trySetState({ visible: false })
    _.invoke(this.props, 'onSidebarBlur')
  }

  handleRef = c => (this.ref = c)

  render() {
    const {
      animation,
      className,
      children,
      content,
      direction,
      visible,
      width,
    } = this.props
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
      <ElementType {...rest} className={classes}>
        {childrenUtils.isNil(children) ? content : children}
      </ElementType>
    )
  }
}

export default Sidebar
