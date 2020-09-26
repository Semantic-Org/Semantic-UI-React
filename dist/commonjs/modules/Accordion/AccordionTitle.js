"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Icon = _interopRequireDefault(require("../../elements/Icon"));

/**
 * A title sub-component for Accordion component.
 */
var AccordionTitle = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(AccordionTitle, _Component);

  function AccordionTitle() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      return (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = AccordionTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        children = _this$props.children,
        className = _this$props.className,
        content = _this$props.content,
        icon = _this$props.icon;
    var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(active, 'active'), 'title', className);
    var rest = (0, _lib.getUnhandledProps)(AccordionTitle, this.props);
    var ElementType = (0, _lib.getElementType)(AccordionTitle, this.props);
    var iconValue = (0, _isNil2.default)(icon) ? 'dropdown' : icon;

    if (!_lib.childrenUtils.isNil(children)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }

    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes,
      onClick: this.handleClick
    }), _Icon.default.create(iconValue, {
      autoGenerateKey: false
    }), content);
  };

  return AccordionTitle;
}(_react.Component);

exports.default = AccordionTitle;
AccordionTitle.handledProps = ["active", "as", "children", "className", "content", "icon", "index", "onClick"];
AccordionTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Whether or not the title is in the open state. */
  active: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand,

  /** AccordionTitle index inside Accordion. */
  index: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func
} : {};
AccordionTitle.create = (0, _lib.createShorthandFactory)(AccordionTitle, function (content) {
  return {
    content: content
  };
});