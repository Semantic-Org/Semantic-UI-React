import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  htmlInputAttrs,
  isBrowser,
  keyboardKey,
  makeDebugger,
  META,
  objectDiff,
  partitionHTMLInputProps,
  SUI,
  useKeyOnly,
  useValueAndKey,
} from '../../lib'
import Input from '../../elements/Input'
import SearchCategory from './SearchCategory'
import SearchResult from './SearchResult'
import SearchResults from './SearchResults'

const debug = makeDebugger('search')

/**
 * A search module allows a user to query for results from a selection of data
 */
export default class Search extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    // ------------------------------------
    // Behavior
    // ------------------------------------

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Initial value. */
    defaultValue: PropTypes.string,

    /** Shorthand for Icon. */
    icon: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
    ]),

    /** Minimum characters to query for results */
    minCharacters: PropTypes.number,

    /** Additional text for "No Results" message with less emphasis. */
    noResultsDescription: PropTypes.node,

    /** Message to display when there are no results. */
    noResultsMessage: PropTypes.node,

    /** Controls whether or not the results menu is displayed. */
    open: PropTypes.bool,

    /**
     * One of:
     * - array of Search.Result props e.g. `{ title: '', description: '' }` or
     * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
     */
    results: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape(SearchResult.propTypes)),
      PropTypes.object,
    ]),

    /** Whether the search should automatically select the first result after searching. */
    selectFirstResult: PropTypes.bool,

    /** Whether a "no results" message should be shown if no results are found. */
    showNoResults: PropTypes.bool,

    /** Current value of the search input. Creates a controlled component. */
    value: PropTypes.string,

    // ------------------------------------
    // Rendering
    // ------------------------------------

    /**
     * Renders the SearchCategory contents.
     *
     * @param {object} props - The SearchCategory props object.
     * @returns {*} - Renderable SearchCategory contents.
     */
    categoryRenderer: PropTypes.func,

    /**
     * Renders the SearchResult contents.
     *
     * @param {object} props - The SearchResult props object.
     * @returns {*} - Renderable SearchResult contents.
     */
    resultRenderer: PropTypes.func,

    // ------------------------------------
    // Callbacks
    // ------------------------------------

    /**
     * Called on blur.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onBlur: PropTypes.func,

    /**
     * Called on focus.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onFocus: PropTypes.func,

    /**
     * Called on mousedown.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onMouseDown: PropTypes.func,

    /**
     * Called when a result is selected.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onResultSelect: PropTypes.func,

    /**
     * Called on search input change.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {string} value - Current value of search input.
     */
    onSearchChange: PropTypes.func,

    // ------------------------------------
    // Style
    // ------------------------------------

    /** A search can have its results aligned to its left or right container edge. */
    aligned: PropTypes.string,

    /** A search can display results from remote content ordered by categories. */
    category: PropTypes.bool,

    /** Additional classes. */
    className: PropTypes.string,

    /** A search can have its results take up the width of its container. */
    fluid: PropTypes.bool,

    /** A search input can take up the width of its container. */
    input: customPropTypes.itemShorthand,

    /** A search can show a loading indicator. */
    loading: PropTypes.bool,

    /** A search can have different sizes. */
    size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium')),
  }

  static defaultProps = {
    icon: 'search',
    input: 'text',
    minCharacters: 1,
    noResultsMessage: 'No results found.',
    showNoResults: true,
  }

  static autoControlledProps = [
    'open',
    'value',
  ]

  static _meta = {
    name: 'Search',
    type: META.TYPES.MODULE,
  }

  static Category = SearchCategory

  static Result = SearchResult

  static Results = SearchResults

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

    if (!_.isEqual(nextProps.value, this.props.value)) {
      debug('value changed, setting', nextProps.value)
      this.setValue(nextProps.value)
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
      debug('search focused')
      if (!this.isMouseDown) {
        debug('mouse is not down, opening')
        this.tryOpen()
      }
      if (this.state.open) {
        document.addEventListener('keydown', this.moveSelectionOnKeyDown)
        document.addEventListener('keydown', this.selectItemOnEnter)
      }
    } else if (prevState.focus && !this.state.focus) {
      debug('search blurred')
      if (!this.isMouseDown) {
        debug('mouse is not down, closing')
        this.close()
      }
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
      document.removeEventListener('keydown', this.selectItemOnEnter)
    }

    // opened / closed
    if (!prevState.open && this.state.open) {
      debug('search opened')
      this.open()
      document.addEventListener('keydown', this.closeOnEscape)
      document.addEventListener('keydown', this.moveSelectionOnKeyDown)
      document.addEventListener('keydown', this.selectItemOnEnter)
      document.addEventListener('click', this.closeOnDocumentClick)
    } else if (prevState.open && !this.state.open) {
      debug('search closed')
      this.close()
      document.removeEventListener('keydown', this.closeOnEscape)
      document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
      document.removeEventListener('keydown', this.selectItemOnEnter)
      document.removeEventListener('click', this.closeOnDocumentClick)
    }
  }

  componentWillUnmount() {
    debug('componentWillUnmount()')

    // Do not access document when server side rendering
    if (!isBrowser) return

    document.removeEventListener('keydown', this.moveSelectionOnKeyDown)
    document.removeEventListener('keydown', this.selectItemOnEnter)
    document.removeEventListener('keydown', this.closeOnEscape)
    document.removeEventListener('click', this.closeOnDocumentClick)
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  handleResultSelect = (e, result) => {
    debug('handleResultSelect()')
    debug(result)
    const { onResultSelect } = this.props
    if (onResultSelect) onResultSelect(e, result)
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

  selectItemOnEnter = (e) => {
    debug('selectItemOnEnter()')
    debug(keyboardKey.getName(e))
    if (keyboardKey.getCode(e) !== keyboardKey.Enter) return
    e.preventDefault()

    const result = this.getSelectedResult()

    // prevent selecting null if there was no selected item value
    if (!result) return

    // notify the onResultSelect prop that the user is trying to change value
    this.setValue(result.title)
    this.handleResultSelect(e, result)
    this.close()
  }

  closeOnDocumentClick = (e) => {
    debug('closeOnDocumentClick()')
    debug(e)
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

  handleInputClick = (e) => {
    debug('handleInputClick()', e)

    // prevent closeOnDocumentClick()
    e.nativeEvent.stopImmediatePropagation()

    this.tryOpen()
  }

  handleItemClick = (e, { id }) => {
    debug('handleItemClick()')
    debug(id)
    const result = this.getSelectedResult(id)

    // prevent closeOnDocumentClick()
    e.nativeEvent.stopImmediatePropagation()

    // notify the onResultSelect prop that the user is trying to change value
    this.setValue(result.title)
    this.handleResultSelect(e, result)
    this.close()
  }

  handleFocus = (e) => {
    debug('handleFocus()')
    const { onFocus } = this.props
    if (onFocus) onFocus(e, this.props)
    this.setState({ focus: true })
  }

  handleBlur = (e) => {
    debug('handleBlur()')
    const { onBlur } = this.props
    if (onBlur) onBlur(e, this.props)
    this.setState({ focus: false })
  }

  handleSearchChange = (e) => {
    debug('handleSearchChange()')
    debug(e.target.value)
    // prevent propagating to this.props.onChange()
    e.stopPropagation()
    const { onSearchChange, minCharacters } = this.props
    const { open } = this.state
    const newQuery = e.target.value

    if (onSearchChange) onSearchChange(e, newQuery)

    // open search dropdown on search query
    if (newQuery.length < minCharacters) {
      this.close()
    } else if (!open) {
      this.tryOpen(newQuery)
    }

    this.setValue(newQuery)
  }

  // ----------------------------------------
  // Getters
  // ----------------------------------------

  getFlattenedResults = () => {
    const { category, results } = this.props

    return !category ? results : _.reduce(results,
        (memo, categoryData) => memo.concat(categoryData.results),
        []
      )
  }

  getSelectedResult = (index = this.state.selectedIndex) => {
    const results = this.getFlattenedResults()
    return _.get(results, index)
  }

  // ----------------------------------------
  // Setters
  // ----------------------------------------

  setValue = (value) => {
    debug('setValue()')
    debug('value', value)

    const { selectFirstResult } = this.props

    this.trySetState(
      { value },
      { selectedIndex: selectFirstResult ? 0 : -1 }
    )
  }

  moveSelectionBy = (offset) => {
    debug('moveSelectionBy()')
    debug(`offset: ${offset}`)
    const { selectedIndex } = this.state

    const results = this.getFlattenedResults()
    const lastIndex = results.length - 1

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
    // Do not access document when server side rendering
    if (!isBrowser) return
    const menu = document.querySelector('.ui.search.active.visible .results.visible')
    const item = menu.querySelector('.result.active')
    if (!item) return
    debug(`menu (results): ${menu}`)
    debug(`item (result): ${item}`)
    const isOutOfUpperView = item.offsetTop < menu.scrollTop
    const isOutOfLowerView = (item.offsetTop + item.clientHeight) > menu.scrollTop + menu.clientHeight

    if (isOutOfUpperView) {
      menu.scrollTop = item.offsetTop
    } else if (isOutOfLowerView) {
      menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight
    }
  }

  // Open if the current value is greater than the minCharacters prop
  tryOpen = (currentValue = this.state.value) => {
    debug('open()')

    const { minCharacters } = this.props
    if (currentValue.length < minCharacters) return

    this.open()
  }

  open = () => {
    debug('open()')
    this.trySetState({ open: true })
  }

  close = () => {
    debug('close()')
    this.trySetState({ open: false })
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  renderSearchInput = rest => {
    const { icon, input } = this.props
    const { value } = this.state

    return Input.create(input, { defaultProps: {
      ...rest,
      icon,
      input: { className: 'prompt', tabIndex: '0', autoComplete: 'off' },
      onBlur: this.handleBlur,
      onChange: this.handleSearchChange,
      onClick: this.handleInputClick,
      onFocus: this.handleFocus,
      value,
    } })
  }

  renderNoResults = () => {
    const { noResultsDescription, noResultsMessage } = this.props

    return (
      <div className='message empty'>
        <div className='header'>{noResultsMessage}</div>
        {noResultsDescription && (
          <div className='description'>{noResultsDescription}</div>
        )}
      </div>
    )
  }

  /**
   * Offset is needed for determining the active item for results within a
   * category. Since the index is reset to 0 for each new category, an offset
   * must be passed in.
   */
  renderResult = ({ childKey, ...result }, index, _array, offset = 0) => {
    const { resultRenderer } = this.props
    const { selectedIndex } = this.state
    const offsetIndex = index + offset

    return (
      <SearchResult
        key={childKey || result.title}
        active={selectedIndex === offsetIndex}
        onClick={this.handleItemClick}
        renderer={resultRenderer}
        {...result}
        id={offsetIndex} // Used to lookup the result on item click
      />
    )
  }

  renderResults = () => {
    const { results } = this.props

    return _.map(results, this.renderResult)
  }

  renderCategories = () => {
    const { categoryRenderer, results: categories } = this.props
    const { selectedIndex } = this.state

    let count = 0

    return _.map(categories, ({ childKey, ...category }, name, index) => {
      const categoryProps = {
        key: childKey || category.name,
        active: _.inRange(selectedIndex, count, count + category.results.length),
        renderer: categoryRenderer,
        ...category,
      }
      const renderFn = _.partialRight(this.renderResult, count)

      count = count + category.results.length

      return (
        <SearchCategory {...categoryProps}>
          {category.results.map(renderFn)}
        </SearchCategory>
      )
    })
  }

  renderMenuContent = () => {
    const { category, showNoResults, results } = this.props

    if (_.isEmpty(results)) {
      return showNoResults ? this.renderNoResults() : null
    }

    return category ? this.renderCategories() : this.renderResults()
  }

  renderResultsMenu = () => {
    const { open } = this.state
    const resultsClasses = open ? 'visible' : ''
    const menuContent = this.renderMenuContent()

    if (!menuContent) return

    return <SearchResults className={resultsClasses}>{menuContent}</SearchResults>
  }

  render() {
    debug('render()')
    debug('props', this.props)
    debug('state', this.state)
    const { searchClasses, focus, open } = this.state

    const {
      aligned,
      category,
      className,
      fluid,
      loading,
      size,
    } = this.props

    // Classes
    const classes = cx(
      'ui',
      open && 'active visible',
      size,
      searchClasses,
      useKeyOnly(category, 'category'),
      useKeyOnly(focus, 'focus'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(loading, 'loading'),
      useValueAndKey(aligned, 'aligned'),
      'search',
      className,
    )
    const unhandled = getUnhandledProps(Search, this.props)
    const ElementType = getElementType(Search, this.props)
    const [htmlInputProps, rest] = partitionHTMLInputProps(unhandled, htmlInputAttrs)

    return (
      <ElementType
        {...rest}
        className={classes}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onMouseDown={this.handleMouseDown}
      >
        {this.renderSearchInput(htmlInputProps)}
        {this.renderResultsMenu()}
      </ElementType>
    )
  }
}
