import _ from 'lodash'
import cx from 'classnames'
import React, { Children, cloneElement, PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  keyboardKey,
  makeDebugger,
  META,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import Icon from '../../elements/Icon'

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

    /** Controls whether or not the dropdown should close on blur. */
    closeOnBlur: PropTypes.bool,

    /** Controls whether or not the portal should close on a click outside. */
    closeOnDocumentClick: PropTypes.bool,

    /** Controls whether or not the portal should close when escape is pressed is displayed. */
    closeOnEscape: PropTypes.bool,

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
    icon: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
    ]),

    /** A dropdown can be formatted to appear inline in other content. */
    inline: PropTypes.bool,

    /** A dropdown can be labeled. */
    labeled: PropTypes.bool,

    /** A dropdown can show that it is currently loading data. */
    loading: PropTypes.bool,

    /** A selection dropdown can allow multiple selections. */
    multiple: PropTypes.bool,

    /** Called when the dropdown loses focus. */
    onBlur: PropTypes.func,

    /** Called when the dropdown is clicked. */
    onClick: PropTypes.func,

    /** Called when a close event happens */
    onClose: PropTypes.func,

    /** Called when the dropdown receives focus. */
    onFocus: PropTypes.func,

    /** Called when the dropdown receives mousedown. */
    onMouseDown: PropTypes.func,

    /** Called when an open event happens */
    onOpen: PropTypes.func,

    /** Controls whether the dropdown menu is displayed. */
    open: PropTypes.bool,

    /** Controls whether or not the dropdown should open on focus. */
    openOnFocus: PropTypes.bool,

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
      PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.object,
      ]),
    ]),

    /** Element to be rendered in-place where the dropdown is defined. */
    trigger: PropTypes.node,
  }

  static defaultProps = {
    closeOnBlur: true,
    closeOnEscape: true,
    closeOnDocumentClick: true,
    icon: 'dropdown',
    openOnFocus: true,
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
    if (super.componentWillMount) super.componentWillMount()

    this.attachDocumentListeners()
  }

  componentDidUpdate(prevProps, prevState) {
    if (super.componentDidUpdate) super.componentDidUpdate()

    if (prevState.open && !this.state.open) {
      debug('dropdown closed')
      this.handleClose()
    }
  }

  componentWillUnmount() {
    if (super.componentWillUnmount) super.componentWillUnmount()

    this.detachDocumentListeners()
  }

  attachDocumentListeners = () => {
    document.addEventListener('click', this.closeOnDocumentClick)
    document.addEventListener('keydown', this.closeOnEscape)
    document.addEventListener('keydown', this.openOnArrow)
    document.addEventListener('keydown', this.openOnSpace)
  }

  detachDocumentListeners = () => {
    document.removeEventListener('click', this.closeOnDocumentClick)
    document.removeEventListener('keydown', this.closeOnEscape)
    document.removeEventListener('keydown', this.openOnArrow)
    document.removeEventListener('keydown', this.openOnSpace)
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  handleRef = (c) => (this._dropdown = c)

  closeOnDocumentClick = (e) => {
    if (!this.props.closeOnDocumentClick) return
    if (!this.state.open) return

    // If event happened within the dropdown, ignore it
    if (this._dropdown.contains(e.target)) return

    debug('closeOnDocumentClick()')

    e.stopPropagation()
    this.close(e)
  }

  closeOnEscape = (e) => {
    if (!this.props.closeOnEscape) return
    if (!this.state.open) return

    if (keyboardKey.getCode(e) !== keyboardKey.Escape) return

    debug('closeOnEscape()')

    e.preventDefault()
    this.close(e)
  }

  openOnArrow = (e) => {
    const code = keyboardKey.getCode(e)
    if (!_.includes([keyboardKey.ArrowDown, keyboardKey.ArrowUp], code)) return

    const { focus, open } = this.state
    if (open || !focus) return

    debug('openOnArrow()')

    e.preventDefault()
    this.open(e)
  }

  openOnSpace = (e) => {
    if (keyboardKey.getCode(e) !== keyboardKey.Spacebar) return

    const { focus, open } = this.state
    if (open || !focus) return

    debug('openOnSpace()')

    e.preventDefault()
    this.open(e)
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handleClose = (e) => {
    debug('handleClose()')

    // When the dropdown is closed, blur the currently focused element if it
    // is within the dropdown.
    if (this._dropdown.contains(document.activeElement)) {
      document.activeElement.blur()
    }
  }

  handleMouseDown = (e) => {
    debug('handleMouseDown()')

    const { onMouseDown } = this.props
    if (onMouseDown) onMouseDown(e)

    this.isMouseDown = true
    document.addEventListener('mouseup', this.handleDocumentMouseUp)
  }

  handleDocumentMouseUp = () => {
    debug('handleDocumentMouseUp()')

    this.isMouseDown = false
    document.removeEventListener('mouseup', this.handleDocumentMouseUp)
  }

  handleClick = (e) => {
    debug('handleClick()')

    const { onClick } = this.props
    if (onClick) onClick(e)

    if (this.state.open) {
      this.close(e)
    } else {
      this.open(e)
    }
  }

  handleFocus = (e) => {
    debug('handleFocus()')

    const { onFocus, openOnFocus } = this.props
    if (onFocus) onFocus(e)

    if (this.isMouseDown || !openOnFocus) {
      this.setState({ focus: true })
    } else {
      this.open(e, { focus: true })
    }
  }

  handleBlur = (e) => {
    debug('handleBlur()')

    const { closeOnBlur, onBlur } = this.props
    if (onBlur) onBlur(e)

    // Do not close on blur when the mouse is down inside of the Dropdown
    if (this.isMouseDown || !closeOnBlur) {
      this.setState({ focus: false })
    } else {
      this.close(e, { focus: false })
    }
  }

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  open = (e, additionalState) => {
    debug('open()')

    const { onOpen } = this.props
    if (onOpen) onOpen(e)

    this.trySetState({ open: true }, additionalState)
  }

  close = (e, additionalState) => {
    debug('close()')

    const { onClose } = this.props
    if (onClose) onClose(e)

    this.trySetState({ open: false }, additionalState)
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
      icon,
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
    const ElementType = getElementType(Dropdown, this.props)

    const menuChild = Children.only(children)
    const menuClassName = cx(
      useKeyOnly(open, 'visible'),
      menuChild.props.className,
    )

    return (
      <ElementType
        tabIndex={0}
        {...rest}
        className={classes}
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        onMouseDown={this.handleMouseDown}
        ref={this.handleRef}
      >
        {trigger || DropdownText.create(text)}
        {Icon.create(icon)}
        {cloneElement(menuChild, { className: menuClassName })}
      </ElementType>
    )
  }
}
