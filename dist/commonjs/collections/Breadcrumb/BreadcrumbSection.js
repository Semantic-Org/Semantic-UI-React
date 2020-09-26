"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

/**
 * A section sub-component for Breadcrumb component.
 */
var BreadcrumbSection = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(BreadcrumbSection, _Component);

  function BreadcrumbSection() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.computeElementType = function () {
      var _this$props = _this.props,
          link = _this$props.link,
          onClick = _this$props.onClick;
      if (link || onClick) return 'a';
    };

    _this.handleClick = function (e) {
      return (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = BreadcrumbSection.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        active = _this$props2.active,
        children = _this$props2.children,
        className = _this$props2.className,
        content = _this$props2.content,
        href = _this$props2.href;
    var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(active, 'active'), 'section', className);
    var rest = (0, _lib.getUnhandledProps)(BreadcrumbSection, this.props);
    var ElementType = (0, _lib.getElementType)(BreadcrumbSection, this.props, this.computeElementType);
    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes,
      href: href,
      onClick: this.handleClick
    }), _lib.childrenUtils.isNil(children) ? content : children);
  };

  return BreadcrumbSection;
}(_react.Component);

exports.default = BreadcrumbSection;
BreadcrumbSection.handledProps = ["active", "as", "children", "className", "content", "href", "link", "onClick"];
BreadcrumbSection.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Style as the currently active section. */
  active: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['link']), _propTypes.default.string]),

  /** Render as an `a` tag instead of a `div`. */
  link: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['href']), _propTypes.default.bool]),

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func
} : {};
BreadcrumbSection.create = (0, _lib.createShorthandFactory)(BreadcrumbSection, function (content) {
  return {
    content: content,
    link: true
  };
});