import _ from 'lodash'
import cx from 'classnames'
import React, { Children, cloneElement, PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  isBrowser,
  keyboardKey,
  makeDebugger,
  META,
  objectDiff,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import Icon from '../../elements/Icon'
import Label from '../../elements/Label'

import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'
import DropdownHeader from './DropdownHeader'
import DropdownMenu from './DropdownMenu'

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
    /**
     * Allow user additions to the list of options (boolean).
     * Requires the use of `selection`, `options` and `search`.
     */
    allowAdditions: customPropTypes.every([
      customPropTypes.demand(['options', 'selection', 'search']),
      PropTypes.bool,
    ]),

    /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
    additionPosition: PropTypes.oneOf(_meta.props.additionPosition),

    /** Label prefixed to an option added by a user. */
    additionLabel: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),

    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** A Dropdown can reduce its complexity */
    basic: PropTypes.bool,

    /** Format the Dropdown to appear as a button. */
    button: PropTypes.bool,

    /** Primary content. */
    children: customPropTypes.every([
      customPropTypes.disallow(['options', 'selection']),
      customPropTypes.givenProps(
        { children: PropTypes.any.isRequired },
        React.PropTypes.element.isRequired,
      ),
    ]),

    /** Additional classes. */
    className: PropTypes.string,

    /** A compact dropdown has no minimum width. */
    compact: PropTypes.bool,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Currently selected label in multi-select. */
    defaultSelectedLabel: customPropTypes.every([
      customPropTypes.demand(['multiple']),
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
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

    /** A disabled dropdown menu or item does not allow user interaction. */
    disabled: PropTypes.bool,

    /** An errored dropdown can alert a user to a problem. */
    error: PropTypes.bool,

    /** A dropdown menu can contain floated content. */
    floating: PropTypes.bool,

    /** A dropdown can take the full width of its parent */
    fluid: PropTypes.bool,

    /** A dropdown menu can contain a header. */
    header: PropTypes.node,

    /** Shorthand for Icon. */
    icon: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
    ]),

    /** A dropdown can be formatted to appear inline in other content. */
    inline: PropTypes.bool,

    /** A dropdown can be labeled. */
    labeled: PropTypes.bool,

    // linkItem: PropTypes.bool,

    /** A dropdown can show that it is currently loading data. */
    loading: PropTypes.bool,

    /** A selection dropdown can allow multiple selections. */
    multiple: PropTypes.bool,

    /** Name of the hidden input which holds the value. */
    name: PropTypes.string,

    /** Message to display when there are no results. */
    noResultsMessage: PropTypes.string,

    /** Called with the name and new value added by the user. Use this to update the options list. */
    onAddItem: PropTypes.func,

    /** Called with the React Synthetic Event on Dropdown blur. */
    onBlur: PropTypes.func,

    /** Called with the React Synthetic Event and { name, value } on change. */
    onChange: PropTypes.func,

    /** Called when a close event happens. */
    onClose: PropTypes.func,

    /** Called when a multi-select label is clicked. */
    onLabelClick: PropTypes.func,

    /** Called when an open event happens. */
    onOpen: PropTypes.func,

    /** Called with the React Synthetic Event and current value on search input change. */
    onSearchChange: PropTypes.func,

    /** Called with the React Synthetic Event on Dropdown click. */
    onClick: PropTypes.func,

    /** Called with the React Synthetic Event on Dropdown focus. */
    onFocus: PropTypes.func,

    /** Called with the React Synthetic Event on Dropdown mouse down. */
    onMouseDown: PropTypes.func,

    /** Controls whether or not the dropdown menu is displayed. */
    open: PropTypes.bool,

    /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
    options: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.arrayOf(PropTypes.shape(DropdownItem.propTypes)),
    ]),

    /** Placeholder text. */
    placeholder: PropTypes.string,

    /** A dropdown can be formatted so that its menu is pointing. */
    pointing: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.pointing),
    ]),

    /**
     * A function that takes (data, index, defaultLabelProps) and returns
     * shorthand for Label .
     */
    renderLabel: PropTypes.func,

    /** A dropdown can have its menu scroll. */
    scrolling: PropTypes.bool,

    /**
     * A selection dropdown can allow a user to search through a large list of choices.
     * Pass a function here to replace the default search.
     */
    search: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
    ]),

    // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

    /** Currently selected label in multi-select. */
    selectedLabel: customPropTypes.every([
      customPropTypes.demand(['multiple']),
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    ]),

    /** A dropdown can be used to select between choices in a form. */
    selection: customPropTypes.every([
      customPropTypes.disallow(['children']),
      customPropTypes.demand(['options']),
      PropTypes.bool,
    ]),

    /** Define whether the highlighted item should be selected on blur. */
    selectOnBlur: PropTypes.bool,

    /** A simple dropdown can open without Javascript. */
    simple: PropTypes.bool,

    /** A dropdown can receive focus. */
    tabIndex: PropTypes.string,

    /** The text displayed in the dropdown, usually for the active item. */
    text: PropTypes.string,

    /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
    trigger: customPropTypes.every([
      customPropTypes.disallow(['selection', 'text']),
      PropTypes.node,
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
  }

  static defaultProps = {
    additionLabel: 'Add ',
    additionPosition: 'top',
    icon: 'dropdown',
    noResultsMessage: 'No results found.',
    renderLabel: ({ text }) => text,
    selectOnBlur: true,
    tabIndex: '0',
  }

  static autoControlledProps = [
    'open',
    'value',
    'selectedLabel',
  ]

  static _meta = _meta
  static Divider = DropdownDivider
  static Header = DropdownHeader
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
    debug('to props:', objectDiff(this.props, nextProps))

    /* eslint-disable no-console */
    if (process.env.NODE_ENV !== 'production') {
      // in development, validate value type matches dropdown type
      const isNextValueArray = Array.isArray(nextProps.value)
      const hasValue = _.has(nextProps, 'value')

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
    }
    /* eslint-enable no-console */

    if (!_.isEqual(nextProps.value, this.props.value)) {
      debug('value changed, setting', nextProps.value)
      this.setValue(nextProps.value)
    }

    if (!_.isEqual(nextProps.options, this.props.options)) {
      this.setSelectedIndex(undefined, nextProps.options)
    }
  }

  componentDidUpdate(prevProps, prevState) { // eslint-disable-line complexity
    debug('componentDidUpdate()')
    // TODO objectDiff still runs in prod, stop it
    debug('to state:', objectDiff(prevState, this.state))

    // Do not access document when server side rendering
    if (!isBrowser) return

    // focused / blurred
    if (!prevState.focus && this.state.focus) {
      debug('dropdown focused')
      if (!this.isMouseDown) {
        debug('mouse is not down, opening')
        this.open()
      }
      if (!this.state.open) {
        document.addEventListener('keydown', this.openOnArrow)
        document.addEventListener('keydown', this.openOnSpace)
      } else {
        document.addEventListener('keydown', this.moveSelectionOnKeyDown)
        document.addEventListener('keydown', this.selectItemOnEnter)
        document.addEventListener('keydown', this.removeItemOnBackspace)
      }
    } else if (prevState.focus && !this.state.focus) {
      debug('dropdown blurred')
      if (!this.isMouseDown) {
        debug('mouse is not down, closing')
        this.close()
      }
      document.removeEventListener('keydown', this.openOnArrow)
      document.removeEventListener('keydown', this.openOnSpace)
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
      document.removeEventListener('keydown', this.selectItemOnEnter)
      document.removeEventListener('keydown', this.removeItemOnBackspace)
    }

    // opened / closed
    if (!prevState.open && this.state.open) {
      debug('dropdown opened')
      document.addEventListener('keydown', this.closeOnEscape)
      document.addEventListener('keydown', this.moveSelectionOnKeyDown)
      document.addEventListener('keydown', this.selectItemOnEnter)
      document.addEventListener('keydown', this.removeItemOnBackspace)
      document.addEventListener('click', this.closeOnDocumentClick)
      document.removeEventListener('keydown', this.openOnArrow)
      document.removeEventListener('keydown', this.openOnSpace)
    } else if (prevState.open && !this.state.open) {
      debug('dropdown closed')
      this.handleClose()
      document.removeEventListener('keydown', this.closeOnEscape)
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
      document.removeEventListener('keydown', this.selectItemOnEnter)
      document.removeEventListener('keydown', this.removeItemOnBackspace)
      document.removeEventListener('click', this.closeOnDocumentClick)
    }
  }

  componentWillUnmount() {
    debug('componentWillUnmount()')

    // Do not access document when server side rendering
    if (!isBrowser) return

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
  handleChange = (e, value) => {
    debug('handleChange()')
    debug(value)
    const { name, onChange } = this.props
    if (onChange) onChange(e, { name, value })
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
    debug('openOnSpace()')

    if (keyboardKey.getCode(e) !== keyboardKey.Spacebar) return
    if (this.state.open) return

    e.preventDefault()

    this.open(e)
  }

  openOnArrow = (e) => {
    debug('openOnArrow()')

    const code = keyboardKey.getCode(e)
    if (!_.includes([keyboardKey.ArrowDown, keyboardKey.ArrowUp], code)) return
    if (this.state.open) return

    e.preventDefault()

    this.open(e)
  }

  selectHighlightedItem = (e) => {
    const { open } = this.state
    const { multiple, name, onAddItem, options } = this.props
    const value = _.get(this.getSelectedItem(), 'value')

    // prevent selecting null if there was no selected item value
    // prevent selecting duplicate items when the dropdown is closed
    if (!value || !open) return

    // notify the onAddItem prop if this is a new value
    if (onAddItem && !_.some(options, { text: value })) {
      onAddItem(e, { name, value })
    }

    // notify the onChange prop that the user is trying to change value
    if (multiple) {
      // state value may be undefined
      const newValue = _.union(this.state.value, [value])
      this.setValue(newValue)
      this.handleChange(e, newValue)
    } else {
      this.setValue(value)
      this.handleChange(e, value)
      this.close()
    }
  }

  selectItemOnEnter = (e) => {
    debug('selectItemOnEnter()')
    debug(keyboardKey.getName(e))
    if (keyboardKey.getCode(e) !== keyboardKey.Enter) return
    e.preventDefault()

    this.selectHighlightedItem(e)
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
    this.handleChange(e, newValue)
  }

  closeOnDocumentClick = (e) => {
    debug('closeOnDocumentClick()')
    debug(e)

    // If event happened in the dropdown, ignore it
    if (this._dropdown && _.isFunction(this._dropdown.contains) && this._dropdown.contains(e.target)) return

    this.close()
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handleMouseDown = (e) => {
    debug('handleMouseDown()')
    const { onMouseDown } = this.props
    if (onMouseDown) onMouseDown(e)
    this.isMouseDown = true
    // Do not access document when server side rendering
    if (!isBrowser) return
    document.addEventListener('mouseup', this.handleDocumentMouseUp)
  }

  handleDocumentMouseUp = () => {
    debug('handleDocumentMouseUp()')
    this.isMouseDown = false
    // Do not access document when server side rendering
    if (!isBrowser) return
    document.removeEventListener('mouseup', this.handleDocumentMouseUp)
  }

  handleClick = (e) => {
    debug('handleClick()', e)
    const { onClick } = this.props
    if (onClick) onClick(e)
    // prevent closeOnDocumentClick()
    e.stopPropagation()
    this.toggle(e)
  }

  handleItemClick = (e, { value }) => {
    debug('handleItemClick()')
    debug(value)
    const { multiple, name, onAddItem, options } = this.props
    const item = this.getItemByValue(value) || {}

    // prevent toggle() in handleClick()
    e.stopPropagation()
    // prevent closeOnDocumentClick() if multiple or item is disabled
    if (multiple || item.disabled) {
      e.nativeEvent.stopImmediatePropagation()
    }

    if (item.disabled) return

    // notify the onAddItem prop if this is a new value
    if (onAddItem && !_.some(options, { text: value })) {
      onAddItem(e, { name, value })
    }

    // notify the onChange prop that the user is trying to change value
    if (multiple) {
      const newValue = _.union(this.state.value, [value])
      this.setValue(newValue)
      this.handleChange(e, newValue)
    } else {
      this.setValue(value)
      this.handleChange(e, value)
      this.close()
    }
  }

  handleFocus = (e) => {
    debug('handleFocus()')
    const { onFocus } = this.props
    if (onFocus) onFocus(e)
    this.setState({ focus: true })
  }

  handleBlur = (e) => {
    debug('handleBlur()')
    const { multiple, onBlur, selectOnBlur } = this.props
    // do not "blur" when the mouse is down inside of the Dropdown
    if (this.isMouseDown) return
    if (onBlur) onBlur(e)
    if (selectOnBlur && !multiple) this.selectHighlightedItem(e)
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

    this.setState({
      selectedIndex: this.getEnabledIndices()[0],
      searchQuery: newQuery,
    })
  }

  // ----------------------------------------
  // Getters
  // ----------------------------------------

  // There are times when we need to calculate the options based on a value
  // that hasn't yet been persisted to state.
  getMenuOptions = (value = this.state.value, options = this.props.options) => {
    const { multiple, search, allowAdditions, additionPosition, additionLabel } = this.props
    const { searchQuery } = this.state

    let filteredOptions = options

    // filter out active options
    if (multiple) {
      filteredOptions = _.filter(filteredOptions, opt => !_.includes(value, opt.value))
    }

    // filter by search query
    if (search && searchQuery) {
      if (_.isFunction(search)) {
        filteredOptions = search(filteredOptions, searchQuery)
      } else {
        const re = new RegExp(_.escapeRegExp(searchQuery), 'i')
        filteredOptions = _.filter(filteredOptions, (opt) => re.test(opt.text))
      }
    }

    // insert the "add" item
    if (allowAdditions && search && searchQuery && !_.some(filteredOptions, { text: searchQuery })) {
      const additionLabelElement = React.isValidElement(additionLabel)
        ? React.cloneElement(additionLabel, { key: 'label' })
        : additionLabel || ''

      const addItem = {
        // by using an array, we can pass multiple elements, but when doing so
        // we must specify a `key` for React to know which one is which
        text: [
          additionLabelElement,
          <b key='addition'>{searchQuery}</b>,
        ],
        value: searchQuery,
        className: 'addition',
      }
      if (additionPosition === 'top') filteredOptions.unshift(addItem)
      else filteredOptions.push(addItem)
    }

    return filteredOptions
  }

  getSelectedItem = () => {
    const { selectedIndex } = this.state
    const options = this.getMenuOptions()

    return _.get(options, `[${selectedIndex}]`)
  }

  getEnabledIndices = (givenOptions) => {
    const options = givenOptions || this.getMenuOptions()

    return _.reduce(options, (memo, item, index) => {
      if (!item.disabled) memo.push(index)
      return memo
    }, [])
  }

  getItemByValue = (value) => {
    const { options } = this.props

    return _.find(options, { value })
  }

  getMenuItemIndexByValue = (value, givenOptions) => {
    const options = givenOptions || this.getMenuOptions()

    return _.findIndex(options, ['value', value])
  }

  // ----------------------------------------
  // Setters
  // ----------------------------------------

  setValue = (value) => {
    debug('setValue()')
    debug('value', value)
    const newState = {
      searchQuery: '',
    }

    this.trySetState({ value }, newState)
    this.setSelectedIndex(value)
  }

  setSelectedIndex = (value = this.state.value, optionsProps = this.props.options) => {
    const { multiple } = this.props
    const { selectedIndex } = this.state
    const options = this.getMenuOptions(value, optionsProps)
    const enabledIndicies = this.getEnabledIndices(options)

    let newSelectedIndex

    // update the selected index
    if (!selectedIndex || selectedIndex < 0) {
      const firstIndex = enabledIndicies[0]

      // Select the currently active item, if none, use the first item.
      // Multiple selects remove active items from the list,
      // their initial selected index should be 0.
      newSelectedIndex = multiple
        ? firstIndex
        : this.getMenuItemIndexByValue(value, options) || enabledIndicies[0]
    } else if (multiple) {
      // multiple selects remove options from the menu as they are made active
      // keep the selected index within range of the remaining items
      if (selectedIndex >= options.length - 1) {
        newSelectedIndex = enabledIndicies[enabledIndicies.length - 1]
      }
    } else {
      const activeIndex = this.getMenuItemIndexByValue(value, options)

      // regular selects can only have one active item
      // set the selected index to the currently active item
      newSelectedIndex = _.includes(enabledIndicies, activeIndex) ? activeIndex : undefined
    }

    if (!newSelectedIndex || newSelectedIndex < 0) {
      newSelectedIndex = enabledIndicies[0]
    }

    this.setState({ selectedIndex: newSelectedIndex })
  }

  handleLabelClick = (e, labelProps) => {
    debug('handleLabelClick()')
    // prevent focusing search input on click
    e.stopPropagation()

    this.setState({ selectedLabel: labelProps.value })

    const { onLabelClick } = this.props
    if (onLabelClick) onLabelClick(e, labelProps)
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
    this.handleChange(e, newValue)
  }

  moveSelectionBy = (offset, startIndex = this.state.selectedIndex) => {
    debug('moveSelectionBy()')
    debug(`offset: ${offset}`)

    const options = this.getMenuOptions()
    const lastIndex = options.length - 1

    // Prevent infinite loop
    if (_.every(options, 'disabled')) return

    // next is after last, wrap to beginning
    // next is before first, wrap to end
    let nextIndex = startIndex + offset
    if (nextIndex > lastIndex) nextIndex = 0
    else if (nextIndex < 0) nextIndex = lastIndex

    if (options[nextIndex].disabled) return this.moveSelectionBy(offset, nextIndex)

    this.setState({ selectedIndex: nextIndex })
    this.scrollSelectedItemIntoView()
  }

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  scrollSelectedItemIntoView = () => {
    debug('scrollSelectedItemIntoView()')
    // Do not access document when server side rendering
    if (!isBrowser) return
    const menu = document.querySelector('.ui.dropdown.active.visible .menu.visible')
    const item = menu.querySelector('.item.selected')
    debug(`menu: ${menu}`)
    debug(`item: ${item}`)
    const isOutOfUpperView = item.offsetTop < menu.scrollTop
    const isOutOfLowerView = (item.offsetTop + item.clientHeight) > menu.scrollTop + menu.clientHeight

    if (isOutOfUpperView) {
      menu.scrollTop = item.offsetTop
    } else if (isOutOfLowerView) {
      menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight
    }
  }

  open = (e) => {
    debug('open()')

    const { disabled, onOpen, search } = this.props
    if (disabled) return
    if (search) this._search.focus()
    if (onOpen) onOpen(e, this.props)

    this.trySetState({ open: true })
  }

  close = (e) => {
    debug('close()')

    const { onClose } = this.props
    if (onClose) onClose(e, this.props)

    this.trySetState({ open: false })
  }

  handleClose = () => {
    debug('handleClose()')
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
    // Blur the Dropdown on close so it is blurred after selecting an item.
    // This is to prevent it from re-opening when switching tabs after selecting an item.
    this._dropdown.blur()

    // We need to keep the virtual model in sync with the browser focus change
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/692
    this.setState({ focus: false })
  }

  toggle = (e) => this.state.open ? this.close(e) : this.open(e)

  // ----------------------------------------
  // Render
  // ----------------------------------------

  renderText = () => {
    const { multiple, placeholder, search, text } = this.props
    const { searchQuery, value, open } = this.state
    const hasValue = multiple
      ? !_.isEmpty(value)
      : !_.isNil(value) && value !== ''

    const classes = cx(
      placeholder && !hasValue && 'default',
      'text',
      search && searchQuery && 'filtered'
    )
    let _text = placeholder
    if (searchQuery) {
      _text = null
    } else if (text) {
      _text = text
    } else if (open && !multiple) {
      _text = _.get(this.getSelectedItem(), 'text')
    } else if (hasValue) {
      _text = _.get(this.getItemByValue(value), 'text')
    }

    return <div className={classes}>{_text}</div>
  }

  renderHiddenInput = () => {
    debug('renderHiddenInput()')
    const { value } = this.state
    const { multiple, name, options, selection } = this.props
    debug(`name:      ${name}`)
    debug(`selection: ${selection}`)
    debug(`value:     ${value}`)
    if (!selection) return null

    // a dropdown without an active item will have an empty string value
    return (
      <select type='hidden' name={name} value={value} multiple={multiple}>
        <option key='empty' value=''></option>
        {_.map(options, option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    )
  }

  renderSearchInput = () => {
    const { search, name, tabIndex } = this.props
    const { searchQuery } = this.state

    if (!search) return null

    // resize the search input, temporarily show the sizer so we can measure it
    let searchWidth
    if (this._sizer && searchQuery) {
      this._sizer.style.display = 'inline'
      this._sizer.textContent = searchQuery
      searchWidth = Math.ceil(this._sizer.getBoundingClientRect().width)
      this._sizer.style.removeProperty('display')
    }

    return (
      <input
        value={searchQuery}
        onChange={this.handleSearchChange}
        className='search'
        name={[name, 'search'].join('-')}
        autoComplete='off'
        tabIndex={tabIndex}
        style={{ width: searchWidth }}
        ref={c => (this._search = c)}
      />
    )
  }

  renderSearchSizer = () => {
    const { search, multiple } = this.props

    if (!(search && multiple)) return null

    return <span className='sizer' ref={c => (this._sizer = c)} />
  }

  renderLabels = () => {
    debug('renderLabels()')
    const { multiple, renderLabel } = this.props
    const { selectedLabel, value } = this.state
    if (!multiple || _.isEmpty(value)) {
      return
    }
    const selectedItems = _.map(value, this.getItemByValue)
    debug('selectedItems', selectedItems)

    // if no item could be found for a given state value the selected item will be undefined
    // compact the selectedItems so we only have actual objects left
    return _.map(_.compact(selectedItems), (item, index) => {
      const defaultLabelProps = {
        active: item.value === selectedLabel,
        as: 'a',
        key: item.value,
        onClick: this.handleLabelClick,
        onRemove: this.handleLabelRemove,
        value: item.value,
      }

      return Label.create(
        renderLabel(item, index, defaultLabelProps),
        defaultLabelProps,
      )
    })
  }

  renderOptions = () => {
    const { multiple, search, noResultsMessage } = this.props
    const { selectedIndex, value } = this.state
    const options = this.getMenuOptions()

    if (search && _.isEmpty(options)) {
      return <div className='message'>{noResultsMessage}</div>
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
        {...opt}
        // Needed for handling click events on disabled items
        style={{ ...opt.style, pointerEvents: 'all' }}
      />
    ))
  }

  renderMenu = () => {
    const { children, header } = this.props
    const { open } = this.state
    const menuClasses = open ? 'visible' : ''

    // single menu child
    if (children) {
      const menuChild = Children.only(children)
      const className = cx(menuClasses, menuChild.props.className)

      return cloneElement(menuChild, { className })
    }

    return (
      <DropdownMenu className={menuClasses}>
        {createShorthand(DropdownHeader, val => ({ content: val }), header)}
        {this.renderOptions()}
      </DropdownMenu>
    )
  }

  render() {
    debug('render()')
    debug('props', this.props)
    debug('state', this.state)
    const { open } = this.state

    const {
      basic,
      button,
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
      tabIndex,
      trigger,
    } = this.props

    // Classes
    const classes = cx(
      'ui',
      useKeyOnly(open, 'active visible'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(error, 'error'),
      useKeyOnly(loading, 'loading'),

      useKeyOnly(basic, 'basic'),
      useKeyOnly(button, 'button'),
      useKeyOnly(compact, 'compact'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(floating, 'floating'),
      useKeyOnly(inline, 'inline'),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      useKeyOnly(labeled, 'labeled'),
      // TODO: linkItem is required only when Menu child, add dynamically
      // useKeyOnly(linkItem, 'link item'),
      useKeyOnly(multiple, 'multiple'),
      useKeyOnly(search, 'search'),
      useKeyOnly(selection, 'selection'),
      useKeyOnly(simple, 'simple'),
      useKeyOnly(scrolling, 'scrolling'),

      useKeyOrValueAndKey(pointing, 'pointing'),
      className,
      'dropdown',
    )
    const rest = getUnhandledProps(Dropdown, this.props)
    const ElementType = getElementType(Dropdown, this.props)

    return (
      <ElementType
        {...rest}
        className={classes}
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        tabIndex={(disabled || search) ? undefined : tabIndex}
        ref={c => (this._dropdown = c)}
      >
        {this.renderHiddenInput()}
        {this.renderLabels()}
        {this.renderSearchInput()}
        {this.renderSearchSizer()}
        {trigger || this.renderText()}
        {Icon.create(icon)}
        {this.renderMenu()}
      </ElementType>
    )
  }
}
