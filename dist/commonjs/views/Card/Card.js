"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Image = _interopRequireDefault(require("../../elements/Image"));

var _CardContent = _interopRequireDefault(require("./CardContent"));

var _CardDescription = _interopRequireDefault(require("./CardDescription"));

var _CardGroup = _interopRequireDefault(require("./CardGroup"));

var _CardHeader = _interopRequireDefault(require("./CardHeader"));

var _CardMeta = _interopRequireDefault(require("./CardMeta"));

/**
 * A card displays site content in a manner similar to a playing card.
 */
var Card = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Card, _Component);

  function Card() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      if (onClick) onClick(e, _this.props);
    };

    return _this;
  }

  var _proto = Card.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        centered = _this$props.centered,
        children = _this$props.children,
        className = _this$props.className,
        color = _this$props.color,
        content = _this$props.content,
        description = _this$props.description,
        extra = _this$props.extra,
        fluid = _this$props.fluid,
        header = _this$props.header,
        href = _this$props.href,
        image = _this$props.image,
        link = _this$props.link,
        meta = _this$props.meta,
        onClick = _this$props.onClick,
        raised = _this$props.raised;
    var classes = (0, _clsx.default)('ui', color, (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOnly)(raised, 'raised'), 'card', className);
    var rest = (0, _lib.getUnhandledProps)(Card, this.props);
    var ElementType = (0, _lib.getElementType)(Card, this.props, function () {
      if (onClick) return 'a';
    });

    if (!_lib.childrenUtils.isNil(children)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), children);
    }

    if (!_lib.childrenUtils.isNil(content)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes,
        href: href,
        onClick: this.handleClick
      }), content);
    }

    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes,
      href: href,
      onClick: this.handleClick
    }), _Image.default.create(image, {
      autoGenerateKey: false,
      defaultProps: {
        ui: false,
        wrapped: true
      }
    }), (description || header || meta) && /*#__PURE__*/_react.default.createElement(_CardContent.default, {
      description: description,
      header: header,
      meta: meta
    }), extra && /*#__PURE__*/_react.default.createElement(_CardContent.default, {
      extra: true
    }, extra));
  };

  return Card;
}(_react.Component);

exports.default = Card;
Card.handledProps = ["as", "centered", "children", "className", "color", "content", "description", "extra", "fluid", "header", "href", "image", "link", "meta", "onClick", "raised"];
Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** A Card can center itself inside its container. */
  centered: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** A Card can be formatted to display different colors. */
  color: _propTypes.default.oneOf(_lib.SUI.COLORS),

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Shorthand for CardDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** Shorthand for primary content of CardContent. */
  extra: _lib.customPropTypes.contentShorthand,

  /** A Card can be formatted to take up the width of its container. */
  fluid: _propTypes.default.bool,

  /** Shorthand for CardHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: _propTypes.default.string,

  /** A card can contain an Image component. */
  image: _lib.customPropTypes.itemShorthand,

  /** A card can be formatted to link to other content. */
  link: _propTypes.default.bool,

  /** Shorthand for CardMeta. */
  meta: _lib.customPropTypes.itemShorthand,

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func,

  /** A Card can be formatted to raise above the page. */
  raised: _propTypes.default.bool
} : {};
Card.Content = _CardContent.default;
Card.Description = _CardDescription.default;
Card.Group = _CardGroup.default;
Card.Header = _CardHeader.default;
Card.Meta = _CardMeta.default;