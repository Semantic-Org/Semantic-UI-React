"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

/**
 * A search item sub-component for Dropdown component.
 */
var DropdownSearchInput = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(DropdownSearchInput, _Component);

  function DropdownSearchInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleChange = function (e) {
      var value = (0, _get2.default)(e, 'target.value');
      (0, _invoke2.default)(_this.props, 'onChange', e, (0, _extends2.default)({}, _this.props, {
        value: value
      }));
    };

    return _this;
  }

  var _proto = DropdownSearchInput.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        autoComplete = _this$props.autoComplete,
        className = _this$props.className,
        tabIndex = _this$props.tabIndex,
        type = _this$props.type,
        value = _this$props.value;
    var classes = (0, _clsx.default)('search', className);
    var rest = (0, _lib.getUnhandledProps)(DropdownSearchInput, this.props);
    return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, rest, {
      "aria-autocomplete": "list",
      autoComplete: autoComplete,
      className: classes,
      onChange: this.handleChange,
      tabIndex: tabIndex,
      type: type,
      value: value
    }));
  };

  return DropdownSearchInput;
}(_react.Component);

DropdownSearchInput.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
DropdownSearchInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** An input can have the auto complete. */
  autoComplete: _propTypes.default.string,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** An input can receive focus. */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** The HTML input type. */
  type: _propTypes.default.string,

  /** Stored value. */
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
} : {};
DropdownSearchInput.defaultProps = {
  autoComplete: 'off',
  type: 'text'
};
DropdownSearchInput.create = (0, _lib.createShorthandFactory)(DropdownSearchInput, function (type) {
  return {
    type: type
  };
});
var _default = DropdownSearchInput;
exports.default = _default;