"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _keyboardKey = _interopRequireDefault(require("keyboard-key"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _lib = require("../../lib");

var _MenuItem = _interopRequireDefault(require("../../collections/Menu/MenuItem"));

/**
 * An item of a pagination.
 */
var PaginationItem = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(PaginationItem, _Component);

  function PaginationItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
    };

    _this.handleKeyDown = function (e) {
      (0, _invoke2.default)(_this.props, 'onKeyDown', e, _this.props);
      if (_keyboardKey.default.getCode(e) === _keyboardKey.default.Enter) (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
    };

    _this.handleOverrides = function () {
      return {
        onClick: _this.handleClick,
        onKeyDown: _this.handleKeyDown
      };
    };

    return _this;
  }

  var _proto = PaginationItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        type = _this$props.type;
    var disabled = this.props.disabled || type === 'ellipsisItem';
    return _MenuItem.default.create(this.props, {
      defaultProps: {
        active: active,
        'aria-current': active,
        'aria-disabled': disabled,
        disabled: disabled,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        tabIndex: disabled ? -1 : 0
      },
      overrideProps: this.handleOverrides
    });
  };

  return PaginationItem;
}(_react.Component);

PaginationItem.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
PaginationItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can be active. */
  active: _propTypes.default.bool,

  /** A pagination item can be disabled. */
  disabled: _propTypes.default.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func,

  /**
   * Called on key down.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyDown: _propTypes.default.func,

  /** A pagination should have a type. */
  type: _propTypes.default.oneOf(['ellipsisItem', 'firstItem', 'prevItem', 'pageItem', 'nextItem', 'lastItem'])
} : {};
PaginationItem.create = (0, _lib.createShorthandFactory)(PaginationItem, function (content) {
  return {
    content: content
  };
});
var _default = PaginationItem;
exports.default = _default;