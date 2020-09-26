import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import _without from "lodash/without";
import _isEmpty from "lodash/isEmpty";
import _partialRight from "lodash/partialRight";
import _inRange from "lodash/inRange";
import _map from "lodash/map";
import _get from "lodash/get";
import _reduce from "lodash/reduce";
import _invoke from "lodash/invoke";
import _isPlainObject from "lodash/isPlainObject";
import _isUndefined from "lodash/isUndefined";
import cx from 'clsx';
import keyboardKey from 'keyboard-key';
import PropTypes from 'prop-types';
import React from 'react';
import shallowEqual from 'shallowequal';
import { ModernAutoControlledComponent as Component, customPropTypes, eventStack, getElementType, getUnhandledProps, htmlInputAttrs, isBrowser, objectDiff, partitionHTMLProps, SUI, useKeyOnly, useValueAndKey } from '../../lib';
import Input from '../../elements/Input';
import SearchCategory from './SearchCategory';
import SearchResult from './SearchResult';
import SearchResults from './SearchResults';

var overrideSearchInputProps = function overrideSearchInputProps(predefinedProps) {
  var input = predefinedProps.input;

  if (_isUndefined(input)) {
    return _extends({}, predefinedProps, {
      input: {
        className: 'prompt'
      }
    });
  }

  if (_isPlainObject(input)) {
    return _extends({}, predefinedProps, {
      input: _extends({}, input, {
        className: cx(input.className, 'prompt')
      })
    });
  }

  return predefinedProps;
};
/**
 * A search module allows a user to query for results from a selection of data
 */


