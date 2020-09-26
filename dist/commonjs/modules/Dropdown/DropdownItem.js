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

var _Flag = _interopRequireDefault(require("../../elements/Flag"));

var _Icon = _interopRequireDefault(require("../../elements/Icon"));

var _Image = _interopRequireDefault(require("../../elements/Image"));

var _Label = _interopRequireDefault(require("../../elements/Label"));

/**
 * An item sub-component for Dropdown component.
 */
var DropdownItem = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(DropdownItem, _Component);

  function DropdownItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      (0, _invoke2.default)(_this.props, 'onClick', e, _this.props);
    };

    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        children = _this$props.children,
        className = _this$props.className,
        content = _this$props.content,
        disabled = _this$props.disabled,
        description = _this$props.description,
        flag = _this$props.flag,
        icon = _this$props.icon,
        image = _this$props.image,
        label = _this$props.label,
        selected = _this$props.selected,
        text = _this$props.text;
    var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(selected, 'selected'), 'item', className); // add default dropdown icon if item contains another menu

    var iconName = (0, _isNil2.default)(icon) ? _lib.childrenUtils.someByType(children, 'DropdownMenu') && 'dropdown' : icon;
    var rest = (0, _lib.getUnhandledProps)(DropdownItem, this.props);
    var ElementType = (0, _lib.getElementType)(DropdownItem, this.props);
    var ariaOptions = {
      role: 'option',
      'aria-disabled': disabled,
      'aria-checked': active,
      'aria-selected': selected
    };

    if (!_lib.childrenUtils.isNil(children)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, ariaOptions, {
        className: classes,
        onClick: this.handleClick
      }), children);
    }

    var flagElement = _Flag.default.create(flag, {
      autoGenerateKey: false
    });

    var iconElement = _Icon.default.create(iconName, {
      autoGenerateKey: false
    });

    var imageElement = _Image.default.create(image, {
      autoGenerateKey: false
    });

    var labelElement = _Label.default.create(label, {
      autoGenerateKey: false
    });

    var descriptionElement = (0, _lib.createShorthand)('span', function (val) {
      return {
        children: val
      };
    }, description, {
      defaultProps: {
        className: 'description'
      },
      autoGenerateKey: false
    });
    var textElement = (0, _lib.createShorthand)('span', function (val) {
      return {
        children: val
      };
    }, _lib.childrenUtils.isNil(content) ? text : content, {
      defaultProps: {
        className: 'text'
      },
      autoGenerateKey: false
    });
    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, ariaOptions, {
      className: classes,
      onClick: this.handleClick
    }), imageElement, iconElement, flagElement, labelElement, descriptionElement, textElement);
  };

  return DropdownItem;
}(_react.Component);

DropdownItem.handledProps = ["active", "as", "children", "className", "content", "description", "disabled", "flag", "icon", "image", "label", "onClick", "selected", "text", "value"];
DropdownItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Style as the currently chosen item. */
  active: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Additional text with less emphasis. */
  description: _lib.customPropTypes.itemShorthand,

  /** A dropdown item can be disabled. */
  disabled: _propTypes.default.bool,

  /** Shorthand for Flag. */
  flag: _lib.customPropTypes.itemShorthand,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand,

  /** Shorthand for Image. */
  image: _lib.customPropTypes.itemShorthand,

  /** Shorthand for Label. */
  label: _lib.customPropTypes.itemShorthand,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes.default.func,

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: _propTypes.default.bool,

  /** Display text. */
  text: _lib.customPropTypes.contentShorthand,

  /** Stored value. */
  value: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number, _propTypes.default.string])
} : {};
DropdownItem.create = (0, _lib.createShorthandFactory)(DropdownItem, function (opts) {
  return opts;
});
var _default = DropdownItem;
exports.default = _default;