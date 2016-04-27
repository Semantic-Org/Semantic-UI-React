/* eslint-disable react/sort-comp */

import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { useKeyOnly, useKeyOrValueAndKey } from '../../utils/propUtils'
import { iconPropRenderer } from '../../utils/propUtils'

// import as Component so eslint react/prop-types recognizes Dropdown
import { default as Component } from '../../utils/AutoControlledComponent'
import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'
import Icon from '../../elements/Icon/Icon'

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
    // console.debug('Dropdown.componentWillMount()')
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
    // console.debug('Dropdown.componentWillReceiveProps()')
    // console.log('changed props:', _.transform(nextProps, (res, val, key) => {
    //   if (val !== this.props[key]) res[key] = val
    // }, {}))

    if (nextProps.value !== this.state.value) {
      this.setValue(nextProps.value)
    }
  }

  componentDidUpdate(prevProps, prevState) { // eslint-disable-line complexity
    // console.debug('Dropdown.componentDidUpdate()')
    // console.log('changed state:', _.transform(this.state, (res, val, key) => {
    //   if (val !== prevState[key]) res[key] = val
    // }, {}))

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
    // console.debug('Dropdown.componentWillUnmount()')
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
    // console.debug('Dropdown.onChange()')
    // console.log(value)
    const { onChange } = this.props
    if (onChange) onChange(value)
  }

  closeOnEscape = (e) => {
    if (e.key !== 'Escape') return
    e.preventDefault()
    this.close()
  }

  moveSelectionOnKeyDown = (e) => {
    // console.debug('Dropdown.moveSelectionOnKeyDown()')
    // console.log(`key: ${e.key}`)
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        this.moveSelectionBy(1)
        break
      case 'ArrowUp':
        e.preventDefault()
        this.moveSelectionBy(-1)
        break
      default:
        break
    }
  }

  openOnSpace = (e) => {
    if (e.key !== ' ') return
    e.preventDefault()
    this.open()
  }

  openOnArrow = (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    this.open()
  }

  selectItemOnEnter = (e) => {
    // console.debug('Dropdown.selectItemOnEnter()')
    if (e.key !== 'Enter') return
    e.preventDefault()
    const value = this.getSelectedValue()
    if (!value) return
    this.setValue(value)
    this.onChange(value)
  }

  closeOnDocumentClick = (e) => {
    // console.debug('Dropdown.handleDocumentClick()')
    // console.log(e)
    this.close()
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handleClick = (e) => {
    // console.debug('Dropdown.handleClick()')
    // console.log(e)
    const { onClick } = this.props
    if (onClick) onClick(e)
    // prevent closeOnDocumentClick()
    e.stopPropagation()
    this.toggle()
  }

  handleItemClick = (e, value) => {
    // console.debug('Dropdown.handleClickItem()')
    // console.log(value)
    // prevent toggle() in handleClick()
    e.stopPropagation()
    this.setValue(value)
    this.onChange(value)
  }

  handleFocus = (e) => {
    // console.debug('Dropdown.handleFocus()')
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
    // console.debug('Dropdown.handleBlur()')
    const { onBlur } = this.props
    if (onBlur) onBlur(e)
    // TODO
    // handleBlur() is called on mouse down
    // handleClickItem() it called on mouse up
    // item clicks are circumvented by calling close() here
    // this.close()
    this.setState({ focus: false })
  }

  handleSearchKeyDown = (e) => {
    // console.debug('Dropdown.handleSearchKeyDown()')
    // console.log(e.key)
    switch (e.key) {
      case 'ArrowDown':
        this.open()
        break
      default:
        break
    }
  }

  handleSearchChange = (e) => {
    // console.debug('Dropdown.handleSearchChange()')
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
    // console.debug('Dropdown.getSelectedValue()')
    const { selectedIndex } = this.state
    const options = this.getOptions()

    return _.get(options, `[${selectedIndex}].value`)
  }

  getItemIndexByValue = (value) => {
    // console.debug('Dropdown.getItemIndexByValue()')
    const options = this.getOptions()

    return _.findIndex(options, ['value', value])
  }

  // ----------------------------------------
  // Setters
  // ----------------------------------------

  setValue = (value) => {
    const { multiple } = this.props
    // console.debug('Dropdown.setValue()')
    // console.log(value)
    this.trySetState({
      value,
    }, {
      searchQuery: '',
      selectedIndex: this.getItemIndexByValue(value),
    })

    if (!multiple) this.close()
  }

  moveSelectionBy = (offset) => {
    // console.debug('Dropdown.moveSelectionBy()')
    // console.log(`offset: ${offset}`)
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
    // console.debug('Dropdown.scrollSelectedItemIntoView()')
    const menu = document.querySelector('.ui.dropdown.active.visible .menu.visible')
    const item = menu.querySelector('.item.selected')
    // console.log(menu, selectedItem)
    const isOutOfUpperView = item.offsetTop < menu.scrollTop
    const isOutOfLowerView = (item.offsetTop + item.clientHeight) > menu.scrollTop + menu.clientHeight

    if (isOutOfUpperView || isOutOfLowerView) {
      menu.scrollTop = item.offsetTop
    }
  }

  open = () => {
    // console.debug('Dropdown.open()')
    // console.log(`dropdown is ${this.state.open ? 'already' : 'not yet'} open`)
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
    // console.debug('Dropdown.close()')
    // console.log(`dropdown is ${this.state.open ? 'already' : 'not yet'} open`)
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
    const { value } = this.state
    const { name, onChange, selection } = this.props
    // console.debug('Dropdown.renderHiddenInput()')
    // console.log({ name, selection, value })
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
        onKeyDown={this.handleSearchKeyDown}
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
    // console.debug('RENDER')
    // console.log('props', this.props)
    // console.log('state', this.state)
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
