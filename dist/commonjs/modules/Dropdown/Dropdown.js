"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _every2 = _interopRequireDefault(require("lodash/every"));

var _without2 = _interopRequireDefault(require("lodash/without"));

var _find2 = _interopRequireDefault(require("lodash/find"));

var _dropRight2 = _interopRequireDefault(require("lodash/dropRight"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _size2 = _interopRequireDefault(require("lodash/size"));

var _difference2 = _interopRequireDefault(require("lodash/difference"));

var _union2 = _interopRequireDefault(require("lodash/union"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _has2 = _interopRequireDefault(require("lodash/has"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _eventStack = _interopRequireDefault(require("@semantic-ui-react/event-stack"));

var _reactComponentRef = require("@fluentui/react-component-ref");

var _clsx = _interopRequireDefault(require("clsx"));

var _keyboardKey = _interopRequireDefault(require("keyboard-key"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _lib = require("../../lib");

var _Icon = _interopRequireDefault(require("../../elements/Icon"));

var _Label = _interopRequireDefault(require("../../elements/Label"));

var _Flag = _interopRequireDefault(require("../../elements/Flag"));

var _Image = _interopRequireDefault(require("../../elements/Image"));

var _DropdownDivider = _interopRequireDefault(require("./DropdownDivider"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _DropdownHeader = _interopRequireDefault(require("./DropdownHeader"));

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));

var _DropdownSearchInput = _interopRequireDefault(require("./DropdownSearchInput"));

var _DropdownText = _interopRequireDefault(require("./DropdownText"));

var _getMenuOptions = _interopRequireDefault(require("./utils/getMenuOptions"));

var _getSelectedIndex = _interopRequireDefault(require("./utils/getSelectedIndex"));

var getKeyOrValue = function getKeyOrValue(key, value) {
  return (0, _isNil2.default)(key) ? value : key;
};

var getKeyAndValues = function getKeyAndValues(options) {
  return options ? options.map(function (option) {
    return (0, _pick2.default)(option, ['key', 'value']);
  }) : options;
};

function renderItemContent(item) {
  var flag = item.flag,
      image = item.image,
      text = item.text; // TODO: remove this in v3
  // This maintains compatibility with Shorthand API in v1 as this might be called in "Label.create()"

  if ((0, _isFunction2.default)(text)) {
    return text;
  }

  return {
    content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _Flag.default.create(flag), _Image.default.create(image), text)
  };
}
/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */


var Dropdown = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Dropdown, _Component);

  function Dropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.searchRef = /*#__PURE__*/(0, _react.createRef)();
    _this.sizerRef = /*#__PURE__*/(0, _react.createRef)();
    _this.ref = /*#__PURE__*/(0, _react.createRef)();

    _this.handleChange = function (e, value) {
      (0, _invoke2.default)(_this.props, 'onChange', e, (0, _extends2.default)({}, _this.props, {
        value: value
      }));
    };

    _this.closeOnChange = function (e) {
      var _this$props = _this.props,
          closeOnChange = _this$props.closeOnChange,
          multiple = _this$props.multiple;
      var shouldClose = (0, _isUndefined2.default)(closeOnChange) ? !multiple : closeOnChange;

      if (shouldClose) {
        _this.close(e, _noop2.default);
      }
    };

    _this.closeOnEscape = function (e) {
      if (!_this.props.closeOnEscape) return;
      if (_keyboardKey.default.getCode(e) !== _keyboardKey.default.Escape) return;
      e.preventDefault();

      _this.close(e);
    };

    _this.moveSelectionOnKeyDown = function (e) {
      var _moves;

      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          selectOnNavigation = _this$props2.selectOnNavigation;
      var open = _this.state.open;

      if (!open) {
        return;
      }

      var moves = (_moves = {}, _moves[_keyboardKey.default.ArrowDown] = 1, _moves[_keyboardKey.default.ArrowUp] = -1, _moves);

      var move = moves[_keyboardKey.default.getCode(e)];

      if (move === undefined) {
        return;
      }

      e.preventDefault();

      var nextIndex = _this.getSelectedIndexAfterMove(move);

      if (!multiple && selectOnNavigation) {
        _this.makeSelectedItemActive(e, nextIndex);
      }

      _this.setState({
        selectedIndex: nextIndex
      });
    };

    _this.openOnSpace = function (e) {
      var _e$target, _e$target2, _e$target3;

      var shouldHandleEvent = _this.state.focus && !_this.state.open && _keyboardKey.default.getCode(e) === _keyboardKey.default.Spacebar;

      var shouldPreventDefault = ((_e$target = e.target) == null ? void 0 : _e$target.tagName) !== 'INPUT' && ((_e$target2 = e.target) == null ? void 0 : _e$target2.tagName) !== 'TEXTAREA' && ((_e$target3 = e.target) == null ? void 0 : _e$target3.isContentEditable) !== true;

      if (shouldHandleEvent) {
        if (shouldPreventDefault) {
          e.preventDefault();
        }

        _this.open(e);
      }
    };

    _this.openOnArrow = function (e) {
      var _this$state = _this.state,
          focus = _this$state.focus,
          open = _this$state.open;

      if (focus && !open) {
        var code = _keyboardKey.default.getCode(e);

        if (code === _keyboardKey.default.ArrowDown || code === _keyboardKey.default.ArrowUp) {
          e.preventDefault();

          _this.open(e);
        }
      }
    };

    _this.makeSelectedItemActive = function (e, selectedIndex) {
      var _this$state2 = _this.state,
          open = _this$state2.open,
          value = _this$state2.value;
      var multiple = _this.props.multiple;

      var item = _this.getSelectedItem(selectedIndex);

      var selectedValue = (0, _get2.default)(item, 'value'); // prevent selecting null if there was no selected item value
      // prevent selecting duplicate items when the dropdown is closed

      if ((0, _isNil2.default)(selectedValue) || !open) {
        return value;
      } // state value may be undefined


      var newValue = multiple ? (0, _union2.default)(value, [selectedValue]) : selectedValue;
      var valueHasChanged = multiple ? !!(0, _difference2.default)(newValue, value).length : newValue !== value;

      if (valueHasChanged) {
        // notify the onChange prop that the user is trying to change value
        _this.setState({
          value: newValue
        });

        _this.handleChange(e, newValue); // Heads up! This event handler should be called after `onChange`
        // Notify the onAddItem prop if this is a new value


        if (item['data-additional']) {
          (0, _invoke2.default)(_this.props, 'onAddItem', e, (0, _extends2.default)({}, _this.props, {
            value: selectedValue
          }));
        }
      }

      return value;
    };

    _this.selectItemOnEnter = function (e) {
      var search = _this.props.search;
      var _this$state3 = _this.state,
          open = _this$state3.open,
          selectedIndex = _this$state3.selectedIndex;

      if (!open) {
        return;
      }

      var shouldSelect = _keyboardKey.default.getCode(e) === _keyboardKey.default.Enter || // https://github.com/Semantic-Org/Semantic-UI-React/pull/3766
      !search && _keyboardKey.default.getCode(e) === _keyboardKey.default.Spacebar;

      if (!shouldSelect) {
        return;
      }

      e.preventDefault();
      var optionSize = (0, _size2.default)((0, _getMenuOptions.default)({
        value: _this.state.value,
        options: _this.props.options,
        searchQuery: _this.state.searchQuery,
        additionLabel: _this.props.additionLabel,
        additionPosition: _this.props.additionPosition,
        allowAdditions: _this.props.allowAdditions,
        deburr: _this.props.deburr,
        multiple: _this.props.multiple,
        search: _this.props.search
      }));

      if (search && optionSize === 0) {
        return;
      }

      var nextValue = _this.makeSelectedItemActive(e, selectedIndex); // This is required as selected value may be the same


      _this.setState({
        selectedIndex: (0, _getSelectedIndex.default)({
          additionLabel: _this.props.additionLabel,
          additionPosition: _this.props.additionPosition,
          allowAdditions: _this.props.allowAdditions,
          deburr: _this.props.deburr,
          multiple: _this.props.multiple,
          search: _this.props.search,
          selectedIndex: selectedIndex,
          value: nextValue,
          options: _this.props.options,
          searchQuery: ''
        })
      });

      _this.closeOnChange(e);

      _this.clearSearchQuery();

      if (search) {
        (0, _invoke2.default)(_this.searchRef.current, 'focus');
      }
    };

    _this.removeItemOnBackspace = function (e) {
      var _this$props3 = _this.props,
          multiple = _this$props3.multiple,
          search = _this$props3.search;
      var _this$state4 = _this.state,
          searchQuery = _this$state4.searchQuery,
          value = _this$state4.value;
      if (_keyboardKey.default.getCode(e) !== _keyboardKey.default.Backspace) return;
      if (searchQuery || !search || !multiple || (0, _isEmpty2.default)(value)) return;
      e.preventDefault(); // remove most recent value

      var newValue = (0, _dropRight2.default)(value);

      _this.setState({
        value: newValue
      });

      _this.handleChange(e, newValue);
    };

    _this.closeOnDocumentClick = function (e) {
      if (!_this.props.closeOnBlur) return; // If event happened in the dropdown, ignore it

      if (_this.ref.current && (0, _lib.doesNodeContainClick)(_this.ref.current, e)) return;

      _this.close();
    };

    _this.handleMouseDown = function (e) {
      _this.isMouseDown = true;
      (0, _invoke2.default)(_this.props, 'onMouseDown', e, _this.props);
      document.addEventListener('mouseup', _this.handleDocumentMouseUp);
    };

    _this.handleDocumentMouseUp = function () {
      _this.isMouseDown = false;
      document.removeEventListener('mouseup', _this.handleDocumentMouseUp);
    };

    _this.handleClick = function (e) {
      var _this$props4 = _this.props,
          minCharacters = _this$props4.minCharacters,
          search = _this$props4.search;
      var _this$state5 = _this.state,
          open = _this$state5.open,
          searchQuery = _this$state5.searchQuery;
      (0, _invoke2.default)(_this.props, 'onClick', e, _this.props); // prevent closeOnDocumentClick()

      e.stopPropagation();
      if (!search) return _this.toggle(e);

      if (open) {
        (0, _invoke2.default)(_this.searchRef.current, 'focus');
        return;
      }

      if (searchQuery.length >= minCharacters || minCharacters === 1) {
        _this.open(e);

        return;
      }

      (0, _invoke2.default)(_this.searchRef.current, 'focus');
    };

    _this.handleIconClick = function (e) {
      var clearable = _this.props.clearable;

      var hasValue = _this.hasValue();

      (0, _invoke2.default)(_this.props, 'onClick', e, _this.props); // prevent handleClick()

      e.stopPropagation();

      if (clearable && hasValue) {
        _this.clearValue(e);
      } else {
        _this.toggle(e);
      }
    };

    _this.handleItemClick = function (e, item) {
      var _this$props5 = _this.props,
          multiple = _this$props5.multiple,
          search = _this$props5.search;
      var currentValue = _this.state.value;
      var value = item.value; // prevent toggle() in handleClick()

      e.stopPropagation(); // prevent closeOnDocumentClick() if multiple or item is disabled

      if (multiple || item.disabled) {
        e.nativeEvent.stopImmediatePropagation();
      }

      if (item.disabled) {
        return;
      }

      var isAdditionItem = item['data-additional'];
      var newValue = multiple ? (0, _union2.default)(_this.state.value, [value]) : value;
      var valueHasChanged = multiple ? !!(0, _difference2.default)(newValue, currentValue).length : newValue !== currentValue; // notify the onChange prop that the user is trying to change value

      if (valueHasChanged) {
        _this.setState({
          value: newValue
        });

        _this.handleChange(e, newValue);
      }

      _this.clearSearchQuery();

      if (search) {
        (0, _invoke2.default)(_this.searchRef.current, 'focus');
      } else {
        (0, _invoke2.default)(_this.ref.current, 'focus');
      }

      _this.closeOnChange(e); // Heads up! This event handler should be called after `onChange`
      // Notify the onAddItem prop if this is a new value


      if (isAdditionItem) {
        (0, _invoke2.default)(_this.props, 'onAddItem', e, (0, _extends2.default)({}, _this.props, {
          value: value
        }));
      }
    };

    _this.handleFocus = function (e) {
      var focus = _this.state.focus;
      if (focus) return;
      (0, _invoke2.default)(_this.props, 'onFocus', e, _this.props);

      _this.setState({
        focus: true
      });
    };

    _this.handleBlur = function (e) {
      // Heads up! Don't remove this.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/1315
      var currentTarget = (0, _get2.default)(e, 'currentTarget');
      if (currentTarget && currentTarget.contains(document.activeElement)) return;
      var _this$props6 = _this.props,
          closeOnBlur = _this$props6.closeOnBlur,
          multiple = _this$props6.multiple,
          selectOnBlur = _this$props6.selectOnBlur; // do not "blur" when the mouse is down inside of the Dropdown

      if (_this.isMouseDown) return;
      (0, _invoke2.default)(_this.props, 'onBlur', e, _this.props);

      if (selectOnBlur && !multiple) {
        _this.makeSelectedItemActive(e, _this.state.selectedIndex);

        if (closeOnBlur) _this.close();
      }

      _this.setState({
        focus: false
      });

      _this.clearSearchQuery();
    };

    _this.handleSearchChange = function (e, _ref) {
      var value = _ref.value;
      // prevent propagating to this.props.onChange()
      e.stopPropagation();
      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;
      var newQuery = value;
      (0, _invoke2.default)(_this.props, 'onSearchChange', e, (0, _extends2.default)({}, _this.props, {
        searchQuery: newQuery
      }));

      _this.setState({
        searchQuery: newQuery,
        selectedIndex: 0
      }); // open search dropdown on search query


      if (!open && newQuery.length >= minCharacters) {
        _this.open();

        return;
      } // close search dropdown if search query is too small


      if (open && minCharacters !== 1 && newQuery.length < minCharacters) _this.close();
    };

    _this.handleKeyDown = function (e) {
      _this.moveSelectionOnKeyDown(e);

      _this.openOnArrow(e);

      _this.openOnSpace(e);

      _this.selectItemOnEnter(e);

      (0, _invoke2.default)(_this.props, 'onKeyDown', e);
    };

    _this.getSelectedItem = function (selectedIndex) {
      var options = (0, _getMenuOptions.default)({
        value: _this.state.value,
        options: _this.props.options,
        searchQuery: _this.state.searchQuery,
        additionLabel: _this.props.additionLabel,
        additionPosition: _this.props.additionPosition,
        allowAdditions: _this.props.allowAdditions,
        deburr: _this.props.deburr,
        multiple: _this.props.multiple,
        search: _this.props.search
      });
      return (0, _get2.default)(options, "[" + selectedIndex + "]");
    };

    _this.getItemByValue = function (value) {
      var options = _this.props.options;
      return (0, _find2.default)(options, {
        value: value
      });
    };

    _this.getDropdownAriaOptions = function () {
      var _this$props7 = _this.props,
          loading = _this$props7.loading,
          disabled = _this$props7.disabled,
          search = _this$props7.search,
          multiple = _this$props7.multiple;
      var open = _this.state.open;
      var ariaOptions = {
        role: search ? 'combobox' : 'listbox',
        'aria-busy': loading,
        'aria-disabled': disabled,
        'aria-expanded': !!open
      };

      if (ariaOptions.role === 'listbox') {
        ariaOptions['aria-multiselectable'] = multiple;
      }

      return ariaOptions;
    };

    _this.clearSearchQuery = function () {
      var searchQuery = _this.state.searchQuery;
      if (searchQuery === undefined || searchQuery === '') return;

      _this.setState({
        searchQuery: ''
      });
    };

    _this.handleLabelClick = function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();

      _this.setState({
        selectedLabel: labelProps.value
      });

      (0, _invoke2.default)(_this.props, 'onLabelClick', e, labelProps);
    };

    _this.handleLabelRemove = function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();
      var value = _this.state.value;
      var newValue = (0, _without2.default)(value, labelProps.value);

      _this.setState({
        value: newValue
      });

      _this.handleChange(e, newValue);
    };

    _this.getSelectedIndexAfterMove = function (offset, startIndex) {
      if (startIndex === void 0) {
        startIndex = _this.state.selectedIndex;
      }

      var options = (0, _getMenuOptions.default)({
        value: _this.state.value,
        options: _this.props.options,
        searchQuery: _this.state.searchQuery,
        additionLabel: _this.props.additionLabel,
        additionPosition: _this.props.additionPosition,
        allowAdditions: _this.props.allowAdditions,
        deburr: _this.props.deburr,
        multiple: _this.props.multiple,
        search: _this.props.search
      }); // Prevent infinite loop
      // TODO: remove left part of condition after children API will be removed

      if (options === undefined || (0, _every2.default)(options, 'disabled')) return;
      var lastIndex = options.length - 1;
      var wrapSelection = _this.props.wrapSelection; // next is after last, wrap to beginning
      // next is before first, wrap to end

      var nextIndex = startIndex + offset; // if 'wrapSelection' is set to false and selection is after last or before first, it just does not change

      if (!wrapSelection && (nextIndex > lastIndex || nextIndex < 0)) {
        nextIndex = startIndex;
      } else if (nextIndex > lastIndex) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = lastIndex;
      }

      if (options[nextIndex].disabled) {
        return _this.getSelectedIndexAfterMove(offset, nextIndex);
      }

      return nextIndex;
    };

    _this.handleIconOverrides = function (predefinedProps) {
      var clearable = _this.props.clearable;
      var classes = (0, _clsx.default)(clearable && _this.hasValue() && 'clear', predefinedProps.className);
      return {
        className: classes,
        onClick: function onClick(e) {
          (0, _invoke2.default)(predefinedProps, 'onClick', e, predefinedProps);

          _this.handleIconClick(e);
        }
      };
    };

    _this.clearValue = function (e) {
      var multiple = _this.props.multiple;
      var newValue = multiple ? [] : '';

      _this.setState({
        value: newValue
      });

      _this.handleChange(e, newValue);
    };

    _this.computeSearchInputTabIndex = function () {
      var _this$props8 = _this.props,
          disabled = _this$props8.disabled,
          tabIndex = _this$props8.tabIndex;
      if (!(0, _isNil2.default)(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    };

    _this.computeSearchInputWidth = function () {
      var searchQuery = _this.state.searchQuery;

      if (_this.sizerRef.current && searchQuery) {
        // resize the search input, temporarily show the sizer so we can measure it
        _this.sizerRef.current.style.display = 'inline';
        _this.sizerRef.current.textContent = searchQuery;
        var searchWidth = Math.ceil(_this.sizerRef.current.getBoundingClientRect().width);

        _this.sizerRef.current.style.removeProperty('display');

        return searchWidth;
      }
    };

    _this.computeTabIndex = function () {
      var _this$props9 = _this.props,
          disabled = _this$props9.disabled,
          search = _this$props9.search,
          tabIndex = _this$props9.tabIndex; // don't set a root node tabIndex as the search input has its own tabIndex

      if (search) return undefined;
      if (disabled) return -1;
      return (0, _isNil2.default)(tabIndex) ? 0 : tabIndex;
    };

    _this.handleSearchInputOverrides = function (predefinedProps) {
      return {
        onChange: function onChange(e, inputProps) {
          (0, _invoke2.default)(predefinedProps, 'onChange', e, inputProps);

          _this.handleSearchChange(e, inputProps);
        }
      };
    };

    _this.hasValue = function () {
      var multiple = _this.props.multiple;
      var value = _this.state.value;
      return multiple ? !(0, _isEmpty2.default)(value) : !(0, _isNil2.default)(value) && value !== '';
    };

    _this.scrollSelectedItemIntoView = function () {
      if (!_this.ref.current) return;

      var menu = _this.ref.current.querySelector('.menu.visible');

      if (!menu) return;
      var item = menu.querySelector('.item.selected');
      if (!item) return;
      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        // eslint-disable-next-line no-mixed-operators
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    };

    _this.setOpenDirection = function () {
      if (!_this.ref.current) return;

      var menu = _this.ref.current.querySelector('.menu.visible');

      if (!menu) return;

      var dropdownRect = _this.ref.current.getBoundingClientRect();

      var menuHeight = menu.clientHeight;
      var spaceAtTheBottom = document.documentElement.clientHeight - dropdownRect.top - dropdownRect.height - menuHeight;
      var spaceAtTheTop = dropdownRect.top - menuHeight;
      var upward = spaceAtTheBottom < 0 && spaceAtTheTop > spaceAtTheBottom; // set state only if there's a relevant difference

      if (!upward !== !_this.state.upward) {
        _this.setState({
          upward: upward
        });
      }
    };

    _this.open = function (e, triggerSetState) {
      if (e === void 0) {
        e = null;
      }

      if (triggerSetState === void 0) {
        triggerSetState = true;
      }

      var _this$props10 = _this.props,
          disabled = _this$props10.disabled,
          search = _this$props10.search;
      if (disabled) return;
      if (search) (0, _invoke2.default)(_this.searchRef.current, 'focus');
      (0, _invoke2.default)(_this.props, 'onOpen', e, _this.props);

      if (triggerSetState) {
        _this.setState({
          open: true
        });
      }

      _this.scrollSelectedItemIntoView();
    };

    _this.close = function (e, callback) {
      if (callback === void 0) {
        callback = _this.handleClose;
      }

      if (_this.state.open) {
        (0, _invoke2.default)(_this.props, 'onClose', e, _this.props);

        _this.setState({
          open: false
        }, callback);
      }
    };

    _this.handleClose = function () {
      var hasSearchFocus = document.activeElement === _this.searchRef.current; // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
      // Blur the Dropdown on close so it is blurred after selecting an item.
      // This is to prevent it from re-opening when switching tabs after selecting an item.

      if (!hasSearchFocus && _this.ref.current) {
        _this.ref.current.blur();
      }

      var hasDropdownFocus = document.activeElement === _this.ref.current;
      var hasFocus = hasSearchFocus || hasDropdownFocus; // We need to keep the virtual model in sync with the browser focus change
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692

      _this.setState({
        focus: hasFocus
      });
    };

    _this.toggle = function (e) {
      return _this.state.open ? _this.close(e) : _this.open(e);
    };

    _this.renderText = function () {
      var _this$props11 = _this.props,
          multiple = _this$props11.multiple,
          placeholder = _this$props11.placeholder,
          search = _this$props11.search,
          text = _this$props11.text;
      var _this$state6 = _this.state,
          searchQuery = _this$state6.searchQuery,
          selectedIndex = _this$state6.selectedIndex,
          value = _this$state6.value,
          open = _this$state6.open;

      var hasValue = _this.hasValue();

      var classes = (0, _clsx.default)(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
      var _text = placeholder;
      var selectedItem;

      if (text) {
        _text = text;
      } else if (open && !multiple) {
        selectedItem = _this.getSelectedItem(selectedIndex);
      } else if (hasValue) {
        selectedItem = _this.getItemByValue(value);
      }

      return _DropdownText.default.create(selectedItem ? renderItemContent(selectedItem) : _text, {
        defaultProps: {
          className: classes
        }
      });
    };

    _this.renderSearchInput = function () {
      var _this$props12 = _this.props,
          search = _this$props12.search,
          searchInput = _this$props12.searchInput;
      var searchQuery = _this.state.searchQuery;
      return search && /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
        innerRef: _this.searchRef
      }, _DropdownSearchInput.default.create(searchInput, {
        defaultProps: {
          style: {
            width: _this.computeSearchInputWidth()
          },
          tabIndex: _this.computeSearchInputTabIndex(),
          value: searchQuery
        },
        overrideProps: _this.handleSearchInputOverrides
      }));
    };

    _this.renderSearchSizer = function () {
      var _this$props13 = _this.props,
          search = _this$props13.search,
          multiple = _this$props13.multiple;
      return search && multiple && /*#__PURE__*/_react.default.createElement("span", {
        className: "sizer",
        ref: _this.sizerRef
      });
    };

    _this.renderLabels = function () {
      var _this$props14 = _this.props,
          multiple = _this$props14.multiple,
          renderLabel = _this$props14.renderLabel;
      var _this$state7 = _this.state,
          selectedLabel = _this$state7.selectedLabel,
          value = _this$state7.value;

      if (!multiple || (0, _isEmpty2.default)(value)) {
        return;
      }

      var selectedItems = (0, _map2.default)(value, _this.getItemByValue);
      // if no item could be found for a given state value the selected item will be undefined
      // compact the selectedItems so we only have actual objects left
      return (0, _map2.default)((0, _compact2.default)(selectedItems), function (item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: 'a',
          key: getKeyOrValue(item.key, item.value),
          onClick: _this.handleLabelClick,
          onRemove: _this.handleLabelRemove,
          value: item.value,
          icon: item.icon
        };
        return _Label.default.create(renderLabel(item, index, defaultProps), {
          defaultProps: defaultProps
        });
      });
    };

    _this.renderOptions = function () {
      var _this$props15 = _this.props,
          lazyLoad = _this$props15.lazyLoad,
          multiple = _this$props15.multiple,
          search = _this$props15.search,
          noResultsMessage = _this$props15.noResultsMessage;
      var _this$state8 = _this.state,
          open = _this$state8.open,
          selectedIndex = _this$state8.selectedIndex,
          value = _this$state8.value; // lazy load, only render options when open

      if (lazyLoad && !open) return null;
      var options = (0, _getMenuOptions.default)({
        value: _this.state.value,
        options: _this.props.options,
        searchQuery: _this.state.searchQuery,
        additionLabel: _this.props.additionLabel,
        additionPosition: _this.props.additionPosition,
        allowAdditions: _this.props.allowAdditions,
        deburr: _this.props.deburr,
        multiple: _this.props.multiple,
        search: _this.props.search
      });

      if (noResultsMessage !== null && search && (0, _isEmpty2.default)(options)) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "message"
        }, noResultsMessage);
      }

      var isActive = multiple ? function (optValue) {
        return (0, _includes2.default)(value, optValue);
      } : function (optValue) {
        return optValue === value;
      };
      return (0, _map2.default)(options, function (opt, i) {
        return _DropdownItem.default.create((0, _extends2.default)({
          active: isActive(opt.value),
          onClick: _this.handleItemClick,
          selected: selectedIndex === i
        }, opt, {
          key: getKeyOrValue(opt.key, opt.value),
          // Needed for handling click events on disabled items
          style: (0, _extends2.default)({}, opt.style, {
            pointerEvents: 'all'
          })
        }));
      });
    };

    _this.renderMenu = function () {
      var _this$props16 = _this.props,
          children = _this$props16.children,
          direction = _this$props16.direction,
          header = _this$props16.header;
      var open = _this.state.open;

      var ariaOptions = _this.getDropdownMenuAriaOptions(); // single menu child


      if (!_lib.childrenUtils.isNil(children)) {
        var menuChild = _react.Children.only(children);

        var className = (0, _clsx.default)(direction, (0, _lib.useKeyOnly)(open, 'visible'), menuChild.props.className);
        return /*#__PURE__*/(0, _react.cloneElement)(menuChild, (0, _extends2.default)({
          className: className
        }, ariaOptions));
      }

      return /*#__PURE__*/_react.default.createElement(_DropdownMenu.default, (0, _extends2.default)({}, ariaOptions, {
        direction: direction,
        open: open
      }), _DropdownHeader.default.create(header, {
        autoGenerateKey: false
      }), _this.renderOptions());
    };

    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.getInitialAutoControlledState = function getInitialAutoControlledState() {
    return {
      focus: false,
      searchQuery: ''
    };
  };

  Dropdown.getAutoControlledStateFromProps = function getAutoControlledStateFromProps(nextProps, computedState, prevState) {
    // These values are stored only for a comparison on next getAutoControlledStateFromProps()
    var derivedState = {
      __options: nextProps.options,
      __value: computedState.value
    }; // The selected index is only dependent:

    var shouldComputeSelectedIndex = // On value change
    !(0, _shallowequal.default)(prevState.__value, computedState.value) || // On option keys/values, we only check those properties to avoid recursive performance impacts.
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/3000
    !(0, _isEqual2.default)(getKeyAndValues(nextProps.options), getKeyAndValues(prevState.__options));

    if (shouldComputeSelectedIndex) {
      derivedState.selectedIndex = (0, _getSelectedIndex.default)({
        additionLabel: nextProps.additionLabel,
        additionPosition: nextProps.additionPosition,
        allowAdditions: nextProps.allowAdditions,
        deburr: nextProps.deburr,
        multiple: nextProps.multiple,
        search: nextProps.search,
        selectedIndex: computedState.selectedIndex,
        value: computedState.value,
        options: nextProps.options,
        searchQuery: computedState.searchQuery
      });
    }

    return derivedState;
  };

  _proto.componentDidMount = function componentDidMount() {
    var open = this.state.open;

    if (open) {
      this.open(null, false);
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !(0, _shallowequal.default)(nextProps, this.props) || !(0, _shallowequal.default)(nextState, this.state);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // eslint-disable-line complexity
    var _this$props17 = this.props,
        closeOnBlur = _this$props17.closeOnBlur,
        minCharacters = _this$props17.minCharacters,
        openOnFocus = _this$props17.openOnFocus,
        search = _this$props17.search;
    /* eslint-disable no-console */

    if (process.env.NODE_ENV !== 'production') {
      // in development, validate value type matches dropdown type
      var isNextValueArray = Array.isArray(this.props.value);
      var hasValue = (0, _has2.default)(this.props, 'value');

      if (hasValue && this.props.multiple && !isNextValueArray) {
        console.error('Dropdown `value` must be an array when `multiple` is set.' + (" Received type: `" + Object.prototype.toString.call(this.props.value) + "`."));
      } else if (hasValue && !this.props.multiple && isNextValueArray) {
        console.error('Dropdown `value` must not be an array when `multiple` is not set.' + ' Either set `multiple={true}` or use a string or number value.');
      }
    }
    /* eslint-enable no-console */
    // focused / blurred


    if (!prevState.focus && this.state.focus) {
      if (!this.isMouseDown) {
        var openable = !search || search && minCharacters === 1 && !this.state.open;
        if (openOnFocus && openable) this.open();
      }
    } else if (prevState.focus && !this.state.focus) {
      if (!this.isMouseDown && closeOnBlur) {
        this.close();
      }
    } // opened / closed


    if (!prevState.open && this.state.open) {
      this.setOpenDirection();
      this.scrollSelectedItemIntoView();
    } else if (prevState.open && !this.state.open) {}

    if (prevState.selectedIndex !== this.state.selectedIndex) {
      this.scrollSelectedItemIntoView();
    }
  } // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------
  // onChange needs to receive a value
  // can't rely on props.value if we are controlled
  ;

  _proto.getDropdownMenuAriaOptions = function getDropdownMenuAriaOptions() {
    var _this$props18 = this.props,
        search = _this$props18.search,
        multiple = _this$props18.multiple;
    var ariaOptions = {};

    if (search) {
      ariaOptions['aria-multiselectable'] = multiple;
      ariaOptions.role = 'listbox';
    }

    return ariaOptions;
  } // ----------------------------------------
  // Setters
  // ----------------------------------------
  ;

  _proto.render = function render() {
    var _this$props19 = this.props,
        basic = _this$props19.basic,
        button = _this$props19.button,
        className = _this$props19.className,
        compact = _this$props19.compact,
        disabled = _this$props19.disabled,
        error = _this$props19.error,
        fluid = _this$props19.fluid,
        floating = _this$props19.floating,
        icon = _this$props19.icon,
        inline = _this$props19.inline,
        item = _this$props19.item,
        labeled = _this$props19.labeled,
        loading = _this$props19.loading,
        multiple = _this$props19.multiple,
        pointing = _this$props19.pointing,
        search = _this$props19.search,
        selection = _this$props19.selection,
        scrolling = _this$props19.scrolling,
        simple = _this$props19.simple,
        trigger = _this$props19.trigger;
    var _this$state9 = this.state,
        focus = _this$state9.focus,
        open = _this$state9.open,
        upward = _this$state9.upward; // Classes

    var classes = (0, _clsx.default)('ui', (0, _lib.useKeyOnly)(open, 'active visible'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(button, 'button'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(floating, 'floating'), (0, _lib.useKeyOnly)(inline, 'inline'), // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
    // TODO: the icon class is only required when a dropdown is a button
    // useKeyOnly(icon, 'icon'),
    (0, _lib.useKeyOnly)(labeled, 'labeled'), (0, _lib.useKeyOnly)(item, 'item'), (0, _lib.useKeyOnly)(multiple, 'multiple'), (0, _lib.useKeyOnly)(search, 'search'), (0, _lib.useKeyOnly)(selection, 'selection'), (0, _lib.useKeyOnly)(simple, 'simple'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), (0, _lib.useKeyOnly)(upward, 'upward'), (0, _lib.useKeyOrValueAndKey)(pointing, 'pointing'), 'dropdown', className);
    var rest = (0, _lib.getUnhandledProps)(Dropdown, this.props);
    var ElementType = (0, _lib.getElementType)(Dropdown, this.props);
    var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);
    return /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
      innerRef: this.ref
    }, /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, ariaOptions, {
      className: classes,
      onBlur: this.handleBlur,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      onMouseDown: this.handleMouseDown,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      tabIndex: this.computeTabIndex()
    }), this.renderLabels(), this.renderSearchInput(), this.renderSearchSizer(), trigger || this.renderText(), _Icon.default.create(icon, {
      overrideProps: this.handleIconOverrides,
      autoGenerateKey: false
    }), this.renderMenu(), open && /*#__PURE__*/_react.default.createElement(_eventStack.default, {
      name: "keydown",
      on: this.closeOnEscape
    }), open && /*#__PURE__*/_react.default.createElement(_eventStack.default, {
      name: "click",
      on: this.closeOnDocumentClick
    }), focus && /*#__PURE__*/_react.default.createElement(_eventStack.default, {
      name: "keydown",
      on: this.removeItemOnBackspace
    })));
  };

  return Dropdown;
}(_lib.ModernAutoControlledComponent);

