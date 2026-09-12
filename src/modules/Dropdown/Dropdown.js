/* eslint-disable react/destructuring-assignment */
import cx from 'clsx'
import PropTypes from 'prop-types'
import React, { Children, cloneElement, createRef } from 'react'
import {
  ModernAutoControlledComponent as Component,
  childrenUtils,
  customPropTypes,
  doesNodeContainClick,
  getComponentType,
  makeDebugger,
  objectDiff,
  setRef,
  getKeyOnly,
  getKeyOrValueAndKey,
} from './lib'
import DropdownDivider from './DropdownDivider'
import DropdownItem from './DropdownItem'
import DropdownHeader from './DropdownHeader'
import DropdownMenu from './DropdownMenu'
import DropdownSearchInput from './DropdownSearchInput'
import DropdownText from './DropdownText'
import getMenuOptionsFromConfig from './utils/getMenuOptions'
import getSelectedIndex from './utils/getSelectedIndex'

const debug = makeDebugger('dropdown')

/**
 * @param {object} objA
 * @param {object} objB
 * @returns {boolean}
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true
  }
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }
  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)
  if (keysA.length !== keysB.length) {
    return false
  }
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i]
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      objA[key] !== objB[key]
    ) {
      return false
    }
  }
  return true
}

const isNil = (val) => {
  return val === undefined || val === null
}
const getKeyOrValue = (key, value) => {
  return isNil(key) ? value : key
}
const areOptionKeyValuesEqual = (nextOptions, prevOptions) => {
  if (nextOptions === prevOptions) return true
  if (!nextOptions || !prevOptions) return nextOptions === prevOptions
  if (nextOptions.length !== prevOptions.length) return false

  for (let i = 0; i < nextOptions.length; i++) {
    if (
      nextOptions[i]?.key !== prevOptions[i]?.key ||
      nextOptions[i]?.value !== prevOptions[i]?.value
    ) {
      return false
    }
  }
  return true
}

const MENU_OPTIONS_CONFIG_KEYS = [
  'additionLabel',
  'additionPosition',
  'allowAdditions',
  'deburr',
  'multiple',
  'options',
  'search',
  'searchQuery',
  'value',
]

const areMenuOptionsConfigsEqual = (nextConfig, prevConfig) => {
  if (!nextConfig || !prevConfig) return false
  return MENU_OPTIONS_CONFIG_KEYS.every((key) => {
    return nextConfig[key] === prevConfig[key]
  })
}

function renderItemContent(item) {
  const { flag, image, text } = item
  if (typeof text === 'function') {
    return text
  }
  return {
    content: (
      <>
        {flag && <i className={`${flag} flag`} />}
        {image && (
          <img
            alt={text || ''}
            {...(typeof image === 'object' ? image : { src: image })}
            className="ui mini avatar image"
          />
        )}
        {text}
      </>
    ),
  }
}

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */
const Dropdown = React.forwardRef((props, ref) => {
  const {
    additionLabel = 'Add ',
    additionPosition = 'top',
    closeOnBlur = true,
    closeOnEscape = true,
    deburr = false,
    icon = 'dropdown',
    minCharacters = 1,
    noResultsMessage = 'No results found.',
    openOnFocus = true,
    renderLabel = renderItemContent,
    searchInput = 'text',
    selectOnBlur = true,
    selectOnNavigation = true,
    wrapSelection = true,
    ...rest
  } = props

  return (
    <DropdownInner
      additionLabel={additionLabel}
      additionPosition={additionPosition}
      closeOnBlur={closeOnBlur}
      closeOnEscape={closeOnEscape}
      deburr={deburr}
      icon={icon}
      minCharacters={minCharacters}
      noResultsMessage={noResultsMessage}
      openOnFocus={openOnFocus}
      renderLabel={renderLabel}
      searchInput={searchInput}
      selectOnBlur={selectOnBlur}
      selectOnNavigation={selectOnNavigation}
      wrapSelection={wrapSelection}
      {...rest}
      innerRef={ref}
    />
  )
})

/*
const toPascalCase = (str) => {
  return str
    .split('-')
    .map((word) => { return word.charAt(0).toUpperCase() + word.slice(1); })
    .join('');
};
*/

class DropdownInner extends Component {
  searchRef = createRef()

  sizerRef = createRef()

  ref = createRef()