var Search = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Search, _Component);

  function Search() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleResultSelect = function (e, result) {
      _invoke(_this.props, 'onResultSelect', e, _extends({}, _this.props, {
        result: result
      }));
    };

    _this.handleSelectionChange = function (e) {
      var result = _this.getSelectedResult();

      _invoke(_this.props, 'onSelectionChange', e, _extends({}, _this.props, {
        result: result
      }));
    };

    _this.closeOnEscape = function (e) {
      if (keyboardKey.getCode(e) !== keyboardKey.Escape) return;
      e.preventDefault();

      _this.close();
    };

    _this.moveSelectionOnKeyDown = function (e) {
      switch (keyboardKey.getCode(e)) {
        case keyboardKey.ArrowDown:
          e.preventDefault();

          _this.moveSelectionBy(e, 1);

          break;

        case keyboardKey.ArrowUp:
          e.preventDefault();

          _this.moveSelectionBy(e, -1);

          break;

        default:
          break;
      }
    };

    _this.selectItemOnEnter = function (e) {
      if (keyboardKey.getCode(e) !== keyboardKey.Enter) return;

      var result = _this.getSelectedResult(); // prevent selecting null if there was no selected item value


      if (!result) return;
      e.preventDefault(); // notify the onResultSelect prop that the user is trying to change value

      _this.setValue(result.title);

      _this.handleResultSelect(e, result);

      _this.close();
    };

    _this.closeOnDocumentClick = function (e) {
      _this.close();
    };

    _this.handleMouseDown = function (e) {
      _this.isMouseDown = true;

      _invoke(_this.props, 'onMouseDown', e, _this.props);

      eventStack.sub('mouseup', _this.handleDocumentMouseUp);
    };

    _this.handleDocumentMouseUp = function () {
      _this.isMouseDown = false;
      eventStack.unsub('mouseup', _this.handleDocumentMouseUp);
    };

    _this.handleInputClick = function (e) {
      // prevent closeOnDocumentClick()
      e.nativeEvent.stopImmediatePropagation();

      _this.tryOpen();
    };

    _this.handleItemClick = function (e, _ref) {
      var id = _ref.id;

      var result = _this.getSelectedResult(id); // prevent closeOnDocumentClick()


      e.nativeEvent.stopImmediatePropagation(); // notify the onResultSelect prop that the user is trying to change value

      _this.setValue(result.title);

      _this.handleResultSelect(e, result);

      _this.close();
    };

    _this.handleItemMouseDown = function (e) {
      // Heads up! We should prevent default to prevent blur events.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3298
      e.preventDefault();
    };

    _this.handleFocus = function (e) {
      _invoke(_this.props, 'onFocus', e, _this.props);

      _this.setState({
        focus: true
      });
    };

    _this.handleBlur = function (e) {
      _invoke(_this.props, 'onBlur', e, _this.props);

      _this.setState({
        focus: false
      });
    };

    _this.handleSearchChange = function (e) {
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;
      var newQuery = e.target.value;

      _invoke(_this.props, 'onSearchChange', e, _extends({}, _this.props, {
        value: newQuery
      })); // open search dropdown on search query


      if (newQuery.length < minCharacters) {
        _this.close();
      } else if (!open) {
        _this.tryOpen(newQuery);
      }

      _this.setValue(newQuery);
    };

    _this.getFlattenedResults = function () {
      var _this$props = _this.props,
          category = _this$props.category,
          results = _this$props.results;
      return !category ? results : _reduce(results, function (memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    };

    _this.getSelectedResult = function (index) {
      if (index === void 0) {
        index = _this.state.selectedIndex;
      }

      var results = _this.getFlattenedResults();

      return _get(results, index);
    };

    _this.setValue = function (value) {
      var selectFirstResult = _this.props.selectFirstResult;

      _this.setState({
        value: value,
        selectedIndex: selectFirstResult ? 0 : -1
      });
    };

    _this.moveSelectionBy = function (e, offset) {
      var selectedIndex = _this.state.selectedIndex;

      var results = _this.getFlattenedResults();

      var lastIndex = results.length - 1; // next is after last, wrap to beginning
      // next is before first, wrap to end

      var nextIndex = selectedIndex + offset;
      if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      _this.setState({
        selectedIndex: nextIndex
      });

      _this.scrollSelectedItemIntoView();

      _this.handleSelectionChange(e);
    };

    _this.scrollSelectedItemIntoView = function () {
      // Do not access document when server side rendering
      if (!isBrowser()) return;
      var menu = document.querySelector('.ui.search.active.visible .results.visible');
      if (!menu) return;
      var item = menu.querySelector('.result.active');
      if (!item) return;
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    };

    _this.tryOpen = function (currentValue) {
      if (currentValue === void 0) {
        currentValue = _this.state.value;
      }

      var minCharacters = _this.props.minCharacters;
      if (currentValue.length < minCharacters) return;

      _this.open();
    };

    _this.open = function () {
      _this.setState({
        open: true
      });
    };

    _this.close = function () {
      _this.setState({
        open: false
      });
    };

    _this.renderSearchInput = function (rest) {
      var _this$props2 = _this.props,
          icon = _this$props2.icon,
          input = _this$props2.input;
      var value = _this.state.value;
      return Input.create(input, {
        autoGenerateKey: false,
        defaultProps: _extends({}, rest, {
          autoComplete: 'off',
          icon: icon,
          onChange: _this.handleSearchChange,
          onClick: _this.handleInputClick,
          tabIndex: '0',
          value: value
        }),
        // Nested shorthand props need special treatment to survive the shallow merge
        overrideProps: overrideSearchInputProps
      });
    };

    _this.renderNoResults = function () {
      var _this$props3 = _this.props,
          noResultsDescription = _this$props3.noResultsDescription,
          noResultsMessage = _this$props3.noResultsMessage;
      return /*#__PURE__*/React.createElement("div", {
        className: "message empty"
      }, /*#__PURE__*/React.createElement("div", {
        className: "header"
      }, noResultsMessage), noResultsDescription && /*#__PURE__*/React.createElement("div", {
        className: "description"
      }, noResultsDescription));
    };

    _this.renderResult = function (_ref2, index, _array, offset) {
      var childKey = _ref2.childKey,
          result = _objectWithoutPropertiesLoose(_ref2, ["childKey"]);

      if (offset === void 0) {
        offset = 0;
      }

      var resultRenderer = _this.props.resultRenderer;
      var selectedIndex = _this.state.selectedIndex;
      var offsetIndex = index + offset;
      return /*#__PURE__*/React.createElement(SearchResult, _extends({
        key: childKey || result.id || result.title,
        active: selectedIndex === offsetIndex,
        onClick: _this.handleItemClick,
        onMouseDown: _this.handleItemMouseDown,
        renderer: resultRenderer
      }, result, {
        id: offsetIndex // Used to lookup the result on item click

      }));
    };

    _this.renderResults = function () {
      var results = _this.props.results;
      return _map(results, _this.renderResult);
    };

    _this.renderCategories = function () {
      var _this$props4 = _this.props,
          categoryLayoutRenderer = _this$props4.categoryLayoutRenderer,
          categoryRenderer = _this$props4.categoryRenderer,
          categories = _this$props4.results;
      var selectedIndex = _this.state.selectedIndex;
      var count = 0;
      return _map(categories, function (_ref3) {
        var childKey = _ref3.childKey,
            category = _objectWithoutPropertiesLoose(_ref3, ["childKey"]);

        var categoryProps = _extends({
          key: childKey || category.name,
          active: _inRange(selectedIndex, count, count + category.results.length),
          layoutRenderer: categoryLayoutRenderer,
          renderer: categoryRenderer
        }, category);

        var renderFn = _partialRight(_this.renderResult, count);

        count += category.results.length;
        return /*#__PURE__*/React.createElement(SearchCategory, categoryProps, category.results.map(renderFn));
      });
    };

    _this.renderMenuContent = function () {
      var _this$props5 = _this.props,
          category = _this$props5.category,
          showNoResults = _this$props5.showNoResults,
          results = _this$props5.results;

      if (_isEmpty(results)) {
        return showNoResults ? _this.renderNoResults() : null;
      }

      return category ? _this.renderCategories() : _this.renderResults();
    };

    _this.renderResultsMenu = function () {
      var open = _this.state.open;
      var resultsClasses = open ? 'visible' : '';

      var menuContent = _this.renderMenuContent();

      if (!menuContent) return;
      return /*#__PURE__*/React.createElement(SearchResults, {
        className: resultsClasses
      }, menuContent);
    };

    return _this;
  }

  Search.getAutoControlledStateFromProps = function getAutoControlledStateFromProps(props, state) {
    // We need to store a `prevValue` to compare as in `getDerivedStateFromProps` we don't have
    // prevState
    if (typeof state.prevValue !== 'undefined' && shallowEqual(state.prevValue, state.value)) {
      return {
        prevValue: state.value
      };
    }

    var selectedIndex = props.selectFirstResult ? 0 : -1;
    return {
      prevValue: state.value,
      selectedIndex: selectedIndex
    };
  };

  var _proto = Search.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // eslint-disable-line complexity
    // focused / blurred
    if (!prevState.focus && this.state.focus) {
      if (!this.isMouseDown) {
        this.tryOpen();
      }

      if (this.state.open) {
        eventStack.sub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      }
    } else if (prevState.focus && !this.state.focus) {
      if (!this.isMouseDown) {
        this.close();
      }

      eventStack.unsub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    } // opened / closed


    if (!prevState.open && this.state.open) {
      this.open();
      eventStack.sub('click', this.closeOnDocumentClick);
      eventStack.sub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    } else if (prevState.open && !this.state.open) {
      this.close();
      eventStack.unsub('click', this.closeOnDocumentClick);
      eventStack.unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    eventStack.unsub('click', this.closeOnDocumentClick);
    eventStack.unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
  } // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------
  ;

  _proto.render = function render() {
    var _this$state = this.state,
        searchClasses = _this$state.searchClasses,
        focus = _this$state.focus,
        open = _this$state.open;
    var _this$props6 = this.props,
        aligned = _this$props6.aligned,
        category = _this$props6.category,
        className = _this$props6.className,
        fluid = _this$props6.fluid,
        loading = _this$props6.loading,
        size = _this$props6.size; // Classes

    var classes = cx('ui', open && 'active visible', size, searchClasses, useKeyOnly(category, 'category'), useKeyOnly(focus, 'focus'), useKeyOnly(fluid, 'fluid'), useKeyOnly(loading, 'loading'), useValueAndKey(aligned, 'aligned'), 'search', className);
    var unhandled = getUnhandledProps(Search, this.props);
    var ElementType = getElementType(Search, this.props);

    var _partitionHTMLProps = partitionHTMLProps(unhandled, {
      htmlProps: htmlInputAttrs
    }),
        htmlInputProps = _partitionHTMLProps[0],
        rest = _partitionHTMLProps[1];

    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onMouseDown: this.handleMouseDown
    }), this.renderSearchInput(htmlInputProps), this.renderResultsMenu());
  };

  return Search;
}(Component);

