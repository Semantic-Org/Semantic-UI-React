import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  META,
  customPropTypes,
  getUnhandledProps,
  getElementType,
  useKeyOnly,
} from '../../lib'
import SidebarPushable from './SidebarPushable'
import SidebarPusher from './SidebarPusher'

const _meta = {
  name: 'Sidebar',
  type: META.TYPES.MODULE,
  props: {
    animation: ['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along'],
    direction: ['top', 'right', 'bottom', 'left'],
    width: ['very thin', 'thin', 'wide', 'very wide'],
  },
}

/**
 * A sidebar hides additional content beside a page.
 */
class Sidebar extends Component {
  static _meta = _meta

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Animation style. */
    animation: PropTypes.oneOf(Sidebar._meta.props.animation),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Initial value of visible. */
    defaultVisible: PropTypes.bool,

    /** Direction the sidebar should appear on */
    direction: PropTypes.oneOf(Sidebar._meta.props.direction),

    /** Controls whether or not the sidebar is visible on the page. */
    visible: PropTypes.bool,

    /** Sidebar width */
    width: PropTypes.oneOf(Sidebar._meta.props.width),
  }

  static Pushable = SidebarPushable

  static Pusher = SidebarPusher

  static defaultProps = {
    direction: 'left',
  }

  static autoControlledProps = [
    'visible',
  ]

  state = {}

  startAnimating = (duration = 500) => {
    clearTimeout(this.stopAnimatingTimer)

    this.setState({ animating: true })

    this.stopAnimatingTimer = setTimeout(() => this.setState({ animating: false }), duration)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.startAnimating()
    }
  }

  render() {
    const { animating } = this.state
    const { animation, className, children, direction, visible, width } = this.props

    const classes = cx(
      'ui',
      'sidebar',
      useKeyOnly(animating, 'animating'),
      direction,
      width,
      animation,
      useKeyOnly(visible, 'visible'),
      className
    )

    const rest = getUnhandledProps(Sidebar, this.props)
    const ElementType = getElementType(Sidebar, this.props)

    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }
}

export default Sidebar