  static getAutoControlledStateFromProps(nextProps, computedState, prevState) {
    const derivedState = {
      internalOptions: nextProps.options,
      internalValue: computedState.value,
    }

    const shouldComputeSelectedIndex =
      !shallowEqual(prevState.internalValue, computedState.value) ||
      !areOptionKeyValuesEqual(nextProps.options, prevState.internalOptions)

    if (shouldComputeSelectedIndex) {
      derivedState.selectedIndex = getSelectedIndex({
        additionLabel: nextProps.additionLabel,
        additionPosition: nextProps.additionPosition,
        allowAdditions: nextProps.allowAdditions,
        deburr: nextProps.deburr,
        multiple: nextProps.multiple,
        search: nextProps.search,
        selectedIndex: computedState.selectedIndex,
        value: computedState.value,
        options: nextProps.options,
        searchQuery: computedState.searchQuery,
      })
    }

    return derivedState
  }

  componentDidMount() {
    debug('componentDidMount()')
    const { open, focus } = this.state

    if (open) {
      this.open(null, false)
      document.addEventListener('keydown', this.closeOnEscape)
      document.addEventListener('click', this.closeOnDocumentClick)
    }

    if (focus) {
      document.addEventListener('keydown', this.removeItemOnBackspace)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !shallowEqual(nextProps, this.props) ||
      !shallowEqual(nextState, this.state)
    )
  }