Search.handledProps = ["aligned", "as", "category", "categoryLayoutRenderer", "categoryRenderer", "className", "defaultOpen", "defaultValue", "fluid", "icon", "input", "loading", "minCharacters", "noResultsDescription", "noResultsMessage", "onBlur", "onFocus", "onMouseDown", "onResultSelect", "onSearchChange", "onSelectionChange", "open", "resultRenderer", "results", "selectFirstResult", "showNoResults", "size", "value"];
export { Search as default };
Search.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,
  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** Initial value. */
  defaultValue: PropTypes.string,

  /** Shorthand for Icon. */
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),

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
  results: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(SearchResult.propTypes)), PropTypes.shape(SearchCategory.propTypes)]),

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
   * Renders the SearchCategory layout.
   *
   * @param {object} categoryContent - The Renderable SearchCategory contents.
   * @param {object} resultsContent - The Renderable SearchResult contents.
   * @returns {*} - Renderable SearchCategory layout.
   */
  categoryLayoutRenderer: PropTypes.func,

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
   * @param {object} data - All props, includes current value of search input.
   */
  onSearchChange: PropTypes.func,

  /**
   * Called when the active selection index is changed.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onSelectionChange: PropTypes.func,
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

  /** Shorthand for input element. */
  input: customPropTypes.itemShorthand,

  /** A search can show a loading indicator. */
  loading: PropTypes.bool,

  /** A search can have different sizes. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium'))
} : {};
Search.defaultProps = {
  icon: 'search',
  input: 'text',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  showNoResults: true
};
Search.autoControlledProps = ['open', 'value'];
Search.Category = SearchCategory;
Search.Result = SearchResult;
Search.Results = SearchResults;