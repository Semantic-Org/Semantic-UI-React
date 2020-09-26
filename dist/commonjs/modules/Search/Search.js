"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _without2 = _interopRequireDefault(require("lodash/without"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _partialRight2 = _interopRequireDefault(require("lodash/partialRight"));

var _inRange2 = _interopRequireDefault(require("lodash/inRange"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _reduce2 = _interopRequireDefault(require("lodash/reduce"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));

var _clsx = _interopRequireDefault(require("clsx"));

var _keyboardKey = _interopRequireDefault(require("keyboard-key"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _lib = require("../../lib");

var _Input = _interopRequireDefault(require("../../elements/Input"));

var _SearchCategory = _interopRequireDefault(require("./SearchCategory"));

var _SearchResult = _interopRequireDefault(require("./SearchResult"));

var _SearchResults = _interopRequireDefault(require("./SearchResults"));

var overrideSearchInputProps = function overrideSearchInputProps(predefinedProps) {
  var input = predefinedProps.input;

  if ((0, _isUndefined2.default)(input)) {
    return (0, _extends2.default)({}, predefinedProps, {
      input: {
        className: 'prompt'
      }
    });
  }

  if ((0, _isPlainObject2.default)(input)) {
    return (0, _extends2.default)({}, predefinedProps, {
      input: (0, _extends2.default)({}, input, {
        className: (0, _clsx.default)(input.className, 'prompt')
      })
    });
  }

  return predefinedProps;
};
/**
 * A search module allows a user to query for results from a selection of data
 */


var Search = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Search, _Component);

  function Search() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleResultSelect = function (e, result) {
      (0, _invoke2.default)(_this.props, 'onResultSelect', e, (0, _extends2.default)({}, _this.props, {
        result: result
      }));
    };

    _this.handleSelectionChange = function (e) {
      var result = _this.getSelectedResult();

      (0, _invoke2.default)(_this.props, 'onSelectionChange', e, (0, _extends2.default)({}, _this.props, {
        result: result
      }));
    };

    _this.closeOnEscape = function (e) {
      if (_keyboardKey.default.getCode(e) !== _keyboardKey.default.Escape) return;
      e.preventDefault();

      _this.close();
    };

    _this.moveSelectionOnKeyDown = function (e) {
      switch (_keyboardKey.default.getCode(e)) {
        case _keyboardKey.default.ArrowDown:
          e.preventDefault();

          _this.moveSelectionBy(e, 1);

          break;

        case _keyboardKey.default.ArrowUp:
          e.preventDefault();

          _this.moveSelectionBy(e, -1);

          break;

        default:
          break;
      }
    };

    _this.selectItemOnEnter = function (e) {
      if (_keyboardKey.default.getCode(e) !== _keyboardKey.default.Enter) return;

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
      (0, _invoke2.default)(_this.props, 'onMouseDown', e, _this.props);

      _lib.eventStack.sub('mouseup', _this.handleDocumentMouseUp);
    };

    _this.handleDocumentMouseUp = function () {
      _this.isMouseDown = false;

      _lib.eventStack.unsub('mouseup', _this.handleDocumentMouseUp);
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
      (0, _invoke2.default)(_this.props, 'onFocus', e, _this.props);

      _this.setState({
        focus: true
      });
    };

    _this.handleBlur = function (e) {
      (0, _invoke2.default)(_this.props, 'onBlur', e, _this.props);

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
      (0, _invoke2.default)(_this.props, 'onSearchChange', e, (0, _extends2.default)({}, _this.props, {
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
      return !category ? results : (0, _reduce2.default)(results, function (memo, categoryData) {
        return memo.concat(categoryData.results);
      }, []);
    };

    _this.getSelectedResult = function (index) {
      if (index === void 0) {
        index = _this.state.selectedIndex;
      }

      var results = _this.getFlattenedResults();

      return (0, _get2.default)(results, index);
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
      if (!(0, _lib.isBrowser)()) return;
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
      return _Input.default.create(input, {
        autoGenerateKey: false,
        defaultProps: (0, _extends2.default)({}, rest, {
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
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "message empty"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "header"
      }, noResultsMessage), noResultsDescription && /*#__PURE__*/_react.default.createElement("div", {
        className: "description"
      }, noResultsDescription));
    };

    _this.renderResult = function (_ref2, index, _array, offset) {
      var childKey = _ref2.childKey,
          result = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["childKey"]);

      if (offset === void 0) {
        offset = 0;
      }

      var resultRenderer = _this.props.resultRenderer;
      var selectedIndex = _this.state.selectedIndex;
      var offsetIndex = index + offset;
      return /*#__PURE__*/_react.default.createElement(_SearchResult.default, (0, _extends2.default)({
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
      return (0, _map2.default)(results, _this.renderResult);
    };

    _this.renderCategories = function () {
      var _this$props4 = _this.props,
          categoryLayoutRenderer = _this$props4.categoryLayoutRenderer,
          categoryRenderer = _this$props4.categoryRenderer,
          categories = _this$props4.results;
      var selectedIndex = _this.state.selectedIndex;
      var count = 0;
      return (0, _map2.default)(categories, function (_ref3) {
        var childKey = _ref3.childKey,
            category = (0, _objectWithoutPropertiesLoose2.default)(_ref3, ["childKey"]);
        var categoryProps = (0, _extends2.default)({
          key: childKey || category.name,
          active: (0, _inRange2.default)(selectedIndex, count, count + category.results.length),
          layoutRenderer: categoryLayoutRenderer,
          renderer: categoryRenderer
        }, category);
        var renderFn = (0, _partialRight2.default)(_this.renderResult, count);
        count += category.results.length;
        return /*#__PURE__*/_react.default.createElement(_SearchCategory.default, categoryProps, category.results.map(renderFn));
      });
    };

    _this.renderMenuContent = function () {
      var _this$props5 = _this.props,
          category = _this$props5.category,
          showNoResults = _this$props5.showNoResults,
          results = _this$props5.results;

      if ((0, _isEmpty2.default)(results)) {
        return showNoResults ? _this.renderNoResults() : null;
      }

      return category ? _this.renderCategories() : _this.renderResults();
    };

    _this.renderResultsMenu = function () {
      var open = _this.state.open;
      var resultsClasses = open ? 'visible' : '';

      var menuContent = _this.renderMenuContent();

      if (!menuContent) return;
      return /*#__PURE__*/_react.default.createElement(_SearchResults.default, {
        className: resultsClasses
      }, menuContent);
    };

    return _this;
  }

  Search.getAutoControlledStateFromProps = function getAutoControlledStateFromProps(props, state) {
    // We need to store a `prevValue` to compare as in `getDerivedStateFromProps` we don't have
    // prevState
    if (typeof state.prevValue !== 'undefined' && (0, _shallowequal.default)(state.prevValue, state.value)) {
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
    return !(0, _shallowequal.default)(nextProps, this.props) || !(0, _shallowequal.default)(nextState, this.state);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // eslint-disable-line complexity
    // focused / blurred
    if (!prevState.focus && this.state.focus) {
      if (!this.isMouseDown) {
        this.tryOpen();
      }

      if (this.state.open) {
        _lib.eventStack.sub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
      }
    } else if (prevState.focus && !this.state.focus) {
      if (!this.isMouseDown) {
        this.close();
      }

      _lib.eventStack.unsub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    } // opened / closed


    if (!prevState.open && this.state.open) {
      this.open();

      _lib.eventStack.sub('click', this.closeOnDocumentClick);

      _lib.eventStack.sub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    } else if (prevState.open && !this.state.open) {
      this.close();

      _lib.eventStack.unsub('click', this.closeOnDocumentClick);

      _lib.eventStack.unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _lib.eventStack.unsub('click', this.closeOnDocumentClick);

    _lib.eventStack.unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
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

    var classes = (0, _clsx.default)('ui', open && 'active visible', size, searchClasses, (0, _lib.useKeyOnly)(category, 'category'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useValueAndKey)(aligned, 'aligned'), 'search', className);
    var unhandled = (0, _lib.getUnhandledProps)(Search, this.props);
    var ElementType = (0, _lib.getElementType)(Search, this.props);

    var _partitionHTMLProps = (0, _lib.partitionHTMLProps)(unhandled, {
      htmlProps: _lib.htmlInputAttrs
    }),
        htmlInputProps = _partitionHTMLProps[0],
        rest = _partitionHTMLProps[1];

    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onMouseDown: this.handleMouseDown
    }), this.renderSearchInput(htmlInputProps), this.renderResultsMenu());
  };

  return Search;
}(_lib.ModernAutoControlledComponent);

exports.default = Search;
Search.handledProps = ["aligned", "as", "category", "categoryLayoutRenderer", "categoryRenderer", "className", "defaultOpen", "defaultValue", "fluid", "icon", "input", "loading", "minCharacters", "noResultsDescription", "noResultsMessage", "onBlur", "onFocus", "onMouseDown", "onResultSelect", "onSearchChange", "onSelectionChange", "open", "resultRenderer", "results", "selectFirstResult", "showNoResults", "size", "value"];
Search.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,
  // ------------------------------------
  // Behavior
  // ------------------------------------

  /** Initial value of open. */
  defaultOpen: _propTypes.default.bool,

  /** Initial value. */
  defaultValue: _propTypes.default.string,

  /** Shorthand for Icon. */
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.object]),

  /** Minimum characters to query for results */
  minCharacters: _propTypes.default.number,

  /** Additional text for "No Results" message with less emphasis. */
  noResultsDescription: _propTypes.default.node,

  /** Message to display when there are no results. */
  noResultsMessage: _propTypes.default.node,

  /** Controls whether or not the results menu is displayed. */
  open: _propTypes.default.bool,

  /**
   * One of:
   * - array of Search.Result props e.g. `{ title: '', description: '' }` or
   * - object of categories e.g. `{ name: '', results: [{ title: '', description: '' }]`
   */
  results: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape(_SearchResult.default.propTypes)), _propTypes.default.shape(_SearchCategory.default.propTypes)]),

  /** Whether the search should automatically select the first result after searching. */
  selectFirstResult: _propTypes.default.bool,

  /** Whether a "no results" message should be shown if no results are found. */
  showNoResults: _propTypes.default.bool,

  /** Current value of the search input. Creates a controlled component. */
  value: _propTypes.default.string,
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
  categoryLayoutRenderer: _propTypes.default.func,

  /**
   * Renders the SearchCategory contents.
   *
   * @param {object} props - The SearchCategory props object.
   * @returns {*} - Renderable SearchCategory contents.
   */
  categoryRenderer: _propTypes.default.func,

  /**
   * Renders the SearchResult contents.
   *
   * @param {object} props - The SearchResult props object.
   * @returns {*} - Renderable SearchResult contents.
   */
  resultRenderer: _propTypes.default.func,
  // ------------------------------------
  // Callbacks
  // ------------------------------------

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: _propTypes.default.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: _propTypes.default.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: _propTypes.default.func,

  /**
   * Called when a result is selected.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onResultSelect: _propTypes.default.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of search input.
   */
  onSearchChange: _propTypes.default.func,

  /**
   * Called when the active selection index is changed.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onSelectionChange: _propTypes.default.func,
  // ------------------------------------
  // Style
  // ------------------------------------

  /** A search can have its results aligned to its left or right container edge. */
  aligned: _propTypes.default.string,

  /** A search can display results from remote content ordered by categories. */
  category: _propTypes.default.bool,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** A search can have its results take up the width of its container. */
  fluid: _propTypes.default.bool,

  /** Shorthand for input element. */
  input: _lib.customPropTypes.itemShorthand,

  /** A search can show a loading indicator. */
  loading: _propTypes.default.bool,

  /** A search can have different sizes. */
  size: _propTypes.default.oneOf((0, _without2.default)(_lib.SUI.SIZES, 'medium'))
} : {};
Search.defaultProps = {
  icon: 'search',
  input: 'text',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  showNoResults: true
};
Search.autoControlledProps = ['open', 'value'];
Search.Category = _SearchCategory.default;
Search.Result = _SearchResult.default;
Search.Results = _SearchResults.default;