  componentDidUpdate(prevProps, prevState) {
    debug('componentDidUpdate()')
    debug('to state:', objectDiff(prevState, this.state))

    const { closeOnBlur, minCharacters, openOnFocus, search } = this.props

    // Development validation
    if (process.env.NODE_ENV !== 'production') {
      const isNextValueArray = Array.isArray(this.props.value)
      const hasValue = 'value' in this.props

      if (hasValue && this.props.multiple && !isNextValueArray) {
        console.error(
          'Dropdown `value` must be an array when `multiple` is set. ' +
            `Received type: \`${Object.prototype.toString.call(this.props.value)}\`.`
        )
      } else if (hasValue && !this.props.multiple && isNextValueArray) {
        console.error(
          'Dropdown `value` must not be an array when `multiple` is not set. ' +
            'Either set `multiple={true}` or use a string or number value.'
        )
      }
    }

    // Event listener management
    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        document.addEventListener('keydown', this.closeOnEscape)
        document.addEventListener('click', this.closeOnDocumentClick)
      } else {
        document.removeEventListener('keydown', this.closeOnEscape)
        document.removeEventListener('click', this.closeOnDocumentClick)
      }
    }

    if (prevState.focus !== this.state.focus) {
      if (this.state.focus) {
        document.addEventListener('keydown', this.removeItemOnBackspace)
      } else {
        document.removeEventListener('keydown', this.removeItemOnBackspace)
      }
    }

    // focused / blurred
    if (!prevState.focus && this.state.focus) {
      debug('dropdown focused')
      if (!this.isMouseDown) {
        const openable =
          !search || (search && minCharacters === 1 && !this.state.open)
        debug('mouse is not down, opening')
        if (openOnFocus && openable) this.open()
      }
    } else if (prevState.focus && !this.state.focus) {
      debug('dropdown blurred')
      if (!this.isMouseDown && closeOnBlur) {
        debug('mouse is not down and closeOnBlur=true, closing')
        this.close()
      }
    }

    // opened / closed
    if (!prevState.open && this.state.open) {
      debug('dropdown opened')
      this.setOpenDirection()
      this.scrollSelectedItemIntoView()
    } else if (prevState.open && !this.state.open) {
      debug('dropdown closed')
    }

    if (prevState.selectedIndex !== this.state.selectedIndex) {
      this.scrollSelectedItemIntoView()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEscape)
    document.removeEventListener('click', this.closeOnDocumentClick)
    document.removeEventListener('keydown', this.removeItemOnBackspace)
    document.removeEventListener('mouseup', this.handleDocumentMouseUp)
  }

  handleRef = (el) => {
    this.ref.current = el
    setRef(this.props.innerRef, el)
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  getInitialAutoControlledState() {
    return { focus: false, searchQuery: '' }
  }

  getMenuOptionsConfig = (overrides = {}) => {
    return {
      value: this.state.value,
      options: this.props.options,
      searchQuery: this.state.searchQuery,
      additionLabel: this.props.additionLabel,
      additionPosition: this.props.additionPosition,
      allowAdditions: this.props.allowAdditions,
      deburr: this.props.deburr,
      multiple: this.props.multiple,
      search: this.props.search,
      ...overrides,
    }
  }

  getMenuOptions = (overrides) => {
    const config = this.getMenuOptionsConfig(overrides)
    if (
      this.menuOptionsCache &&
      areMenuOptionsConfigsEqual(config, this.menuOptionsCache.config)
    ) {
      return this.menuOptionsCache.options
    }

    const options = getMenuOptionsFromConfig(config)
    this.menuOptionsCache = { config, options }
    return options
  }

  // ----------------------------------------
  // Getters
  // ----------------------------------------

  getSelectedItem = (selectedIndex) => {
    const options = this.getMenuOptions()
    return options?.[selectedIndex]
  }

  getItemByValue = (value) => {
    const { options } = this.props
    return options.find((opt) => {
      return opt.value === value
    })
  }

  getDropdownAriaOptions = () => {
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
  // Event Handlers
  // ----------------------------------------

  handleChange = (e, value) => {
    debug('handleChange()', value)
    this.props.onChange?.(e, { ...this.props, value })
  }

  closeOnChange = (e) => {
    const { closeOnChange, multiple } = this.props
    const shouldClose = closeOnChange === undefined ? !multiple : closeOnChange

    if (shouldClose) {
      this.close(e, () => {})
    }
  }

  closeOnEscape = (e) => {
    if (!this.props.closeOnEscape) return
    if (e.key !== 'Escape') return
    e.preventDefault()

    debug('closeOnEscape()')
    this.close(e)
  }

  moveSelectionOnKeyDown = (e) => {
    debug('moveSelectionOnKeyDown()', e.key)

    const { multiple, selectOnNavigation } = this.props
    const { open } = this.state
    if (!open) return

    const moves = { ArrowDown: 1, ArrowUp: -1 }
    const move = moves[e.key]
    if (move === undefined) return

    e.preventDefault()
    const nextIndex = this.getSelectedIndexAfterMove(move)

    if (!multiple && selectOnNavigation) {
      this.makeSelectedItemActive(e, nextIndex)
    }

    this.setState({ selectedIndex: nextIndex })
  }

  openOnSpace = (e) => {
    debug('openOnSpace()')

    const shouldHandleEvent =
      this.state.focus && !this.state.open && e.key === ' '
    const { target } = e
    const shouldPreventDefault =
      target?.tagName !== 'INPUT' &&
      target?.tagName !== 'TEXTAREA' &&
      target?.isContentEditable !== true

    if (shouldHandleEvent) {
      if (shouldPreventDefault) e.preventDefault()
      this.open(e)
    }
  }

  openOnArrow = (e) => {
    debug('openOnArrow()')
    const { focus, open } = this.state
    if (focus && !open) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        this.open(e)
      }
    }
  }

  makeSelectedItemActive = (e, selectedIndex) => {
    const { open, value } = this.state
    const { multiple } = this.props

    const item = this.getSelectedItem(selectedIndex)
    const selectedValue = item?.value
    const disabled = item?.disabled

    if (isNil(selectedValue) || !open || disabled) return value

    const newValue = multiple
      ? [...new Set([...(value || []), selectedValue])]
      : selectedValue
    const valueHasChanged = multiple
      ? newValue.filter((val) => {
          return !(value || []).includes(val)
        }).length > 0
      : newValue !== value

    if (valueHasChanged) {
      this.setState({ value: newValue })
      this.handleChange(e, newValue)

      if (item['data-additional']) {
        this.props.onAddItem?.(e, { ...this.props, value: selectedValue })
      }
    }

    return value
  }

  selectItemOnEnter = (e) => {
    debug('selectItemOnEnter()', e.key)
    const { search } = this.props
    const { open, selectedIndex } = this.state
    if (!open) return

    const shouldSelect = e.key === 'Enter' || (!search && e.key === ' ')
    if (!shouldSelect) return

    e.preventDefault()

    const optionSize = this.getMenuOptions().length

    if (search && optionSize === 0) return

    const nextValue = this.makeSelectedItemActive(e, selectedIndex)
    this.setState({
      selectedIndex: getSelectedIndex({
        ...this.props,
        selectedIndex,
        value: nextValue,
        searchQuery: '',
      }),
    })

    this.closeOnChange(e)
    this.clearSearchQuery()

    if (search) {
      this.searchRef.current?.focus()
    }
  }

  removeItemOnBackspace = (e) => {
    debug('removeItemOnBackspace()', e.key)
    const { multiple, search } = this.props
    const { searchQuery, value } = this.state

    if (e.key !== 'Backspace') return
    if (searchQuery || !search || !multiple || !value || value.length === 0)
      return
    e.preventDefault()

    const newValue = value.slice(0, -1)
    this.setState({ value: newValue })
    this.handleChange(e, newValue)
  }

  closeOnDocumentClick = (e) => {
    debug('closeOnDocumentClick()', e)
    if (!this.props.closeOnBlur) return
    if (this.ref.current && doesNodeContainClick(this.ref.current, e)) return
    this.close()
  }

  handleMouseDown = (e) => {
    debug('handleMouseDown()')
    this.isMouseDown = true
    this.props.onMouseDown?.(e, this.props)
    document.addEventListener('mouseup', this.handleDocumentMouseUp)
  }

  handleDocumentMouseUp = () => {
    debug('handleDocumentMouseUp()')
    this.isMouseDown = false
    document.removeEventListener('mouseup', this.handleDocumentMouseUp)
  }

  handleClick = (e) => {
    debug('handleClick()', e)
    const { minCharacters, search } = this.props
    const { open, searchQuery } = this.state

    this.props.onClick?.(e, this.props)
    e.stopPropagation()

    if (!search) return this.toggle(e)
    if (open) {
      this.searchRef.current?.focus()
      return
    }
    if (searchQuery.length >= minCharacters || minCharacters === 1) {
      this.open(e)
      return
    }
    this.searchRef.current?.focus()
  }

  handleIconClick = (e) => {
    const { clearable } = this.props
    const hasValue = this.hasValue()
    debug('handleIconClick()', { e, clearable, hasValue })
    this.props.onClick?.(e, this.props)
    e.stopPropagation()

    if (clearable && hasValue) {
      this.clearValue(e)
    } else {
      this.toggle(e)
    }
  }

  handleItemClick = (e, item) => {
    debug('handleItemClick()', item)
    const { multiple, search } = this.props
    const { value: currentValue } = this.state
    const { value } = item

    e.stopPropagation()
    if (multiple || item.disabled) {
      e.nativeEvent.stopImmediatePropagation()
    }
    if (item.disabled) return

    const isAdditionItem = item['data-additional']
    const newValue = multiple
      ? [...new Set([...(this.state.value || []), value])]
      : value
    const valueHasChanged = multiple
      ? newValue.filter((val) => {
          return !(currentValue || []).includes(val)
        }).length > 0
      : newValue !== currentValue

    if (valueHasChanged) {
      this.setState({ value: newValue })
      this.handleChange(e, newValue)
    }

    this.clearSearchQuery()

    if (search) {
      this.searchRef.current?.focus()
    } else {
      this.ref.current?.focus()
    }

    this.closeOnChange(e)

    if (isAdditionItem) {
      this.props.onAddItem?.(e, { ...this.props, value })
    }
  }

  handleFocus = (e) => {
    debug('handleFocus()')
    if (this.state.focus) return
    this.props.onFocus?.(e, this.props)
    this.setState({ focus: true })
  }

  handleBlur = (e) => {
    debug('handleBlur()')
    const { currentTarget } = e
    if (currentTarget && currentTarget.contains(document.activeElement)) return

    const { closeOnBlur, multiple, selectOnBlur } = this.props
    if (this.isMouseDown) return

    this.props.onBlur?.(e, this.props)

    if (selectOnBlur && !multiple) {
      this.makeSelectedItemActive(e, this.state.selectedIndex)
      if (closeOnBlur) this.close()
    }

    this.setState({ focus: false })
    this.clearSearchQuery()
  }

  handleSearchChange = (e, { value }) => {
    debug('handleSearchChange()', value)
    e.stopPropagation()

    const { minCharacters } = this.props
    const { open } = this.state
    const newQuery = value

    this.props.onSearchChange?.(e, { ...this.props, searchQuery: newQuery })
    this.setState({ searchQuery: newQuery, selectedIndex: 0 })

    if (!open && newQuery.length >= minCharacters) {
      this.open()
      return
    }
    if (open && minCharacters !== 1 && newQuery.length < minCharacters) {
      this.close()
    }
  }

  handleKeyDown = (e) => {
    this.moveSelectionOnKeyDown(e)
    this.openOnArrow(e)
    this.openOnSpace(e)
    this.selectItemOnEnter(e)

    this.props.onKeyDown?.(e)
  }

  // ----------------------------------------
  // Setters
  // ----------------------------------------

  clearSearchQuery = () => {
    debug('clearSearchQuery()')
    const { searchQuery } = this.state
    if (searchQuery === undefined || searchQuery === '') return
    this.setState({ searchQuery: '' })
  }

  handleLabelClick = (e, labelProps) => {
    debug('handleLabelClick()')
    e.stopPropagation()
    this.setState({ selectedLabel: labelProps.value })
    this.props.onLabelClick?.(e, labelProps)
  }

  handleLabelRemove = (e, labelProps) => {
    debug('handleLabelRemove()')
    e.stopPropagation()
    const { value } = this.state
    const newValue = (value || []).filter((val) => {
      return val !== labelProps.value
    })
    debug('label props:', labelProps)
    debug('current value:', value)
    debug('remove value:', labelProps.value)
    debug('new value:', newValue)

    this.setState({ value: newValue })
    this.handleChange(e, newValue)
  }

  getSelectedIndexAfterMove = (
    offset,
    startIndex = this.state.selectedIndex
  ) => {
    debug('moveSelectionBy()', `offset: ${offset}`)

    const options = this.getMenuOptions()
    if (
      options === undefined ||
      options.every((option) => {
        return option.disabled
      })
    )
      return

    const lastIndex = options.length - 1
    const { wrapSelection } = this.props
    let nextIndex = startIndex + offset

    if (!wrapSelection && (nextIndex > lastIndex || nextIndex < 0)) {
      nextIndex = startIndex
    } else if (nextIndex > lastIndex) {
      nextIndex = 0
    } else if (nextIndex < 0) {
      nextIndex = lastIndex
    }

    if (options[nextIndex]?.disabled) {
      return this.getSelectedIndexAfterMove(offset, nextIndex)
    }

    return nextIndex
  }

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  clearValue = (e) => {
    const { multiple } = this.props
    const newValue = multiple ? [] : ''
    this.setState({ value: newValue })
    this.handleChange(e, newValue)
  }

  computeSearchInputTabIndex = () => {
    const { disabled, tabIndex } = this.props
    if (!isNil(tabIndex)) return tabIndex
    return disabled ? -1 : 0
  }

  computeSearchInputWidth = () => {
    const { searchQuery } = this.state
    if (this.sizerRef.current && searchQuery) {
      this.sizerRef.current.style.display = 'inline'
      this.sizerRef.current.textContent = searchQuery
      const searchWidth = Math.ceil(
        this.sizerRef.current.getBoundingClientRect().width
      )
      this.sizerRef.current.style.removeProperty('display')
      return searchWidth
    }
    return null
  }

  computeTabIndex = () => {
    const { disabled, search, tabIndex } = this.props
    if (search) return undefined
    if (disabled) return -1
    return isNil(tabIndex) ? 0 : tabIndex
  }

  handleSearchInputOverrides = (predefinedProps) => {
    return {
      onChange: (e, inputProps) => {
        predefinedProps.onChange?.(e, inputProps)
        this.handleSearchChange(e, inputProps)
      },
      ref: this.searchRef,
    }
  }

  hasValue = () => {
    const { multiple } = this.props
    const { value } = this.state
    return multiple
      ? !!value && value.length > 0
      : !isNil(value) && value !== ''
  }

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  scrollSelectedItemIntoView = () => {
    debug('scrollSelectedItemIntoView()')
    if (!this.ref.current) return
    const menu = this.ref.current.querySelector('.menu.visible')
    if (!menu) return
    const item = menu.querySelector('.item.selected')
    if (!item) return

    const isOutOfUpperView = item.offsetTop < menu.scrollTop
    const isOutOfLowerView =
      item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight

    if (isOutOfUpperView) {
      menu.scrollTop = item.offsetTop
    } else if (isOutOfLowerView) {
      menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight
    }
  }

  setOpenDirection = () => {
    if (!this.ref.current) return

    const menu = this.ref.current.querySelector('.menu.visible')
    if (!menu) return

    const dropdownRect = this.ref.current.getBoundingClientRect()
    const menuHeight = menu.clientHeight
    const spaceAtTheBottom =
      document.documentElement.clientHeight -
      dropdownRect.top -
      dropdownRect.height -
      menuHeight
    const spaceAtTheTop = dropdownRect.top - menuHeight
    const upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom

    if (!upward !== !this.state.upward) {
      this.setState({ upward })
    }
  }

  open = (e = null, triggerSetState = true) => {
    const { disabled, search } = this.props
    debug('open()', { disabled, search, open: this.state.open })

    if (disabled) return
    if (search) this.searchRef.current?.focus()

    this.props.onOpen?.(e, this.props)

    if (triggerSetState) {
      this.setState({ open: true })
    }
    this.scrollSelectedItemIntoView()
  }

  close = (e, callback = this.handleClose) => {
    debug('close()', { open: this.state.open })
    if (this.state.open) {
      this.props.onClose?.(e, this.props)
      this.setState({ open: false }, callback)
    }
  }

  handleClose = () => {
    debug('handleClose()')
    const hasSearchFocus = document.activeElement === this.searchRef.current
    if (!hasSearchFocus && this.ref.current) {
      this.ref.current.blur()
    }

    const hasDropdownFocus = document.activeElement === this.ref.current
    const hasFocus = hasSearchFocus || hasDropdownFocus
    this.setState({ focus: hasFocus })
  }

  toggle = (e) => {
    return this.state.open ? this.close(e) : this.open(e)
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  renderText = () => {
    const { multiple, placeholder, search, text } = this.props
    const { searchQuery, selectedIndex, value, open } = this.state
    const hasValue = this.hasValue()

    const classes = cx(
      placeholder && !hasValue && 'default',
      'text',
      search && searchQuery && 'filtered'
    )
    let displayText = placeholder
    let selectedItem

    if (text) {
      displayText = text
    } else if (open && !multiple) {
      selectedItem = this.getSelectedItem(selectedIndex)
    } else if (hasValue) {
      selectedItem = this.getItemByValue(value)
    }

    return DropdownText.create(
      selectedItem ? renderItemContent(selectedItem) : displayText,
      {
        defaultProps: {
          className: classes,
        },
      }
    )
  }

  renderSearchInput = () => {
    const { search, searchInput } = this.props
    const { searchQuery } = this.state

    return (
      search &&
      DropdownSearchInput.create(searchInput, {
        defaultProps: {
          style: { width: this.computeSearchInputWidth() },
          tabIndex: this.computeSearchInputTabIndex(),
          value: searchQuery,
        },
        overrideProps: this.handleSearchInputOverrides,
      })
    )
  }

  renderSearchSizer = () => {
    const { search, multiple } = this.props
    return search && multiple && <span className="sizer" ref={this.sizerRef} />
  }

  renderLabels = () => {
    debug('renderLabels()')
    const { multiple, renderLabel } = this.props
    const { selectedLabel, value } = this.state
    if (!multiple || !value || value.length === 0) {
      return null
    }
    const selectedItems = value.map(this.getItemByValue).filter(Boolean)
    debug('selectedItems', selectedItems)

    return selectedItems.map((item, index) => {
      const defaultProps = {
        active: item.value === selectedLabel,
        as: 'a',
        key: getKeyOrValue(item.key, item.value),
        onClick: this.handleLabelClick,
        onRemove: this.handleLabelRemove,
        value: item.value,
      }

      const labelShorthand = renderLabel(item, index, defaultProps)

      let labelContent
      let labelProps = {}

      if (
        typeof labelShorthand === 'object' &&
        labelShorthand !== null &&
        !React.isValidElement(labelShorthand)
      ) {
        labelContent = labelShorthand.content
        labelProps = { ...labelShorthand }
        delete labelProps.content
      } else {
        labelContent = labelShorthand
      }

      const finalProps = { ...defaultProps, ...labelProps }

      return (
        <a
          key={finalProps.key}
          className={cx('ui label', finalProps.active && 'active')}
          onClick={(e) => {
            e.stopPropagation()
            this.handleLabelClick(e, finalProps)
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              e.stopPropagation()
              this.handleLabelClick(e, finalProps)
            }
            if (e.key === 'Delete' || e.key === 'Backspace') {
              e.preventDefault()
              e.stopPropagation()
              this.handleLabelRemove(e, finalProps)
            }
          }}
        >
          {labelContent}
          <i
            aria-hidden="true"
            className="delete icon"
            onClick={(e) => {
              e.stopPropagation()
              this.handleLabelRemove(e, finalProps)
            }}
          />
        </a>
      )
    })
  }

  renderOptions = () => {
    const { lazyLoad, multiple, search, noResultsMessage } = this.props
    const { open, selectedIndex, value } = this.state

    if (lazyLoad && !open) return null

    const options = this.getMenuOptions()

    if (
      noResultsMessage !== null &&
      search &&
      (!options || options.length === 0)
    ) {
      return <div className="message">{noResultsMessage}</div>
    }

    const isActive = multiple
      ? (optValue) => {
          return (value || []).includes(optValue)
        }
      : (optValue) => {
          return optValue === value
        }

    return options?.map((opt, i) => {
      return DropdownItem.create(
        {
          active: isActive(opt.value),
          selected: selectedIndex === i,
          ...opt,
          key: getKeyOrValue(opt.key, opt.value),
          style: { ...opt.style, pointerEvents: 'all' },
        },
        {
          generateKey: false,
          overrideProps: (predefinedProps) => {
            return {
              onClick: (e, item) => {
                predefinedProps.onClick?.(e, item)
                this.handleItemClick(e, item)
              },
            }
          },
        }
      )
    })
  }

  renderMenu = () => {
    const { children, direction, header } = this.props
    const { open } = this.state
    const ariaOptions = this.getDropdownMenuAriaOptions()

    if (!childrenUtils.isNil(children)) {
      const menuChild = Children.only(children)
      const className = cx(
        direction,
        getKeyOnly(open, 'visible'),
        menuChild.props.className
      )
      return cloneElement(menuChild, { className, ...ariaOptions })
    }

    return (
      <DropdownMenu {...ariaOptions} direction={direction} open={open}>
        {DropdownHeader.create(header, { autoGenerateKey: false })}
        {this.renderOptions()}
      </DropdownMenu>
    )
  }

  renderSemanticIcon = () => {
    const { clearable, icon } = this.props
    if (clearable && this.hasValue()) {
      return (
        <i
          className="close icon clear"
          tabIndex={0}
          role="button"
          onClick={(e) => {
            e.stopPropagation()
            this.handleIconClick(e)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              this.handleIconClick(e)
            }
          }}
        />
      )
    }

    if (React.isValidElement(icon)) {
      return cloneElement(icon, {
        className: cx('icon', icon.props.className),
        onClick: this.handleIconClick,
      })
    }

    if (typeof icon === 'string' && icon !== 'dropdown') {
      return (
        <i
          className={`${icon} icon dropdown`}
          tabIndex={0}
          role="button"
          onClick={this.handleIconClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              this.handleIconClick(e)
            }
          }}
        />
      )
    }

    return (
      <i
        className="dropdown icon dropdown"
        tabIndex={0}
        role="button"
        onClick={this.handleIconClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            this.handleIconClick(e)
          }
        }}
      />
    )
  }

  render() {
    debug('render()', this.props, this.state)

    /* eslint-disable no-unused-vars */
    const {
      additionLabel,
      additionPosition,
      allowAdditions,
      as,
      basic,
      button,
      children,
      className,
      clearable,
      closeOnBlur,
      closeOnEscape,
      closeOnChange,
      compact,
      deburr,
      defaultOpen,
      defaultSearchQuery,
      defaultSelectedLabel,
      defaultUpward,
      defaultValue,
      direction,
      disabled,
      error,
      floating,
      fluid,
      header,
      icon,
      inline,
      innerRef,
      item,
      labeled,
      lazyLoad,
      loading,
      minCharacters,
      multiple,
      noResultsMessage,
      onAddItem,
      onBlur,
      onChange,
      onClick,
      onClose,
      onFocus,
      onKeyDown,
      onLabelClick,
      onMouseDown,
      onOpen,
      onSearchChange,
      open: openProp,
      openOnFocus,
      options,
      placeholder,
      pointing,
      renderLabel,
      scrolling,
      search,
      searchInput,
      searchQuery,
      selectOnBlur,
      selectOnNavigation,
      selectedLabel,
      selection,
      simple,
      tabIndex,
      text,
      trigger,
      upward: upwardProp,
      value,
      wrapSelection,
      ...rest
    } = this.props
    /* eslint-enable no-unused-vars */
    const { open, upward } = this.state

    const classes = cx(
      'ui',
      getKeyOnly(open, 'active visible'),
      getKeyOnly(disabled, 'disabled'),
      getKeyOnly(error, 'error'),
      getKeyOnly(loading, 'loading'),
      getKeyOnly(basic, 'basic'),
      getKeyOnly(button, 'button'),
      getKeyOnly(compact, 'compact'),
      getKeyOnly(fluid, 'fluid'),
      getKeyOnly(floating, 'floating'),
      getKeyOnly(inline, 'inline'),
      getKeyOnly(labeled, 'labeled'),
      getKeyOnly(item, 'item'),
      getKeyOnly(multiple, 'multiple'),
      getKeyOnly(search, 'search'),
      getKeyOnly(selection, 'selection'),
      getKeyOnly(simple, 'simple'),
      getKeyOnly(scrolling, 'scrolling'),
      getKeyOnly(upward, 'upward'),
      getKeyOrValueAndKey(pointing, 'pointing'),
      'dropdown',
      className
    )
    const ElementType = getComponentType(this.props)
    const ariaOptions = this.getDropdownAriaOptions()

    return (
      <ElementType
        {...rest}
        {...ariaOptions}
        className={classes}
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        onMouseDown={this.handleMouseDown}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        tabIndex={this.computeTabIndex()}
        ref={this.handleRef}
      >
        {this.renderLabels()}
        {this.renderSearchInput()}
        {this.renderSearchSizer()}
        {trigger || this.renderText()}
        {this.renderSemanticIcon()}
        {this.renderMenu()}
      </ElementType>
    )
  }
}

