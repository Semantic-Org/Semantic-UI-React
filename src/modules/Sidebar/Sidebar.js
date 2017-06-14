import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

import {
  AutoControlledComponent as Component,
  customPropTypes,
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

    /** Initial value of visible. */
    defaultVisible: PropTypes.bool,

    /** Direction the sidebar should appear on. */
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /** Controls whether or not the sidebar is visible on the page. */
    visible: PropTypes.bool,

    /** Sidebar width. */
    width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide']),

    /** Controls whether or not to close sidebar when click outside */
    closable: PropTypes.bool,

    /** Function to change "visible" prop */
    toggleVisibility: PropTypes.func,
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

  startAnimating = (duration = 500) => {
    clearTimeout(this.stopAnimatingTimer)

    this.setState({ animating: true })

    this.stopAnimatingTimer = setTimeout(() => this.setState({ animating: false }), duration)
  }

  componentDidMount() {
    const { visible, closable } = this.props

    if (visible && closable) {
      document.addEventListener('click', this.handleDocumentClick)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      this.startAnimating()
      if (nextProps.visible && this.props.closable) {
        document.addEventListener('click', this.handleDocumentClick)
      } else {
        document.removeEventListener('click', this.handleDocumentClick)
      }
    }
  }

  handleRef = c => { this.ref = c }

  handleDocumentClick = (e) => {
    const sidebarDOMNode = ReactDOM.findDOMNode(this.ref)
    // close Sidebar if e.target is outside of Sidebar
    if (!sidebarDOMNode.contains(e.target)) {
      this.trySetState({ visible: false })
      this.props.toggleVisibility()
    }
  }

  render() {
    const {
      animation,
      className,
      children,
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
      className
    )

    const rest = getUnhandledProps(Sidebar, this.props)
    const ElementType = getElementType(Sidebar, this.props)

    return <ElementType {...rest} className={classes} ref={this.handleRef}>{children}</ElementType>
  }
}

export default Sidebar