exports.default = Dropdown;
Dropdown.handledProps = ["additionLabel", "additionPosition", "allowAdditions", "as", "basic", "button", "children", "className", "clearable", "closeOnBlur", "closeOnChange", "closeOnEscape", "compact", "deburr", "defaultOpen", "defaultSearchQuery", "defaultSelectedLabel", "defaultUpward", "defaultValue", "direction", "disabled", "error", "floating", "fluid", "header", "icon", "inline", "item", "labeled", "lazyLoad", "loading", "minCharacters", "multiple", "noResultsMessage", "onAddItem", "onBlur", "onChange", "onClick", "onClose", "onFocus", "onLabelClick", "onMouseDown", "onOpen", "onSearchChange", "open", "openOnFocus", "options", "placeholder", "pointing", "renderLabel", "scrolling", "search", "searchInput", "searchQuery", "selectOnBlur", "selectOnNavigation", "selectedLabel", "selection", "simple", "tabIndex", "text", "trigger", "upward", "value", "wrapSelection"];
Dropdown.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Label prefixed to an option added by a user. */
  additionLabel: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: _propTypes.default.oneOf(['top', 'bottom']),

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: _lib.customPropTypes.every([_lib.customPropTypes.demand(['options', 'selection', 'search']), _propTypes.default.bool]),

  /** A Dropdown can reduce its complexity. */
  basic: _propTypes.default.bool,

  /** Format the Dropdown to appear as a button. */
  button: _propTypes.default.bool,

  /** Primary content. */
  children: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['options', 'selection']), _lib.customPropTypes.givenProps({
    children: _propTypes.default.any.isRequired
  }, _propTypes.default.element.isRequired)]),

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Using the clearable setting will let users remove their selection from a dropdown. */
  clearable: _propTypes.default.bool,

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: _propTypes.default.bool,

  /** Whether or not the dropdown should close when the escape key is pressed. */
  closeOnEscape: _propTypes.default.bool,

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: _propTypes.default.bool,

  /** A compact dropdown has no minimum width. */
  compact: _propTypes.default.bool,

  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: _propTypes.default.bool,

  /** Initial value of open. */
  defaultOpen: _propTypes.default.bool,

  /** Initial value of searchQuery. */
  defaultSearchQuery: _propTypes.default.string,

  /** Currently selected label in multi-select. */
  defaultSelectedLabel: _lib.customPropTypes.every([_lib.customPropTypes.demand(['multiple']), _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])]),

  /** Initial value of upward. */
  defaultUpward: _propTypes.default.bool,

  /** Initial value or value array if multiple. */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.bool, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool]))]),

  /** A dropdown menu can open to the left or to the right. */
  direction: _propTypes.default.oneOf(['left', 'right']),

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: _propTypes.default.bool,

  /** An errored dropdown can alert a user to a problem. */
  error: _propTypes.default.bool,

  /** A dropdown menu can contain floated content. */
  floating: _propTypes.default.bool,

  /** A dropdown can take the full width of its parent */
  fluid: _propTypes.default.bool,

  /** A dropdown menu can contain a header. */
  header: _propTypes.default.node,

  /** Shorthand for Icon. */
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.object]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: _propTypes.default.bool,

  /** A dropdown can be formatted as a Menu item. */
  item: _propTypes.default.bool,

  /** A dropdown can be labeled. */
  labeled: _propTypes.default.bool,

  /** A dropdown can defer rendering its options until it is open. */
  lazyLoad: _propTypes.default.bool,

  /** A dropdown can show that it is currently loading data. */
  loading: _propTypes.default.bool,

  /** The minimum characters for a search to begin showing results. */
  minCharacters: _propTypes.default.number,

  /** A selection dropdown can allow multiple selections. */
  multiple: _propTypes.default.bool,

  /** Message to display when there are no results. */
  noResultsMessage: _propTypes.default.node,

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: _propTypes.default.func,

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: _propTypes.default.func,

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: _propTypes.default.func,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: _propTypes.default.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: _propTypes.default.func,

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: _propTypes.default.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: _propTypes.default.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: _propTypes.default.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of searchQuery.
   */
  onSearchChange: _propTypes.default.func,

  /** Controls whether or not the dropdown menu is displayed. */
  open: _propTypes.default.bool,

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: _propTypes.default.bool,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes.default.arrayOf(_propTypes.default.shape(_DropdownItem.default.propTypes))]),

  /** Placeholder text. */
  placeholder: _propTypes.default.string,

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'])]),

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: _propTypes.default.func,

  /** A dropdown can have its menu scroll. */
  scrolling: _propTypes.default.bool,

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func]),

  /** A shorthand for a search input. */
  searchInput: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.node, _propTypes.default.object]),

  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: _propTypes.default.string,
  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: _propTypes.default.bool,

  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: _propTypes.default.bool,

  /** Currently selected label in multi-select. */
  selectedLabel: _lib.customPropTypes.every([_lib.customPropTypes.demand(['multiple']), _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])]),

  /** A dropdown can be used to select between choices in a form. */
  selection: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _lib.customPropTypes.demand(['options']), _propTypes.default.bool]),

  /** A simple dropdown can open without Javascript. */
  simple: _propTypes.default.bool,

  /** A dropdown can receive focus. */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** The text displayed in the dropdown, usually for the active item. */
  text: _propTypes.default.string,

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['selection', 'text']), _propTypes.default.node]),

  /** Current value or value array if multiple. Creates a controlled component. */
  value: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string, _propTypes.default.number]))]),

  /** Controls whether the dropdown will open upward. */
  upward: _propTypes.default.bool,

  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection: _propTypes.default.bool
} : {};
Dropdown.defaultProps = {
  additionLabel: 'Add ',
  additionPosition: 'top',
  closeOnBlur: true,
  closeOnEscape: true,
  deburr: false,
  icon: 'dropdown',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  openOnFocus: true,
  renderLabel: renderItemContent,
  searchInput: 'text',
  selectOnBlur: true,
  selectOnNavigation: true,
  wrapSelection: true
};
Dropdown.autoControlledProps = ['open', 'searchQuery', 'selectedLabel', 'value', 'upward'];
Dropdown.Divider = _DropdownDivider.default;
Dropdown.Header = _DropdownHeader.default;
Dropdown.Item = _DropdownItem.default;
Dropdown.Menu = _DropdownMenu.default;
Dropdown.SearchInput = _DropdownSearchInput.default;
Dropdown.Text = _DropdownText.default;