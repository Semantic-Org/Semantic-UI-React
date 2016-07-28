import _ from 'lodash'
import cx from 'classnames'
import React, { cloneElement, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getUnhandledProps,
  keyboardKey,
  makeDebugger,
  META,
  objectDiff,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import { createIcon } from '../../factories'
import { Label } from '../../elements'
import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'
import DropdownMenu from './DropdownMenu'

const debug = makeDebugger('dropdown')

const _meta = {
  name: 'Dropdown',
  type: META.TYPES.MODULE,
  props: {
    pointing: ['bottom left', 'bottom right'],
    additionPosition: ['top', 'bottom'],
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
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),

    /** Array of `{ text: '', value: '' }` options */
    options: customPropTypes.every([
      customPropTypes.disallow(['children']),
      customPropTypes.demand(['selection']),
      PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
        ]).isRequired,
        text: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
        ]),
      })),
    ]),

    /** Controls whether or not the dropdown menu is displayed. */
    open: PropTypes.bool,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** A Dropdown can contain a single <Dropdown.Menu /> child. */
    children: customPropTypes.every([
      customPropTypes.disallow(['options', 'selection']),
      customPropTypes.demand(['text']),
      React.PropTypes.element,
      customPropTypes.ofComponentTypes(['DropdownMenu']),
    ]),

    /** Current value or value array if multiple. Creates a controlled component. */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])),
    ]),

    /** Initial value or value array if multiple. */
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])),
    ]),

    /** Placeholder text. */
    placeholder: PropTypes.string,

    /** Name of the hidden input which holds the value. */
    name: PropTypes.string,

    /**
     * Allow user additions to the list of options (boolean).
     * Requires the use of `selection`, `options` and `search`.
     */
    allowAdditions: customPropTypes.every([
      customPropTypes.demand(['options', 'selection', 'search']),
      PropTypes.bool,
    ]),

    /** Called with the new value added by the user. Use this to update the options list. */
    onAddItem: PropTypes.func,

    /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
    additionPosition: PropTypes.oneOf(_meta.props.additionPosition),

    /** Label prefixed to an option added by a user. */
    additionLabel: PropTypes.string,

    // ------------------------------------
    // Callbacks
    // ------------------------------------

    /** Called with the React Synthetic Event on Dropdown blur. */
    onBlur: PropTypes.func,

    /** Called with the React Synthetic Event and current value on change. */
    onChange: PropTypes.func,

    /** Called with the React Synthetic Event and current value on search input change. */
    onSearchChange: PropTypes.func,

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
    selection: customPropTypes.every([
      customPropTypes.disallow(['children']),
      customPropTypes.demand(['options']),
      PropTypes.bool,
    ]),
    simple: PropTypes.bool,

    loading: PropTypes.bool,
    error: PropTypes.bool,
    disabled: PropTypes.bool,

    scrolling: PropTypes.bool,
  }

  static defaultProps = {
    icon: 'dropdown',
    additionLabel: 'Add:',
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
    const { open, value } = this.state

    this.setValue(value)
    if (open) this.open()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state)
  }

  componentWillReceiveProps(nextProps) {
    super.componentWillReceiveProps(nextProps)
    debug('componentWillReceiveProps()')
    // TODO objectDiff still runs in prod, stop it
    debug('changed props:', objectDiff(nextProps, this.props))

    if (process.env.NODE_ENV !== 'production') {
      // in development, validate value type matches dropdown type
      const isNextValueArray = Array.isArray(nextProps.value)
      const hasValue = _.has(nextProps, 'value')

      /* eslint-disable no-console */
      if (hasValue && nextProps.multiple && !isNextValueArray) {
        console.error(
          'Dropdown `value` must be an array when `multiple` is set.' +
          ` Received type: \`${Object.prototype.toString.call(nextProps.value)}\`.`,
        )
      } else if (hasValue && !nextProps.multiple && isNextValueArray) {
        console.error(
          'Dropdown `value` must not be an array when `multiple` is not set.' +
          ' Either set `multiple={true}` or use a string or number value.'
        )
      }
      /* eslint-enable no-console */
    }

    if (!_.isEqual(nextProps.value, this.props.value)) {
      debug('value changed, setting', nextProps.value)
      this.setValue(nextProps.value)
    }
  }

  componentDidUpdate(prevProps, prevState) { // eslint-disable-line complexity
    debug('componentDidUpdate()')
    // TODO objectDiff still runs in prod, stop it
    debug('changed state:', objectDiff(this.state, prevState))

    // focused / blurred
    if (!prevState.focus && this.state.focus) {
      if (!this.state.open) {
        document.addEventListener('keydown', this.openOnArrow)
        document.addEventListener('keydown', this.openOnSpace)
      } else {
        document.addEventListener('keydown', this.moveSelectionOnKeyDown)
        document.addEventListener('keydown', this.selectItemOnEnter)
        document.addEventListener('keydown', this.removeItemOnBackspace)
      }
    } else if (prevState.focus && !this.state.focus) {
      document.removeEventListener('keydown', this.openOnArrow)
      document.removeEventListener('keydown', this.openOnSpace)
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
      document.removeEventListener('keydown', this.selectItemOnEnter)
      document.removeEventListener('keydown', this.removeItemOnBackspace)
    }

    // opened / closed
    if (!prevState.open && this.state.open) {
      this.open()
      document.addEventListener('keydown', this.closeOnEscape)
      document.addEventListener('keydown', this.moveSelectionOnKeyDown)
      document.addEventListener('keydown', this.selectItemOnEnter)
      document.addEventListener('keydown', this.removeItemOnBackspace)
      document.addEventListener('click', this.closeOnDocumentClick)
      document.removeEventListener('keydown', this.openOnArrow)
      document.removeEventListener('keydown', this.openOnSpace)
    } else if (prevState.open && !this.state.open) {
      this.close()
      document.removeEventListener('keydown', this.closeOnEscape)
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
      document.removeEventListener('keydown', this.selectItemOnEnter)
      document.removeEventListener('keydown', this.removeItemOnBackspace)
      document.removeEventListener('click', this.closeOnDocumentClick)
    }
  }

  componentWillUnmount() {
    debug('componentWillUnmount()')
    document.removeEventListener('keydown', this.openOnArrow)
    document.removeEventListener('keydown', this.openOnSpace)
    document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
    document.removeEventListener('keydown', this.selectItemOnEnter)
    document.removeEventListener('keydown', this.removeItemOnBackspace)
    document.removeEventListener('keydown', this.closeOnEscape)
    document.removeEventListener('click', this.closeOnDocumentClick)
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  // onChange needs to receive a value
  // can't rely on props.value if we are controlled
  onChange = (e, value) => {
    debug('onChange()')
    debug(value)
    const { onChange } = this.props
    if (onChange) onChange(e, value)
  }

  closeOnEscape = (e) => {
    if (keyboardKey.getCode(e) !== keyboardKey.Escape) return
    e.preventDefault()
    this.close()
  }

  moveSelectionOnKeyDown = (e) => {
    debug('moveSelectionOnKeyDown()')
    debug(keyboardKey.getName(e))
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
    if (this.state.open) return
    e.preventDefault()
    // TODO open/close should only change state, open/closeMenu should be called on did update
    this.trySetState({ open: true })
  }

  openOnArrow = (e) => {
    const code = keyboardKey.getCode(e)
    if (!_.includes([keyboardKey.ArrowDown, keyboardKey.ArrowUp], code)) return
    if (this.state.open) return
    e.preventDefault()
    // TODO open/close should only change state, open/closeMenu should be called on did update
    this.trySetState({ open: true })
  }

  selectItemOnEnter = (e) => {
    debug('selectItemOnEnter()')
    debug(keyboardKey.getName(e))
    if (keyboardKey.getCode(e) !== keyboardKey.Enter) return
    e.preventDefault()

    const { multiple, onAddItem, options } = this.props
    const value = this.getSelectedItemValue()

    // prevent selecting null if there was no selected item value
    if (!value) return

    // notify the onAddItem prop if this is a new value
    if (onAddItem && !_.some(options, { text: value })) onAddItem(value)

    // notify the onChange prop that the user is trying to change value
    if (multiple) {
      // state value may be undefined
      const newValue = _.union(this.state.value, [value])
      this.setValue(newValue)
      this.onChange(e, newValue)
    } else {
      this.setValue(value)
      this.onChange(e, value)
      this.close()
    }
  }

  removeItemOnBackspace = (e) => {
    debug('removeItemOnBackspace()')
    debug(keyboardKey.getName(e))
    if (keyboardKey.getCode(e) !== keyboardKey.Backspace) return

    const { multiple, search } = this.props
    const { searchQuery, value } = this.state

    if (searchQuery || !search || !multiple || _.isEmpty(value)) return

    e.preventDefault()

    // remove most recent value
    const newValue = _.dropRight(value)

    this.setValue(newValue)
    this.onChange(e, newValue)
  }

  closeOnDocumentClick = (e) => {
    debug('closeOnDocumentClick()')
    debug(e)
    this.close()
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handleClick = (e) => {
    debug('handleClick()')
    debug(e)
    const { onClick } = this.props
    if (onClick) onClick(e)
    // prevent closeOnDocumentClick()
    e.stopPropagation()
    this.toggle()
  }

  handleItemClick = (e, value) => {
    debug('handleItemClick()')
    debug(value)
    const { multiple, onAddItem, options } = this.props

    // prevent toggle() in handleClick()
    e.stopPropagation()
    // prevent closeOnDocumentClick() if multiple
    if (multiple) {
      e.nativeEvent.stopImmediatePropagation()
    }

    // notify the onAddItem prop if this is a new value
    if (onAddItem && !_.some(options, { value })) onAddItem(value)

    // notify the onChange prop that the user is trying to change value
    if (multiple) {
      const newValue = _.union(this.state.value, [value])
      this.setValue(newValue)
      this.onChange(e, newValue)
    } else {
      this.setValue(value)
      this.onChange(e, value)
      this.close()
    }
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
    debug('handleSearchChange()')
    debug(e.target.value)
    // prevent propagating to this.props.onChange()
    e.stopPropagation()
    const { search, onSearchChange } = this.props
    const { open } = this.state
    const newQuery = e.target.value

    if (onSearchChange) onSearchChange(e, newQuery)

    // open search dropdown on search query
    if (search && newQuery && !open) this.open()

    // resize the search input, temporarily show the sizer so we can measure it
    let searchWidth
    if (newQuery) {
      const sizer = findDOMNode(this.refs.sizer)
      sizer.style.display = 'inline'
      searchWidth = Math.ceil(sizer.getBoundingClientRect().width)
      sizer.style.removeProperty('display')
    }

    this.setState({
      selectedIndex: 0,
      searchQuery: newQuery,
      searchWidth,
    })
  }

  // ----------------------------------------
  // Getters
  // ----------------------------------------

  getMenuOptions = () => {
    const { multiple, search, allowAdditions, additionPosition, additionLabel, options } = this.props
    const { searchQuery, value } = this.state

    let filteredOptions = options

    // filter out active options
    if (multiple) {
      filteredOptions = _.filter(filteredOptions, opt => !_.includes(value, opt.value))
    }

    // filter by search query
    if (search && searchQuery) {
      const re = new RegExp(_.escapeRegExp(searchQuery), 'i')
      filteredOptions = _.filter(filteredOptions, (opt) => re.test(opt.text))
    }

    // insert the "add" item
    if (allowAdditions && search && searchQuery && !_.some(filteredOptions, { text: searchQuery })) {
      const addItem = {
        text: additionLabel ? `${additionLabel} ${searchQuery}` : searchQuery,
        value: searchQuery,
      }
      if (additionPosition === 'top') filteredOptions.unshift(addItem)
      else filteredOptions.push(addItem)
    }

    return filteredOptions
  }

  getSelectedItemValue = () => {
    const { selectedIndex } = this.state
    const options = this.getMenuOptions()

    return _.get(options, `[${selectedIndex}].value`)
  }

  getItemByValue = (value) => {
    const { options } = this.props
    return _.find(options, { value })
  }

  getMenuItemIndexByValue = (value) => {
    const options = this.getMenuOptions()

    return _.findIndex(options, ['value', value])
  }

  // ----------------------------------------
  // Setters
  // ----------------------------------------

  setValue = (value) => {
    debug('setValue()')
    debug('value', value)
    const { multiple } = this.props
    const { selectedIndex } = this.state
    const options = this.getMenuOptions()
    const newState = {
      searchQuery: '',
    }

    // update the selected index
    if (!selectedIndex) {
      // Select the currently active item, if none, use the first item.
      // Multiple selects remove active items from the list,
      // their initial selected index should be 0.
      newState.selectedIndex = multiple ? 0 : this.getMenuItemIndexByValue(value || _.get(options, '[0].value'))
    } else if (multiple) {
      // multiple selects remove options from the menu as they are made active
      // keep the selected index within range of the remaining items
      if (selectedIndex >= options.length - 1) {
        newState.selectedIndex = selectedIndex - 1
      }
    } else {
      // regular selects can only have one active item
      // set the selected index to the currently active item
      newState.selectedIndex = this.getMenuItemIndexByValue(value)
    }

    this.trySetState({ value }, newState)
  }

  handleLabelRemove = (e, labelProps) => {
    debug('handleLabelRemove()')
    // prevent focusing search input on click
    e.stopPropagation()
    const { value } = this.state
    const newValue = _.without(value, labelProps.value)
    debug('label props:', labelProps)
    debug('current value:', value)
    debug('remove value:', labelProps.value)
    debug('new value:', newValue)

    this.setValue(newValue)
    this.onChange(e, newValue)
  }

  moveSelectionBy = (offset) => {
    debug('moveSelectionBy()')
    debug(`offset: ${offset}`)
    const { selectedIndex } = this.state

    const options = this.getMenuOptions()
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
    debug('scrollSelectedItemIntoView()')
    const menu = document.querySelector('.ui.dropdown.active.visible .menu.visible')
    const item = menu.querySelector('.item.selected')
    debug(`menu: ${menu}`)
    debug(`item: ${item}`)
    const isOutOfUpperView = item.offsetTop < menu.scrollTop
    const isOutOfLowerView = (item.offsetTop + item.clientHeight) > menu.scrollTop + menu.clientHeight

    if (isOutOfUpperView || isOutOfLowerView) {
      menu.scrollTop = item.offsetTop
    }
  }

  open = () => {
    debug('open()')
    debug(`dropdown is ${this.state.open ? 'already' : 'not yet'} open`)
    const { search } = this.props
    if (search) this.refs.search.focus()

    this.trySetState({
      open: true,
    }, {
      dropdownClasses: 'active visible',
      menuClasses: 'visible',
    })
  }

  close = () => {
    debug('close()')
    debug(`dropdown is ${!this.state.open ? 'already' : 'not yet'} closed`)
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
    const { multiple, placeholder, search, text } = this.props
    const { searchQuery, value } = this.state
    const hasValue = multiple ? !_.isEmpty(value) : !!value

    const classes = cx(
      placeholder && !hasValue && 'default',
      'text',
      search && searchQuery && 'filtered'
    )
    let _text = placeholder
    if (text && !searchQuery) {
      _text = text
    } else if (searchQuery) {
      _text = null
    } else if (hasValue) {
      _text = _.get(this.getItemByValue(value), 'text')
    }

    return <div className={classes}>{_text}</div>
  }

  // TODO hidden input only exists for backwards compatibility with SUI jQuery plugins
  // remove once those are removed
  renderHiddenInput = () => {
    debug('renderHiddenInput()')
    const { value } = this.state
    const { multiple, name, selection } = this.props
    debug(`name:      ${name}`)
    debug(`selection: ${selection}`)
    debug(`value:     ${value}`)
    if (!selection) return null

    const _value = multiple ? (value || []).join(',') : value

    return <input type='hidden' name={name} value={_value} />
  }

  renderSearchInput = () => {
    const { search } = this.props
    const { searchQuery, searchWidth } = this.state

    return !search ? null : (
      <input
        value={searchQuery}
        onBlur={this.handleBlur}
        onChange={this.handleSearchChange}
        onFocus={this.handleFocus}
        className='search'
        autoComplete='off'
        tabIndex='0'
        style={{ width: searchWidth }}
        ref='search'
      />
    )
  }

  renderSearchSizer = () => {
    const { search } = this.props
    const { searchQuery } = this.state

    return !search ? null : <span className='sizer' ref='sizer'>{searchQuery}</span>
  }

  renderLabels = () => {
    debug('renderLabels()')
    const { multiple } = this.props
    const { value } = this.state
    if (!multiple || _.isEmpty(value)) {
      return
    }
    const selectedItems = _.map(value, this.getItemByValue)
    debug('selectedItems', selectedItems)

    // if no item could be found for a given state value the selected item will be undefined
    // compact the selectedItems so we only have actual objects left
    return _.map(_.compact(selectedItems), (item) => {
      return (
        <Label
          key={item.value}
          text={item.text}
          value={item.value}
          onRemove={this.handleLabelRemove}
          link
        />
      )
    })
  }

  renderOptions = () => {
    const { multiple, search } = this.props
    const { selectedIndex, value } = this.state
    const options = this.getMenuOptions()

    if (search && _.isEmpty(options)) {
      return <div className='message'>No results found.</div>
    }

    const isActive = multiple
      ? optValue => _.includes(value, optValue)
      : optValue => optValue === value

    return _.map(options, (opt, i) => (
      <DropdownItem
        key={`${opt.value}-${i}`}
        active={isActive(opt.value)}
        onClick={this.handleItemClick}
        selected={selectedIndex === i}
        text={opt.text}
        value={opt.value}
      />
    ))
  }

  renderMenu = () => {
    const { children } = this.props
    const { menuClasses } = this.state

    // single menu child
    if (children) return cloneElement(children, { className: menuClasses })

    return (
      <DropdownMenu className={menuClasses}>
        {this.renderOptions()}
      </DropdownMenu>
    )
  }

  render() {
    debug('render()')
    debug('props', this.props)
    debug('state', this.state)
    const { dropdownClasses } = this.state

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
    } = this.props

    // Classes
    const classes = cx(
      'ui',
      dropdownClasses,
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(error, 'error'),
      useKeyOnly(loading, 'loading'),

      useKeyOnly(button, 'button'),
      useKeyOnly(compact, 'compact'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(floating, 'floating'),
      useKeyOnly(inline, 'inline'),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/TechnologyAdvice/stardust/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
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

    const rest = getUnhandledProps(Dropdown, this.props)

    return (
      <div
        {...rest}
        {...conditionalProps}
        onChange={this.onChange}
        onClick={this.handleClick}
        className={classes}
      >
        {this.renderHiddenInput()}
        {this.renderLabels()}
        {this.renderSearchInput()}
        {this.renderSearchSizer()}
        {this.renderText()}
        {createIcon(icon)}
        {this.renderMenu()}
      </div>
    )
  }
}
