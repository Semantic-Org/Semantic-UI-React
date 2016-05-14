/* eslint-disable react/sort-comp */

import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { useKeyOnly, useKeyOrValueAndKey } from '../../utils/propUtils'
import { iconPropRenderer } from '../../utils/propUtils'
import keyboardKey from '../../utils/keyboardKey'
import { makeDebugger } from '../../utils/debug'
import { objectDiff } from '../../utils/utils'

// import as Component so eslint react/prop-types recognizes Dropdown
import { default as Component } from '../../utils/AutoControlledComponent'
import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'
import Icon from '../../elements/Icon/Icon'

const debug = makeDebugger('dropdown')

const _meta = {
  library: META.library.semanticUI,
  name: 'Dropdown',
  type: META.type.module,
  props: {
    pointing: ['bottom left', 'bottom right'],
  },
}

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Select
 */
export default class Dropdown extends Component {
  static propTypes = {
    // ------------------------------------
    // Behavior
    // ------------------------------------
    /** Add an icon by name or as a component. */
    icon: PropTypes.oneOf([
      PropTypes.element,
      PropTypes.string,
    ]),

    /** Array of `{ text: '', value: '' }` options */
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    })),

    /** Controls whether or not the dropdown menu is displayed. */
    open: PropTypes.bool,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Current value, creates a controlled component. */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]),
    ]),

    /** Must match one of the option values. */
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]),
    ]),

    /** Placeholder text. */
    placeholder: PropTypes.string,

    /** Name of the hidden input which holds the value. */
    name: PropTypes.string,

    // ------------------------------------
    // Callbacks
    // ------------------------------------

    /** Called with the React Synthetic Event on Dropdown blur. */
    onBlur: PropTypes.func,

    /** Called with the current value on change. */
    onChange: PropTypes.func,

    /** Called with the React Synthetic Event on Dropdown click. */
    onClick: PropTypes.func,

    /** Called with the React Synthetic Event on Dropdown focus. */
    onFocus: PropTypes.func,

    // ------------------------------------
    // Style
    // ------------------------------------

    /** Format the Dropdown to appear as a button. */
    button: PropTypes.bool,

    /** Additional classes added to the root element. */
    className: PropTypes.string,

    /** Format the dropdown to only take up as much width as needed. */
    compact: PropTypes.bool,

    /** Format the dropdown to only take up as much width as possible. */
    fluid: PropTypes.bool,

    /** Display the menu as detached from the Dropdown. */
    floating: PropTypes.bool,

    inline: PropTypes.bool,
    labeled: PropTypes.bool,
    linkItem: PropTypes.bool,

    /** Allow selecting multiple options. */
    multiple: PropTypes.bool,

    /** Use a detached menu that is pointing to the Dropdown. */
    pointing: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.pointing),
    ]),

    /** Make the dropdown options searchable. */
    search: PropTypes.bool,

    /** The text displayed in the dropdown, usually for the active item. */
    text: PropTypes.string,

    // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

    /** Behave as an html select. */
    selection: PropTypes.bool,
    simple: PropTypes.bool,

    loading: PropTypes.bool,
    error: PropTypes.bool,
    disabled: PropTypes.bool,

    scrolling: PropTypes.bool,
  }

  static autoControlledProps = [
    'open',
    'value',
  ]

  static _meta = _meta
  static Divider = DropdownDivider
  static Item = DropdownItem
  static Menu = DropdownMenu

  componentWillMount() {
    if (super.componentWillMount) super.componentWillMount()
    debug('componentWillMount()')
    const { open, options } = this.props
    const { value } = this.state

    const selectedIndex = this.getItemIndexByValue(value || _.get(options, '[0].value'))

    this.trySetState({
      value,
    }, {
      selectedIndex,
    })

    if (open) this.open()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state)
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps)
    debug.groupCollapsed('componentDidUpdate()')
    // TODO objectDiff still runs in prod, stop it
    debug('changed props:', objectDiff(nextProps, this.props))
    debug.groupEnd()

    if (nextProps.value !== this.state.value) {
      this.setValue(nextProps.value)
    }
  }

  componentDidUpdate(prevProps, prevState) { // eslint-disable-line complexity
    debug.groupCollapsed('componentDidUpdate()')
    // TODO objectDiff still runs in prod, stop it
    debug('changed state:', objectDiff(this.state, prevState))
    debug.groupEnd()

    // focused / blurred
    if (!prevState.focus && this.state.focus) {
      if (!this.state.open) {
        document.addEventListener('keydown', this.openOnArrow)
        document.addEventListener('keydown', this.openOnSpace)
      } else {
        document.addEventListener('keydown', this.moveSelectionOnKeyDown)
        document.addEventListener('keydown', this.selectItemOnEnter)
      }
    } else if (prevState.focus && !this.state.focus) {
      document.removeEventListener('keydown', this.openOnArrow)
      document.removeEventListener('keydown', this.openOnSpace)
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
      document.removeEventListener('keydown', this.selectItemOnEnter)
    }

    // opened / closed
    if (!prevState.open && this.state.open) {
      document.addEventListener('keydown', this.closeOnEscape)
      document.addEventListener('keydown', this.moveSelectionOnKeyDown)
      document.addEventListener('keydown', this.selectItemOnEnter)
      document.addEventListener('click', this.closeOnDocumentClick)
      document.removeEventListener('keydown', this.openOnArrow)
      document.removeEventListener('keydown', this.openOnSpace)
    } else if (prevState.open && !this.state.open) {
      document.removeEventListener('keydown', this.closeOnEscape)
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
      document.removeEventListener('keydown', this.selectItemOnEnter)
      document.removeEventListener('click', this.closeOnDocumentClick)
    }
  }

  componentWillUnmount() {
    debug('componentWillUnmount()')
    document.removeEventListener('keydown', this.openOnArrow)
    document.removeEventListener('keydown', this.openOnSpace)
    document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
    document.removeEventListener('keydown', this.selectItemOnEnter)
    document.removeEventListener('keydown', this.closeOnEscape)
    document.removeEventListener('click', this.closeOnDocumentClick)
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  // onChange needs to receive a value
  // can't rely on props.value if we are controlled
  onChange = (value) => {
    debug.groupCollapsed('onChange()')
    debug(value)
    debug.groupEnd()
    const { onChange } = this.props
    if (onChange) onChange(value)
  }

  closeOnEscape = (e) => {
    if (keyboardKey.getCode(e) !== keyboardKey.Escape) return
    e.preventDefault()
    this.close()
  }

  moveSelectionOnKeyDown = (e) => {
    debug.groupCollapsed('moveSelectionOnKeyDown()')
    debug(keyboardKey.getName(e))
    debug.groupEnd()
    switch (keyboardKey.getCode(e)) {
      case keyboardKey.ArrowDown:
        e.preventDefault()
        this.moveSelectionBy(1)
        break
      case keyboardKey.ArrowUp:
        e.preventDefault()
        this.moveSelectionBy(-1)
        break
      default:
        break
    }
  }

  openOnSpace = (e) => {
    if (keyboardKey.getCode(e) !== keyboardKey.Spacebar) return
    e.preventDefault()
    this.open()
  }

  openOnArrow = (e) => {
    const code = keyboardKey.getCode(e)
    if (!_.includes([keyboardKey.ArrowDown, keyboardKey.ArrowUp], code)) return
    e.preventDefault()
    this.open()
  }

  selectItemOnEnter = (e) => {
    debug.groupCollapsed('selectItemOnEnter()')
    debug(keyboardKey.getName(e))
    debug.groupEnd()
    if (keyboardKey.getCode(e) !== keyboardKey.Enter) return
    e.preventDefault()
    const value = this.getSelectedValue()
    if (!value) return
    this.setValue(value)
    this.onChange(value)
  }

  closeOnDocumentClick = (e) => {
    debug.groupCollapsed('closeOnDocumentClick()')
    debug(e)
    debug.groupEnd()
    this.close()
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handleClick = (e) => {
    debug.groupCollapsed('handleClick()')
    debug(e)
    debug.groupEnd()
    const { onClick } = this.props
    if (onClick) onClick(e)
    // prevent closeOnDocumentClick()
    e.stopPropagation()
    this.toggle()
  }

  handleItemClick = (e, value) => {
    debug.groupCollapsed('handleClickItem()')
    debug(value)
    debug.groupEnd()
    // prevent toggle() in handleClick()
    e.stopPropagation()
    this.setValue(value)
    this.onChange(value)
  }

  handleFocus = (e) => {
    debug('handleFocus()')
    const { onFocus } = this.props
    if (onFocus) onFocus(e)
    this.setState({ focus: true })
    // TODO
    // handleFocus() is called on mouse down
    // handleClick() it called on mouse up
    // open() here is immediately toggled to close() by click
    // this.open()
  }

  handleBlur = (e) => {
    debug('handleBlur()')
    const { onBlur } = this.props
    if (onBlur) onBlur(e)
    // TODO
    // handleBlur() is called on mouse down
    // handleClickItem() it called on mouse up
    // item clicks are circumvented by calling close() here
    // this.close()
    this.setState({ focus: false })
  }

  handleSearchChange = (e) => {
    debug.groupCollapsed('handleSearchChange()')
    debug(e.target.value)
    debug.groupEnd()
    // prevent propagating to this.props.onChange()
    e.stopPropagation()
    const { search } = this.props
    const { open } = this.state
    const newValue = e.target.value

    // open search dropdown on search query
    if (search && newValue && !open) this.open()

    this.setState({
      selectedIndex: 0,
      searchQuery: newValue,
    })
  }

  // ----------------------------------------
  // Getters
  // ----------------------------------------

  getOptions = () => {
    const { options, search } = this.props
    const { searchQuery } = this.state

    if (!search || !searchQuery) return options

    const re = new RegExp(_.escapeRegExp(searchQuery), 'i')
    return _.filter(options, (opt) => re.test(opt.text))
  }

  getSelectedValue = () => {
    debug('getSelectedValue()')
    const { selectedIndex } = this.state
    const options = this.getOptions()

    return _.get(options, `[${selectedIndex}].value`)
  }

  getItemIndexByValue = (value) => {
    debug('getItemIndexByValue()')
    const options = this.getOptions()

    return _.findIndex(options, ['value', value])
  }

  // ----------------------------------------
  // Setters
  // ----------------------------------------

  setValue = (value) => {
    const { multiple } = this.props
    debug.groupCollapsed('setValue()')
    debug(value)
    debug.groupEnd()
    this.trySetState({
      value,
    }, {
      searchQuery: '',
      selectedIndex: this.getItemIndexByValue(value),
    })

    if (!multiple) this.close()
  }

  moveSelectionBy = (offset) => {
    debug.groupCollapsed('moveSelectionBy()')
    debug(`offset: ${offset}`)
    debug.groupEnd()
    const { selectedIndex } = this.state

    const options = this.getOptions()
    const lastIndex = options.length - 1

    // next is after last, wrap to beginning
    // next is before first, wrap to end
    let nextIndex = selectedIndex + offset
    if (nextIndex > lastIndex) nextIndex = 0
    else if (nextIndex < 0) nextIndex = lastIndex

    this.setState({ selectedIndex: nextIndex })
    this.scrollSelectedItemIntoView()
  }

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  scrollSelectedItemIntoView = () => {
    debug.groupCollapsed('scrollSelectedItemIntoView()')
    const menu = document.querySelector('.ui.dropdown.active.visible .menu.visible')
    const item = menu.querySelector('.item.selected')
    debug(`menu: ${menu}`)
    debug(`item: ${item}`)
    debug.groupEnd()
    const isOutOfUpperView = item.offsetTop < menu.scrollTop
    const isOutOfLowerView = (item.offsetTop + item.clientHeight) > menu.scrollTop + menu.clientHeight

    if (isOutOfUpperView || isOutOfLowerView) {
      menu.scrollTop = item.offsetTop
    }
  }

  open = () => {
    debug.groupCollapsed('open()')
    debug(`dropdown is ${this.state.open ? 'already' : 'not yet'} open`)
    debug.groupEnd()
    if (this.state.open) return
    if (this.props.search) this.refs.search.focus()

    this.trySetState({
      open: true,
    }, {
      dropdownClasses: 'active visible',
      menuClasses: 'visible',
    })
  }

  close = () => {
    debug.groupCollapsed('close()')
    debug(`dropdown is ${!this.state.open ? 'already' : 'not yet'} closed`)
    debug.groupEnd()
    if (!this.state.open) return

    this.trySetState({
      open: false,
    }, {
      dropdownClasses: '',
      menuClasses: '',
    })
  }

  toggle = () => this.state.open ? this.close() : this.open()

  // ----------------------------------------
  // Render
  // ----------------------------------------

  renderText = () => {
    const { options, search, text } = this.props
    const { searchQuery, value } = this.state

    const classes = cx('text', search && searchQuery && 'filtered')

    let _text
    if (text) {
      _text = text
    } else {
      _text = !value || searchQuery ? null : _.get(_.find(options, { value }), 'text')
    }

    return <div className={classes}>{_text}</div>
  }

  renderPlaceholder = () => {
    const { placeholder, search } = this.props
    const { searchQuery, value } = this.state

    if (value || !placeholder) return null
    const classes = cx('default text', search && searchQuery && 'filtered')

    return <div className={classes}>{placeholder}</div>
  }

  // TODO hidden input only exists for backwards compatibility with SUI jQuery plugins
  // remove once those are removed
  renderHiddenInput = () => {
    debug.groupCollapsed('renderHiddenInput()')
    const { value } = this.state
    const { name, onChange, selection } = this.props
    debug(`name:      ${name}`)
    debug(`selection: ${selection}`)
    debug(`value:     ${value}`)
    debug.groupEnd()
    if (!selection) return null
    const _value = Array.isArray(value) ? value.join(',') : value

    return <input type='hidden' name={name} onChange={onChange} value={_value} />
  }

  renderSearchInput = () => {
    const { search } = this.props
    const { searchQuery } = this.state

    return !search ? null : (
      <input
        value={searchQuery}
        onBlur={this.handleBlur}
        onChange={this.handleSearchChange}
        onFocus={this.handleFocus}
        className='search'
        autoComplete='off'
        tabIndex='0'
        ref='search'
      />
    )
  }

  renderOptions = () => {
    const { selectedIndex, value } = this.state
    const _options = this.getOptions()

    return _.isEmpty(_options) ? (
      <div className='message'>No results found.</div>
    ) : _.map(_options, (opt, i) => (
      <DropdownItem
        key={`${opt.value}-${i}`}
        active={opt.value === value}
        onClick={this.handleItemClick}
        selected={selectedIndex === i}
        text={opt.text}
        value={opt.value}
      />
    ))
  }

  render() {
    debug.groupCollapsed('render()')
    debug('props', this.props)
    debug('state', this.state)
    debug.groupEnd()
    const { dropdownClasses, menuClasses } = this.state

    const {
      button,
      className,
      compact,
      fluid,
      floating,
      icon,
      inline,
      labeled,
      linkItem,
      multiple,
      pointing,
      search,
      selection,
      simple,
      loading,
      error,
      disabled,
      scrolling,
      // TODO: not all our props have been destructured, `rest` includes some of our props here
      // we should only spread user props
      ...rest,
    } = this.props

    // Classes
    const classes = cx('sd-dropdown ui',
      dropdownClasses,
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(error, 'error'),
      useKeyOnly(loading, 'loading'),

      useKeyOnly(button, 'button'),
      useKeyOnly(compact, 'compact'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(floating, 'floating'),
      useKeyOnly(inline, 'inline'),
      useKeyOnly(icon, 'icon'),
      useKeyOnly(labeled, 'labeled'),
      // TODO: linkItem is required only when Menu child, add dynamically
      useKeyOnly(linkItem, 'link item'),
      useKeyOnly(multiple, 'multiple'),
      useKeyOnly(search, 'search'),
      useKeyOnly(selection, 'selection'),
      useKeyOnly(simple, 'simple'),
      useKeyOnly(scrolling, 'scrolling'),

      useKeyOrValueAndKey(pointing, 'pointing'),
      className,
      'dropdown',
    )

    const conditionalProps = search ? null : {
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      tabIndex: 0,
    }

    return (
      <div
        {...rest}
        {...conditionalProps}
        onClick={this.handleClick}
        className={classes}
      >
        {this.renderHiddenInput()}
        {iconPropRenderer()}
        {this.renderSearchInput()}
        {this.renderText()}
        <Icon className={'dropdown'} />
        {this.renderPlaceholder()}
        <DropdownMenu className={menuClasses} ref='menu'>
          {this.renderOptions()}
        </DropdownMenu>
      </div>
    )
  }
}