Dropdown.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Label prefixed to an option added by a user. */
  additionLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

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
      PropTypes.element.isRequired
    ),
  ]),

  /** Additional classes. */
  className: PropTypes.string,

  /** Using the clearable setting will let users remove their selection from a dropdown. */
  clearable: PropTypes.bool,

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: PropTypes.bool,

  /** Whether or not the dropdown should close when the escape key is pressed. */
  closeOnEscape: PropTypes.bool,

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: PropTypes.bool,

  /** A compact dropdown has no minimum width. */
  compact: PropTypes.bool,

  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: PropTypes.bool,

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** Initial value of searchQuery. */
  defaultSearchQuery: PropTypes.string,

  /** Currently selected label in multi-select. */
  defaultSelectedLabel: customPropTypes.every([
    customPropTypes.demand(['multiple']),
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ]),

  /** Initial value of upward. */
  defaultUpward: PropTypes.bool,

  /** Initial value or value array if multiple. */
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    ),
  ]),

  /** A dropdown menu can open to the left or to the right. */
  direction: PropTypes.oneOf(['left', 'right']),

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
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: PropTypes.bool,

  /** A dropdown can be formatted as a Menu item. */
  item: PropTypes.bool,

  /** A dropdown can be labeled. */
  labeled: PropTypes.bool,

  /** A dropdown can defer rendering its options until it is open. */
  lazyLoad: PropTypes.bool,

  /** A dropdown can show that it is currently loading data. */
  loading: PropTypes.bool,

  /** The minimum characters for a search to begin showing results. */
  minCharacters: PropTypes.number,

  /** A selection dropdown can allow multiple selections. */
  multiple: PropTypes.bool,

  /** Message to display when there are no results. */
  noResultsMessage: PropTypes.node,

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
   * @param {object} data - All props, includes current value of searchQuery.
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
    PropTypes.oneOf([
      'left',
      'right',
      'top',
      'top left',
      'top right',
      'bottom',
      'bottom left',
      'bottom right',
    ]),
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
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

  /** A shorthand for a search input. */
  searchInput: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
    PropTypes.object,
  ]),

  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: PropTypes.string,

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: PropTypes.bool,

  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: PropTypes.bool,

  /** Currently selected label in multi-select. */
  selectedLabel: customPropTypes.every([
    customPropTypes.demand(['multiple']),
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The text displayed in the dropdown, usually for the active item. */
  text: PropTypes.string,

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: customPropTypes.every([
    customPropTypes.disallow(['selection', 'text']),
    PropTypes.node,
  ]),

  /** Current value or value array if multiple. Creates a controlled component. */
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number])
    ),
  ]),

  /** Controls whether the dropdown will open upward. */
  upward: PropTypes.bool,

  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection: PropTypes.bool,
}

Dropdown.displayName = 'Dropdown'

DropdownInner.autoControlledProps = [
  'open',
  'searchQuery',
  'selectedLabel',
  'value',
  'upward',
]

if (process.env.NODE_ENV !== 'production') {
  DropdownInner.propTypes = Dropdown.propTypes
}

Dropdown.Divider = DropdownDivider
Dropdown.Header = DropdownHeader
Dropdown.Item = DropdownItem
Dropdown.Menu = DropdownMenu
Dropdown.SearchInput = DropdownSearchInput
Dropdown.Text = DropdownText

export default Dropdown
