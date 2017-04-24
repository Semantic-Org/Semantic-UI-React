import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Children, cloneElement } from 'react'

import {
  AutoControlledComponent as Component,
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

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */
export default class Dropdown extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Label prefixed to an option added by a user. */
    additionLabel: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),

    /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
    additionPosition: PropTypes.oneOf(['top', 'bottom']),

    /**
     * Allow user additions to the list of options (boolean).
     * Requires the use of `selection`, `options` and `search`.
     */
    allowAdditions: customPropTypes.every([
      customPropTypes.demand(['options', 'selection', 'search']),
      PropTypes.bool,
    ]),

    /** A Dropdown can reduce its complexity. */
    basic: PropTypes.bool,

    /** Format the Dropdown to appear as a button. */
    button: PropTypes.bool,

    /** Primary content. */
    children: customPropTypes.every([
      customPropTypes.disallow(['options', 'selection']),
      customPropTypes.givenProps(
        { children: PropTypes.any.isRequired },
        PropTypes.element.isRequired,
      ),
    ]),

    /** Additional classes. */
    className: PropTypes.string,

    /** Whether or not the menu should close when the dropdown is blurred. */
    closeOnBlur: PropTypes.bool,

    /**
     * Whether or not the menu should close when a value is selected from the dropdown.
     * By default, multiple selection dropdowns will remain open on change, while single
     * selection dropdowns will close on change.
     */
    closeOnChange: PropTypes.bool,

    /** A compact dropdown has no minimum width. */
    compact: PropTypes.bool,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Currently selected label in multi-select. */
    defaultSelectedLabel: customPropTypes.every([
      customPropTypes.demand(['multiple']),
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    ]),

    /** Initial value or value array if multiple. */
    defaultValue: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
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

    /** A dropdown can be formatted as a Menu item. */
    item: PropTypes.bool,

    /** A dropdown can be labeled. */
    labeled: PropTypes.bool,

    /** A dropdown can show that it is currently loading data. */
    loading: PropTypes.bool,

    /** A selection dropdown can allow multiple selections. */
    multiple: PropTypes.bool,

    /** Name of the hidden input which holds the value. */
    name: PropTypes.string,

    /** Message to display when there are no results. */
    noResultsMessage: PropTypes.string,

    /**
     * Called when a user adds a new item. Use this to update the options list.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and the new item's value.
     */
    onAddItem: PropTypes.func,

    /**
     * Called on blur.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onBlur: PropTypes.func,

    /**
     * Called when the user attempts to change the value.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onChange: PropTypes.func,

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /**
     * Called when a close event happens.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClose: PropTypes.func,

    /**
     * Called on focus.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onFocus: PropTypes.func,

    /**
     * Called when a multi-select label is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All label props.
     */
    onLabelClick: PropTypes.func,

    /**
     * Called on mousedown.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onMouseDown: PropTypes.func,

    /**
     * Called when an open event happens.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onOpen: PropTypes.func,

    /**
     * Called on search input change.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {string} value - Current value of search input.
     */
    onSearchChange: PropTypes.func,

    /** Controls whether or not the dropdown menu is displayed. */
    open: PropTypes.bool,

    /** Whether or not the menu should open when the dropdown is focused. */
    openOnFocus: PropTypes.bool,

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
      PropTypes.oneOf(['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right']),
    ]),

    /**
     * Mapped over the active items and returns shorthand for the active item Labels.
     * Only applies to `multiple` Dropdowns.
     *
     * @param {object} item - A currently active dropdown item.
     * @param {number} index - The current index.
     * @param {object} defaultLabelProps - The default props for an active item Label.
     * @returns {*} Shorthand for a Label.
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

    /** Define whether the highlighted item should be selected on blur. */
    selectOnBlur: PropTypes.bool,

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

    /** A simple dropdown can open without Javascript. */
    simple: PropTypes.bool,

    /** A dropdown can receive focus. */
    tabIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

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

    /** A dropdown can open upward. */
    upward: PropTypes.bool,
  }

  static defaultProps = {
    additionLabel: 'Add ',
    additionPosition: 'top',
    icon: 'dropdown',
    noResultsMessage: 'No results found.',
    renderLabel: ({ text }) => text,
    selectOnBlur: true,
    openOnFocus: true,
    closeOnBlur: true,
  }

  static autoControlledProps = [
    'open',
    'value',
    'selectedLabel',
  ]

  static _meta = {
    name: 'Dropdown',
    type: META.TYPES.MODULE,
  }

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
        const { openOnFocus } = this.props
        debug('mouse is not down, opening')
        if (openOnFocus) this.open()
      }
      if (!this.state.open) {
        document.addEventListener('keydown', this.openOnArrow)
        document.addEventListener('keydown', this.openOnSpace)
      } else {
        document.addEventListener('keydown', this.moveSelectionOnKeyDown)
        document.addEventListener('keydown', this.selectItemOnEnter)
      }
      document.addEventListener('keydown', this.removeItemOnBackspace)
    } else if (prevState.focus && !this.state.focus) {
      debug('dropdown blurred')
      const { closeOnBlur } = this.props
      if (!this.isMouseDown && closeOnBlur) {
        debug('mouse is not down and closeOnBlur=true, closing')
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
      this.scrollSelectedItemIntoView()
    } else if (prevState.open && !this.state.open) {
      debug('dropdown closed')
      this.handleClose()
      document.removeEventListener('keydown', this.closeOnEscape)
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
      document.removeEventListener('keydown', this.selectItemOnEnter)
      document.removeEventListener('click', this.closeOnDocumentClick)
      if (!this.state.focus) {
        document.removeEventListener('keydown', this.removeItemOnBackspace)
      }
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
    const { onChange } = this.props
    if (onChange) onChange(e, { ...this.props, value })
  }

  closeOnChange = (e) => {
    const { closeOnChange, multiple } = this.props
    const shouldClose = _.isUndefined(closeOnChange)
      ? !multiple
      : closeOnChange

    if (shouldClose) this.close(e)
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

  makeSelectedItemActive = (e) => {
    const { open } = this.state
    const { multiple, onAddItem } = this.props
    const item = this.getSelectedItem()
    const value = _.get(item, 'value')

    // prevent selecting null if there was no selected item value
    // prevent selecting duplicate items when the dropdown is closed
    if (!value || !open) return

    // notify the onAddItem prop if this is a new value
    if (onAddItem && item['data-additional']) {
      onAddItem(e, { ...this.props, value })
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
    }
  }

  selectItemOnEnter = (e) => {
    debug('selectItemOnEnter()')
    debug(keyboardKey.getName(e))
    if (keyboardKey.getCode(e) !== keyboardKey.Enter) return
    e.preventDefault()

    this.makeSelectedItemActive(e)
    this.closeOnChange(e)
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
    if (this.ref && _.isFunction(this.ref.contains) && this.ref.contains(e.target)) return

    this.close()
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handleMouseDown = (e) => {
    debug('handleMouseDown()')
    const { onMouseDown } = this.props
    if (onMouseDown) onMouseDown(e, this.props)
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
    if (onClick) onClick(e, this.props)
    // prevent closeOnDocumentClick()
    e.stopPropagation()
    this.toggle(e)
  }

  handleItemClick = (e, item) => {
    debug('handleItemClick()')
    debug(item)
    const { multiple, onAddItem } = this.props
    const { value } = item

    // prevent toggle() in handleClick()
    e.stopPropagation()
    // prevent closeOnDocumentClick() if multiple or item is disabled
    if (multiple || item.disabled) {
      e.nativeEvent.stopImmediatePropagation()
    }

    if (item.disabled) return

    // notify the onAddItem prop if this is a new value
    if (onAddItem && item['data-additional']) {
      onAddItem(e, { ...this.props, value })
    }

    // notify the onChange prop that the user is trying to change value
    if (multiple) {
      const newValue = _.union(this.state.value, [value])
      this.setValue(newValue)
      this.handleChange(e, newValue)
    } else {
      this.setValue(value)
      this.handleChange(e, value)
    }
    this.closeOnChange(e)
  }

  handleFocus = (e) => {
    debug('handleFocus()')
    const { onFocus } = this.props
    const { focus } = this.state
    if (focus) return
    if (onFocus) onFocus(e, this.props)
    this.setState({ focus: true })
  }

  handleBlur = (e) => {
    debug('handleBlur()')
    const { closeOnBlur, multiple, onBlur, selectOnBlur } = this.props
    // do not "blur" when the mouse is down inside of the Dropdown
    if (this.isMouseDown) return
    if (onBlur) onBlur(e, this.props)
    if (selectOnBlur && !multiple) {
      this.makeSelectedItemActive(e)
      if (closeOnBlur) this.close()
    }
    this.setState({ focus: false, searchQuery: '' })
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
      selectedIndex: 0,
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
        'data-additional': true,
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

  getDropdownAriaOptions = (ElementType) => {
    const { loading, disabled, search, multiple } = this.props
    const { open } = this.state
    const ariaOptions = {
      role: search ? 'combobox' : 'listbox',
      'aria-busy': loading,
      'aria-disabled': disabled,
      'aria-expanded': !!open,
    }
    if (ariaOptions.role === 'listbox') {
      ariaOptions['aria-multiselectable'] = multiple
    }
    return ariaOptions
  }

  getDropdownMenuAriaOptions() {
    const { search, multiple } = this.props
    const ariaOptions = {}

    if (search) {
      ariaOptions['aria-multiselectable'] = multiple
      ariaOptions.role = 'listbox'
    }
    return ariaOptions
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

    const { multiple, search } = this.props
    if (multiple && search && this.searchRef) this.searchRef.focus()

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
  // Refs
  // ----------------------------------------

  handleSearchRef = c => (this.searchRef = c)

  handleSizerRef = c => (this.sizerRef = c)

  handleRef = c => (this.ref = c)

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  scrollSelectedItemIntoView = () => {
    debug('scrollSelectedItemIntoView()')
    if (!this.ref) return
    const menu = this.ref.querySelector('.menu.visible')
    if (!menu) return
    const item = menu.querySelector('.item.selected')
    if (!item) return
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
    if (search && this.searchRef) this.searchRef.focus()
    if (onOpen) onOpen(e, this.props)

    this.trySetState({ open: true })
    this.scrollSelectedItemIntoView()
  }

  close = (e) => {
    debug('close()')

    const { onClose } = this.props
    if (onClose) onClose(e, this.props)

    this.trySetState({ open: false })
  }

  handleClose = () => {
    debug('handleClose()')
    const hasSearchFocus = document.activeElement === this.searchRef
    const hasDropdownFocus = document.activeElement === this.ref
    const hasFocus = hasSearchFocus || hasDropdownFocus
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
    // Blur the Dropdown on close so it is blurred after selecting an item.
    // This is to prevent it from re-opening when switching tabs after selecting an item.
    if (!hasSearchFocus) {
      this.ref.blur()
    }

    // We need to keep the virtual model in sync with the browser focus change
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/692
    this.setState({ focus: hasFocus })
  }

  toggle = (e) => {
    if (!this.state.open) {
      this.open(e)
      return
    }

    const { search } = this.props
    const options = this.getMenuOptions()

    if (search && _.isEmpty(options)) {
      e.preventDefault()
      return
    }

    this.close(e)
  }

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
      <select type='hidden' aria-hidden='true' name={name} value={value} multiple={multiple}>
        <option value='' />
        {_.map(options, option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    )
  }

  renderSearchInput = () => {
    const { disabled, search, name, tabIndex } = this.props
    const { searchQuery } = this.state

    if (!search) return null

    // tabIndex
    let computedTabIndex
    if (!_.isNil(tabIndex)) computedTabIndex = tabIndex
    else computedTabIndex = disabled ? -1 : 0

    // resize the search input, temporarily show the sizer so we can measure it
    let searchWidth
    if (this.sizerRef && searchQuery) {
      this.sizerRef.style.display = 'inline'
      this.sizerRef.textContent = searchQuery
      searchWidth = Math.ceil(this.sizerRef.getBoundingClientRect().width)
      this.sizerRef.style.removeProperty('display')
    }

    return (
      <input
        value={searchQuery}
        type='text'
        aria-autocomplete='list'
        onChange={this.handleSearchChange}
        className='search'
        name={[name, 'search'].join('-')}
        autoComplete='off'
        tabIndex={computedTabIndex}
        style={{ width: searchWidth }}
        ref={this.handleSearchRef}
      />
    )
  }

  renderSearchSizer = () => {
    const { search, multiple } = this.props

    if (!(search && multiple)) return null
    return <span className='sizer' ref={this.handleSizerRef} />
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
      const defaultProps = {
        active: item.value === selectedLabel,
        as: 'a',
        key: item.value,
        onClick: this.handleLabelClick,
        onRemove: this.handleLabelRemove,
        value: item.value,
      }

      return Label.create(
        renderLabel(item, index, defaultProps),
        { defaultProps }
      )
    })
  }

  renderOptions = () => {
    const { multiple, search, noResultsMessage } = this.props
    const { selectedIndex, value } = this.state
    const options = this.getMenuOptions()

    if (noResultsMessage !== null && search && _.isEmpty(options)) {
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
    const ariaOptions = this.getDropdownMenuAriaOptions()

    // single menu child
    if (!_.isNil(children)) {
      const menuChild = Children.only(children)
      const className = cx(menuClasses, menuChild.props.className)

      return cloneElement(menuChild, { className, ...ariaOptions })
    }

    return (
      <DropdownMenu {...ariaOptions} className={menuClasses}>
        {DropdownHeader.create(header)}
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
      disabled,
      error,
      fluid,
      floating,
      icon,
      inline,
      item,
      labeled,
      loading,
      multiple,
      pointing,
      search,
      selection,
      scrolling,
      simple,
      tabIndex,
      trigger,
      upward,
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
      useKeyOnly(item, 'item'),
      useKeyOnly(multiple, 'multiple'),
      useKeyOnly(search, 'search'),
      useKeyOnly(selection, 'selection'),
      useKeyOnly(simple, 'simple'),
      useKeyOnly(scrolling, 'scrolling'),
      useKeyOnly(upward, 'upward'),

      useKeyOrValueAndKey(pointing, 'pointing'),
      className,
      'dropdown',
    )
    const rest = getUnhandledProps(Dropdown, this.props)
    const ElementType = getElementType(Dropdown, this.props)
    const ariaOptions = this.getDropdownAriaOptions(ElementType, this.props)

    let computedTabIndex
    if (!_.isNil(tabIndex)) {
      computedTabIndex = tabIndex
    } else if (!search) {
      // don't set a root node tabIndex as the search input has its own tabIndex
      computedTabIndex = disabled ? -1 : 0
    }

    return (
      <ElementType
        {...rest}
        {...ariaOptions}
        className={classes}
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        tabIndex={computedTabIndex}
        ref={this.handleRef}
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
