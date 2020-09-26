"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _clsx = _interopRequireDefault(require("clsx"));

var _keyboardKey = _interopRequireDefault(require("keyboard-key"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

/**
 * An internal icon sub-component for Rating component
 */
var RatingIcon = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(RatingIcon, _Component);

  function RatingIcon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
    };

    _this.handleKeyUp = function (e) {
      (0, _invoke2.default)(_this.props, 'onKeyUp', e, _this.props);

      switch (_keyboardKey.default.getCode(e)) {
        case _keyboardKey.default.Enter:
        case _keyboardKey.default.Spacebar:
          e.preventDefault();
          (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
          break;

        default:
      }
    };

    _this.handleMouseEnter = function (e) {
      (0, _invoke2.default)(_this.props, 'onMouseEnter', e, _this.props);
    };

    return _this;
  }

  var _proto = RatingIcon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        className = _this$props.className,
        selected = _this$props.selected;
    var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(selected, 'selected'), 'icon', className);
    var rest = (0, _lib.getUnhandledProps)(RatingIcon, this.props);
    var ElementType = (0, _lib.getElementType)(RatingIcon, this.props);
    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes,
      onClick: this.handleClick,
      onKeyUp: this.handleKeyUp,
      onMouseEnter: this.handleMouseEnter,
      role: "radio"
    }));
  };

  return RatingIcon;
}(_react.Component);

exports.default = RatingIcon;
RatingIcon.handledProps = ["active", "as", "className", "index", "onClick", "onKeyUp", "onMouseEnter", "selected"];
RatingIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Indicates activity of an icon. */
  active: _propTypes.default.bool,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** An index of icon inside Rating. */
  index: _propTypes.default.number,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func,

  /**
   * Called on keyup.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyUp: _propTypes.default.func,

  /**
   * Called on mouseenter.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseEnter: _propTypes.default.func,

  /** Indicates selection of an icon. */
  selected: _propTypes.default.bool
} : {};
RatingIcon.defaultProps = {
  as: 'i'
};