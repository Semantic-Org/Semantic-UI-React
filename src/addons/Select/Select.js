import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  createShorthand,
  customPropTypes,
  getUnhandledProps,
  keyboardKey,
  makeDebugger,
  META,
  objectDiff,
} from '../../lib'
import Label from '../../elements/Label'

import Dropdown from '../../modules/Dropdown'

const debug = makeDebugger('select')

const _meta = {
  name: 'Select',
  type: META.TYPES.ADDON,
  props: {
    additionPosition: ['top', 'bottom'],
  },
}

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 */
export default class Select extends Component {
  static propTypes = {
    /**
     * Allow user additions to the list of options (boolean).
     * Requires the use of `search`.
     */
    allowAdditions: customPropTypes.every([
      customPropTypes.demand(['search']),
      PropTypes.bool,
    ]),

    /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
    additionPosition: PropTypes.oneOf(_meta.props.additionPosition),

    /** Label prefixed to an option added by a user. */
    additionLabel: PropTypes.string,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Initial value or value array if multiple. */
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])),
    ]),

    /** Shorthand for Dropdown.Header. */
    header: customPropTypes.contentShorthand,

    /** Allow selecting multiple options. */
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

    /** Called with the React Synthetic Event on Dropdown click. */
    onClick: PropTypes.func,

    /** Called with the React Synthetic Event on Dropdown focus. */
    onFocus: PropTypes.func,

    /** Called with the React Synthetic Event on Dropdown mouse down. */
    onMouseDown: PropTypes.func,

    /** Called with the React Synthetic Event and current value on search input change. */
    onSearchChange: PropTypes.func,

    /** Controls whether or not the dropdown menu is displayed. */
    open: PropTypes.bool,

    /** Shorthand array of props for Dropdown.Item. */
    options: customPropTypes.collectionShorthand,

    /** Placeholder text. */
    placeholder: PropTypes.string,

    /** Make the dropdown options searchable by substring matching (default) or with a custom search function. */
    search: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.func,
    ]),

    /** Define whether the highlighted item should be selected on blur. */
    selectOnBlur: PropTypes.bool,

    /** Element to be rendered in-place where the dropdown is defined. */
    trigger: PropTypes.node,

    /** Current value or value array if multiple. Creates a controlled component. */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])),
    ]),
    // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?
  }

  static defaultProps = {
    additionLabel: 'Add:',
    noResultsMessage: 'No results found.',
    selectOnBlur: true,
  }

  static autoControlledProps = [
    'open',
    'value',
  ]

  static _meta = _meta

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
    if (super.componentWillReceiveProps) super.componentWillReceiveProps(nextProps)

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
  }

  componentDidMount() {
    if (super.componentWillMount) super.componentWillMount()

    this.attachDocumentListeners()
  }

  componentDidUpdate(prevProps, prevState) {
    if (super.componentDidUpdate) super.componentDidUpdate()

    if (!prevState.open && this.state.open) {
      debug('dropdown opened')
      this.handleOpen()
    }
  }

  componentWillUnmount() {
    if (super.componentWillUnmount) super.componentWillUnmount()

    this.detachDocumentListeners()
  }

  attachDocumentListeners = () => {
    document.addEventListener('keydown', this.moveSelectionOnKeyDown)
    document.addEventListener('keydown', this.removeItemOnBackspace)
    document.addEventListener('keydown', this.selectItemOnEnter)
  }

  detachDocumentListeners = () => {
    document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
    document.removeEventListener('keydown', this.removeItemOnBackspace)
    document.removeEventListener('keydown', this.selectItemOnEnter)
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  // onChange needs to receive a value
  // can't rely on props.value if we are controlled
  handleChange = (e, value) => {
    debug('handleChange()', value)

    const { name, onChange } = this.props
    if (onChange) onChange(e, { name, value })
  }

  moveSelectionOnKeyDown = (e) => {
    const code = keyboardKey.getCode(e)
    if (!_.includes([keyboardKey.ArrowDown, keyboardKey.ArrowUp], code)) return

    e.preventDefault()
    this.moveSelectionBy(code === keyboardKey.ArrowDown ? 1 : -1)
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
    if (keyboardKey.getCode(e) !== keyboardKey.Enter) return

    debug('selectItemOnEnter()')

    e.preventDefault()
    this.selectHighlightedItem(e)
  }

  removeItemOnBackspace = (e) => {
    if (keyboardKey.getCode(e) !== keyboardKey.Backspace) return

    const { multiple, search } = this.props
    const { searchQuery, value } = this.state

    if (searchQuery || !search || !multiple || _.isEmpty(value)) return

    debug('removeItemOnBackspace()')

    e.preventDefault()

    // remove most recent value
    const newValue = _.dropRight(value)

    this.setValue(newValue)
    this.handleChange(e, newValue)
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handleOpen = (e) => {
    debug('handleOpen()')

    if (this._search) this._search.focus()
  }

  handleItemClick = (e, value) => {
    debug('handleItemClick()', value)

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

  handleBlur = (e) => {
    debug('handleBlur()')
    const { multiple, onBlur, selectOnBlur } = this.props

    if (onBlur) onBlur(e)
    if (selectOnBlur && !multiple) this.selectHighlightedItem(e)
  }

  handleSearchChange = (e) => {
    debug('handleSearchChange()', e.target.value)

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
  getMenuOptions = (value = this.state.value) => {
    const { multiple, search, allowAdditions, additionPosition, additionLabel, options } = this.props
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
      const addItem = {
        text: additionLabel ? `${additionLabel} ${searchQuery}` : searchQuery,
        value: searchQuery,
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

  getMenuItemIndexByValue = (value) => {
    const options = this.getMenuOptions()

    return _.findIndex(options, ['value', value])
  }

  // ----------------------------------------
  // Setters
  // ----------------------------------------

  setValue = (value) => {
    debug('setValue()', value)

    const { multiple } = this.props
    const { selectedIndex } = this.state
    const options = this.getMenuOptions(value)
    const enabledIndicies = this.getEnabledIndices(options)
    const newState = {
      searchQuery: '',
    }

    // update the selected index
    if (!selectedIndex) {
      const firstIndex = enabledIndicies[0]

      // Select the currently active item, if none, use the first item.
      // Multiple selects remove active items from the list,
      // their initial selected index should be 0.
      newState.selectedIndex = multiple
        ? firstIndex
        : this.getMenuItemIndexByValue(value || _.get(options, `[${firstIndex}].value`))
    } else if (multiple) {
      // multiple selects remove options from the menu as they are made active
      // keep the selected index within range of the remaining items
      if (selectedIndex >= options.length - 1) {
        newState.selectedIndex = enabledIndicies[enabledIndicies.length - 1]
      }
    } else {
      const activeIndex = this.getMenuItemIndexByValue(value)

      // regular selects can only have one active item
      // set the selected index to the currently active item
      newState.selectedIndex = _.includes(enabledIndicies, activeIndex) ? activeIndex : undefined
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
    this.handleChange(e, newValue)
  }

  moveSelectionBy = (offset, startIndex = this.state.selectedIndex) => {
    debug('moveSelectionBy()', offset)

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

  // ----------------------------------------
  // Render
  // ----------------------------------------

  renderText = () => {
    const { multiple, placeholder, search, text } = this.props
    const { searchQuery, value, open } = this.state
    const hasValue = multiple ? !_.isEmpty(value) : !!value

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
    const { multiple, name, options } = this.props

    return (
      <select type='hidden' name={name} value={value} multiple={multiple}>
        {_.map(options, option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    )
  }

  renderSearchInput = () => {
    const { search, name } = this.props
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
        tabIndex='0'
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
          as={'a'}
          content={item.text}
          value={item.value}
          onRemove={this.handleLabelRemove}
        />
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
      <Dropdown.Item
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
    const { header } = this.props
    const { open } = this.state
    const menuClasses = open ? 'visible' : ''

    return (
      <Dropdown.Menu className={menuClasses}>
        {createShorthand(Dropdown.Header, val => ({ content: val }), header)}
        {this.renderOptions()}
      </Dropdown.Menu>
    )
  }

  render() {
    const { open } = this.state

    const { trigger, search } = this.props

    const dropdownPropNames = _.keys(Dropdown.propTypes)

    const rest = getUnhandledProps(Select, this.props)
    const dropdownProps = _.pick(this.props, dropdownPropNames)

    const triggerElement = [
      this.renderHiddenInput(),
      this.renderLabels(),
      this.renderSearchInput(),
      this.renderSearchSizer(),
      trigger || this.renderText(),
    ]

    return (
      <Dropdown
        {...rest}
        {...dropdownProps}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onClose={this.close}
        onOpen={this.open}
        open={open}
        selection
        tabIndex={search ? undefined : 0}
        trigger={triggerElement}
        ref={c => (this._dropdown = c)}
      >
        {this.renderMenu()}
      </Dropdown>
    )
  }
}
