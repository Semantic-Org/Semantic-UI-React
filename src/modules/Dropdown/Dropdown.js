import _ from 'lodash'
import cx from 'classnames'
import React, { Children, cloneElement, PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getUnhandledProps,
  makeDebugger,
  META,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import Portal from '../../addons/Portal'

import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'
import DropdownHeader from './DropdownHeader'
import DropdownMenu from './DropdownMenu'
import DropdownText from './DropdownText'

const debug = makeDebugger('dropdown')

const _meta = {
  name: 'Dropdown',
  type: META.TYPES.MODULE,
  props: {
    pointing: ['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'],
    additionPosition: ['top', 'bottom'],
  },
}

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 */
export default class Dropdown extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** A Dropdown can reduce its complexity. */
    basic: PropTypes.bool,

    /** Format the Dropdown to appear as a button. */
    button: PropTypes.bool,

    /** Primary content. */
    children: React.PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** A compact dropdown has no minimum width. */
    compact: PropTypes.bool,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** A disabled dropdown menu or item does not allow user interaction. */
    disabled: PropTypes.bool,

    /** An errored dropdown can alert a user to a problem. */
    error: PropTypes.bool,

    /** A dropdown menu can contain floated content. */
    floating: PropTypes.bool,

    /** A dropdown can take the full width of its parent */
    fluid: PropTypes.bool,

    /** Shorthand for Icon. */
    icon: customPropTypes.itemShorthand,

    /** A dropdown can be formatted to appear inline in other content. */
    inline: PropTypes.bool,

    /** A dropdown can be labeled. */
    labeled: PropTypes.bool,

    /** A dropdown can show that it is currently loading data. */
    loading: PropTypes.bool,

    /** A selection dropdown can allow multiple selections. */
    multiple: PropTypes.bool,

    /** Called when a close event happens */
    onClose: PropTypes.func,

    /** Called when an open event happens */
    onOpen: PropTypes.func,

    /** Controls whether the dropdown menu is displayed. */
    open: PropTypes.bool,

    /** A dropdown can be formatted so that its menu is pointing. */
    pointing: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.pointing),
    ]),

    /** A dropdown can have its menu scroll. */
    scrolling: PropTypes.bool,

    /** A selection dropdown can allow a user to search through a large list of choices. */
    search: PropTypes.bool,

    /** A dropdown can be used to select between choices in a form. */
    selection: PropTypes.bool,

    /** A simple dropdown can open without Javascript. */
    simple: PropTypes.bool,

    /** Shorthand for DropdownText. */
    text: customPropTypes.every([
      customPropTypes.disallow(['trigger']),
      PropTypes.node,
    ]),

    /** Element to be rendered in-place where the dropdown is defined. */
    trigger: PropTypes.node,
  }

  static defaultProps = {
    icon: 'dropdown',
  }

  static autoControlledProps = [
    'open',
  ]

  static _meta = _meta
  static Divider = DropdownDivider
  static Header = DropdownHeader
  static Item = DropdownItem
  static Menu = DropdownMenu

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state)
  }

  componentDidMount() {
    if (this.state.open) {
      this.open()
    }
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handleClose = (e) => {
    debug('handleClose()')
    this.close(e)
  }

  handleOpen = (e) => {
    debug('handleOpen()')
    this.open(e)
  }

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  open = (e) => {
    debug('open()')

    const { onOpen } = this.props
    if (onOpen) onOpen(e)

    this.trySetState({ open: true })
  }

  close = (e) => {
    debug('close()')

    const { onClose } = this.props
    if (onClose) onClose(e)

    this.trySetState({ open: false })
  }

  render() {
    const { open } = this.state

    const {
      basic,
      button,
      children,
      className,
      compact,
      fluid,
      floating,
      // icon,
      inline,
      labeled,
      // linkItem,
      multiple,
      pointing,
      search,
      selection,
      simple,
      loading,
      error,
      disabled,
      scrolling,
      text,
      trigger,
    } = this.props

    // Classes
    const classes = cx(
      'ui',
      useKeyOnly(basic, 'basic'),
      useKeyOnly(button, 'button'),
      useKeyOnly(compact, 'compact'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(error, 'error'),
      useKeyOnly(floating, 'floating'),
      useKeyOnly(fluid, 'fluid'),
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      useKeyOnly(inline, 'inline'),
      useKeyOnly(labeled, 'labeled'),
      // TODO: linkItem is required only when Menu child, add dynamically
      // useKeyOnly(linkItem, 'link item'),
      useKeyOnly(loading, 'loading'),
      useKeyOnly(multiple, 'multiple'),
      useKeyOnly(open, 'active visible'),
      useKeyOnly(scrolling, 'scrolling'),
      useKeyOnly(search, 'search'),
      useKeyOnly(selection, 'selection'),
      useKeyOnly(simple, 'simple'),
      useKeyOrValueAndKey(pointing, 'pointing'),
      className,
      'dropdown',
    )
    const rest = getUnhandledProps(Dropdown, this.props)

    const menuChild = Children.only(children)
    const menuClassName = cx(
      useKeyOnly(open, 'visible'),
      menuChild.props.className,
    )

    const triggerElement = trigger || DropdownText.create(text)

    return (
      <Portal {...rest}
        className={classes}
        inline
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        open={open}
        trigger={triggerElement}
      >
        {cloneElement(menuChild, { className: menuClassName })}
      </Portal>
    )
  }
}
