'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Flag = require('../../elements/Flag');

var _Flag2 = _interopRequireDefault(_Flag);

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Image = require('../../elements/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Label = require('../../elements/Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An item sub-component for Dropdown component
 */
var DropdownItem = function (_Component) {
  _inherits(DropdownItem, _Component);

  function DropdownItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropdownItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          disabled = _props.disabled,
          description = _props.description,
          flag = _props.flag,
          icon = _props.icon,
          image = _props.image,
          label = _props.label,
          selected = _props.selected,
          text = _props.text;


      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(selected, 'selected'), 'item', className);
      // add default dropdown icon if item contains another menu
      var iconName = icon || _lib.childrenUtils.someByType(children, 'DropdownMenu') && 'dropdown';
      var rest = (0, _lib.getUnhandledProps)(DropdownItem, this.props);
      var ElementType = (0, _lib.getElementType)(DropdownItem, this.props);
      var ariaOptions = {
        role: 'option',
        'aria-disabled': disabled,
        'aria-checked': active,
        'aria-selected': selected
      };

      if (children) {
        return _react2.default.createElement(
          ElementType,
          _extends({}, rest, ariaOptions, { className: classes, onClick: this.handleClick }),
          children
        );
      }

      var flagElement = _Flag2.default.create(flag);
      var iconElement = _Icon2.default.create(iconName);
      var imageElement = _Image2.default.create(image);
      var labelElement = _Label2.default.create(label);
      var descriptionElement = (0, _lib.createShorthand)('span', function (val) {
        return { className: 'description', children: val };
      }, description);

      if (descriptionElement) {
        return _react2.default.createElement(
          ElementType,
          _extends({}, rest, ariaOptions, { className: classes, onClick: this.handleClick }),
          imageElement,
          iconElement,
          flagElement,
          labelElement,
          descriptionElement,
          (0, _lib.createShorthand)('span', function (val) {
            return { className: 'text', children: val };
          }, content || text)
        );
      }

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, ariaOptions, { className: classes, onClick: this.handleClick }),
        imageElement,
        iconElement,
        flagElement,
        labelElement,
        content || text
      );
    }
  }]);

  return DropdownItem;
}(_react.Component);

DropdownItem.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Style as the currently chosen item. */
  active: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** Additional text with less emphasis. */
  description: _lib.customPropTypes.itemShorthand,

  /** A dropdown item can be disabled. */
  disabled: _react.PropTypes.bool,

  /** Shorthand for Flag. */
  flag: _lib.customPropTypes.itemShorthand,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand,

  /** Shorthand for Image. */
  image: _lib.customPropTypes.itemShorthand,

  /** Shorthand for Label. */
  label: _lib.customPropTypes.itemShorthand,

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: _react.PropTypes.bool,

  /** Display text. */
  text: _lib.customPropTypes.contentShorthand,

  /** Stored value */
  value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _react.PropTypes.func
};
DropdownItem._meta = {
  name: 'DropdownItem',
  parent: 'Dropdown',
  type: _lib.META.TYPES.MODULE
};
exports.default = DropdownItem;