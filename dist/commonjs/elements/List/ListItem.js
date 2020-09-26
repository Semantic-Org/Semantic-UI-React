"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Image = _interopRequireDefault(require("../Image"));

var _ListContent = _interopRequireDefault(require("./ListContent"));

var _ListDescription = _interopRequireDefault(require("./ListDescription"));

var _ListHeader = _interopRequireDefault(require("./ListHeader"));

var _ListIcon = _interopRequireDefault(require("./ListIcon"));

/**
 * A list item can contain a set of items.
 */
var ListItem = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(ListItem, _Component);

  function ListItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var disabled = _this.props.disabled;
      if (!disabled) (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = ListItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        children = _this$props.children,
        className = _this$props.className,
        content = _this$props.content,
        description = _this$props.description,
        disabled = _this$props.disabled,
        header = _this$props.header,
        icon = _this$props.icon,
        image = _this$props.image,
        value = _this$props.value;
    var ElementType = (0, _lib.getElementType)(ListItem, this.props);
    var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(ElementType !== 'li', 'item'), className);
    var rest = (0, _lib.getUnhandledProps)(ListItem, this.props);
    var valueProp = ElementType === 'li' ? {
      value: value
    } : {
      'data-value': value
    };

    if (!_lib.childrenUtils.isNil(children)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), children);
    }

    var iconElement = _ListIcon.default.create(icon, {
      autoGenerateKey: false
    });

    var imageElement = _Image.default.create(image, {
      autoGenerateKey: false
    }); // See description of `content` prop for explanation about why this is necessary.


    if (! /*#__PURE__*/(0, _react.isValidElement)(content) && (0, _isPlainObject2.default)(content)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), iconElement || imageElement, _ListContent.default.create(content, {
        autoGenerateKey: false,
        defaultProps: {
          header: header,
          description: description
        }
      }));
    }

    var headerElement = _ListHeader.default.create(header, {
      autoGenerateKey: false
    });

    var descriptionElement = _ListDescription.default.create(description, {
      autoGenerateKey: false
    });

    if (iconElement || imageElement) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, valueProp, {
        role: "listitem",
        className: classes,
        onClick: this.handleClick
      }, rest), iconElement || imageElement, (content || headerElement || descriptionElement) && /*#__PURE__*/_react.default.createElement(_ListContent.default, null, headerElement, descriptionElement, content));
    }

    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, valueProp, {
      role: "listitem",
      className: classes,
      onClick: this.handleClick
    }, rest), headerElement, descriptionElement, content);
  };

  return ListItem;
}(_react.Component);

ListItem.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "header", "icon", "image", "onClick", "value"];
ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** A list item can active. */
  active: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /**
   * Shorthand for primary content.
   *
   * Heads up!
   *
   * This is handled slightly differently than the typical `content` prop since
   * the wrapping ListContent is not used when there's no icon or image.
   *
   * If you pass content as:
   * - an element/literal, it's treated as the sibling node to
   * header/description (whether wrapped in Item.Content or not).
   * - a props object, it forces the presence of Item.Content and passes those
   * props to it. If you pass a content prop within that props object, it
   * will be treated as the sibling node to header/description.
   */
  content: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ListDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** A list item can disabled. */
  disabled: _propTypes.default.bool,

  /** Shorthand for ListHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** Shorthand for ListIcon. */
  icon: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['image']), _lib.customPropTypes.itemShorthand]),

  /** Shorthand for Image. */
  image: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['icon']), _lib.customPropTypes.itemShorthand]),

  /** A ListItem can be clicked */
  onClick: _propTypes.default.func,

  /** A value for an ordered list. */
  value: _propTypes.default.string
} : {};
ListItem.create = (0, _lib.createShorthandFactory)(ListItem, function (content) {
  return {
    content: content
  };
});
var _default = ListItem;
exports.default = _default;