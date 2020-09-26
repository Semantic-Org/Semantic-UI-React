"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _Menu = _interopRequireDefault(require("../../collections/Menu"));

var _PaginationItem = _interopRequireDefault(require("./PaginationItem"));

/**
 * A component to render a pagination.
 */
var Pagination = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Pagination, _Component);

  function Pagination() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleItemClick = function (e, _ref) {
      var nextActivePage = _ref.value;
      var prevActivePage = _this.state.activePage; // Heads up! We need the cast to the "number" type there, as `activePage` can be a string

      if (+prevActivePage === +nextActivePage) return;

      _this.setState({
        activePage: nextActivePage
      });

      (0, _invoke2.default)(_this.props, 'onPageChange', e, (0, _extends2.default)({}, _this.props, {
        activePage: nextActivePage
      }));
    };

    _this.handleItemOverrides = function (active, type, value) {
      return function (predefinedProps) {
        return {
          active: active,
          type: type,
          key: type + "-" + value,
          onClick: function onClick(e, itemProps) {
            (0, _invoke2.default)(predefinedProps, 'onClick', e, itemProps);
            if (itemProps.type !== 'ellipsisItem') _this.handleItemClick(e, itemProps);
          }
        };
      };
    };

    return _this;
  }

  var _proto = Pagination.prototype;

  _proto.getInitialAutoControlledState = function getInitialAutoControlledState() {
    return {
      activePage: 1
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        ariaLabel = _this$props['aria-label'],
        boundaryRange = _this$props.boundaryRange,
        disabled = _this$props.disabled,
        ellipsisItem = _this$props.ellipsisItem,
        siblingRange = _this$props.siblingRange,
        totalPages = _this$props.totalPages;
    var activePage = this.state.activePage;
    var items = (0, _lib.createPaginationItems)({
      activePage: activePage,
      boundaryRange: boundaryRange,
      hideEllipsis: (0, _isNil2.default)(ellipsisItem),
      siblingRange: siblingRange,
      totalPages: totalPages
    });
    var rest = (0, _lib.getUnhandledProps)(Pagination, this.props);
    return /*#__PURE__*/_react.default.createElement(_Menu.default, (0, _extends2.default)({}, rest, {
      "aria-label": ariaLabel,
      pagination: true,
      role: "navigation"
    }), (0, _map2.default)(items, function (_ref2) {
      var active = _ref2.active,
          type = _ref2.type,
          value = _ref2.value;
      return _PaginationItem.default.create(_this2.props[type], {
        defaultProps: {
          content: value,
          disabled: disabled,
          value: value
        },
        overrideProps: _this2.handleItemOverrides(active, type, value)
      });
    }));
  };

  return Pagination;
}(_lib.ModernAutoControlledComponent);

exports.default = Pagination;
Pagination.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
Pagination.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can have an aria label. */
  'aria-label': _propTypes.default.string,

  /** Initial activePage value. */
  defaultActivePage: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Index of the currently active page. */
  activePage: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Number of always visible pages at the beginning and end. */
  boundaryRange: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** A pagination can be disabled. */
  disabled: _propTypes.default.bool,

  /** A shorthand for PaginationItem. */
  ellipsisItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  firstItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  lastItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  nextItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  pageItem: _lib.customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  prevItem: _lib.customPropTypes.itemShorthand,

  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onPageChange: _propTypes.default.func,

  /** Number of always visible pages before and after the current one. */
  siblingRange: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Total number of pages. */
  totalPages: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
} : {};
Pagination.autoControlledProps = ['activePage'];
Pagination.defaultProps = {
  'aria-label': 'Pagination Navigation',
  boundaryRange: 1,
  ellipsisItem: '...',
  firstItem: {
    'aria-label': 'First item',
    content: '«'
  },
  lastItem: {
    'aria-label': 'Last item',
    content: '»'
  },
  nextItem: {
    'aria-label': 'Next item',
    content: '⟩'
  },
  pageItem: {},
  prevItem: {
    'aria-label': 'Previous item',
    content: '⟨'
  },
  siblingRange: 1
};
Pagination.Item = _PaginationItem.default;