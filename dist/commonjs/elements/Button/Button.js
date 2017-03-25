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

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../Label/Label');

var _Label2 = _interopRequireDefault(_Label);

var _ButtonContent = require('./ButtonContent');

var _ButtonContent2 = _interopRequireDefault(_ButtonContent);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _ButtonOr = require('./ButtonOr');

var _ButtonOr2 = _interopRequireDefault(_ButtonOr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var debug = (0, _lib.makeDebugger)('button');

var _meta = {
  name: 'Button',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    animated: ['fade', 'vertical'],
    attached: ['left', 'right', 'top', 'bottom'],
    color: [].concat(_toConsumableArray(_lib.SUI.COLORS), ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube']),
    floated: _lib.SUI.FLOATS,
    labelPosition: ['right', 'left'],
    size: _lib.SUI.SIZES
  }
};

/**
 * A Button indicates a possible user action
 * @see Form
 * @see Icon
 * @see Label
 */

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;


      if (disabled) {
        e.preventDefault();
        return;
      }

      if (onClick) onClick(e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          animated = _props.animated,
          attached = _props.attached,
          basic = _props.basic,
          children = _props.children,
          circular = _props.circular,
          className = _props.className,
          color = _props.color,
          compact = _props.compact,
          content = _props.content,
          disabled = _props.disabled,
          floated = _props.floated,
          fluid = _props.fluid,
          icon = _props.icon,
          inverted = _props.inverted,
          label = _props.label,
          labelPosition = _props.labelPosition,
          loading = _props.loading,
          negative = _props.negative,
          positive = _props.positive,
          primary = _props.primary,
          secondary = _props.secondary,
          size = _props.size,
          toggle = _props.toggle;


      var labeledClasses = (0, _classnames2.default)((0, _lib.useKeyOrValueAndKey)(labelPosition || !!label, 'labeled'));

      var baseClasses = (0, _classnames2.default)(color, size, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOrValueAndKey)(animated, 'animated'), (0, _lib.useKeyOrValueAndKey)(attached, 'attached'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(compact, 'compact'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useValueAndKey)(floated, 'floated'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(icon === true || icon && (labelPosition || !children && !content), 'icon'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(negative, 'negative'), (0, _lib.useKeyOnly)(positive, 'positive'), (0, _lib.useKeyOnly)(primary, 'primary'), (0, _lib.useKeyOnly)(secondary, 'secondary'), (0, _lib.useKeyOnly)(toggle, 'toggle'));
      var rest = (0, _lib.getUnhandledProps)(Button, this.props);
      var ElementType = (0, _lib.getElementType)(Button, this.props, function () {
        if (label || attached) return 'div';
      });
      var tabIndex = ElementType === 'div' ? 0 : undefined;

      if (children) {
        var _classes = (0, _classnames2.default)('ui', baseClasses, labeledClasses, 'button', className);
        debug('render children:', { classes: _classes });
        return _react2.default.createElement(
          ElementType,
          _extends({}, rest, { className: _classes, tabIndex: tabIndex, onClick: this.handleClick }),
          children
        );
      }

      if (label) {
        var _classes2 = (0, _classnames2.default)('ui', baseClasses, 'button', className);
        var containerClasses = (0, _classnames2.default)('ui', labeledClasses, 'button', className);
        debug('render label:', { classes: _classes2, containerClasses: containerClasses }, this.props);
        var labelElement = _Label2.default.create(label, {
          basic: true,
          pointing: labelPosition === 'left' ? 'right' : 'left'
        });
        return _react2.default.createElement(
          ElementType,
          _extends({}, rest, { className: containerClasses, onClick: this.handleClick }),
          labelPosition === 'left' && labelElement,
          _react2.default.createElement(
            'button',
            { className: _classes2 },
            _Icon2.default.create(icon),
            ' ',
            content
          ),
          (labelPosition === 'right' || !labelPosition) && labelElement
        );
      }

      if (icon && !label) {
        var _classes3 = (0, _classnames2.default)('ui', labeledClasses, baseClasses, 'button', className);
        debug('render icon && !label:', { classes: _classes3 });
        return _react2.default.createElement(
          ElementType,
          _extends({}, rest, { className: _classes3, tabIndex: tabIndex, onClick: this.handleClick }),
          _Icon2.default.create(icon),
          ' ',
          content
        );
      }

      var classes = (0, _classnames2.default)('ui', labeledClasses, baseClasses, 'button', className);
      debug('render default:', { classes: classes });

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, tabIndex: tabIndex, onClick: this.handleClick }),
        content
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A button can show it is currently the active user selection */
  active: _react.PropTypes.bool,

  /** A button can animate to show hidden content */
  animated: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.animated)]),

  /** A button can be attached to the top or bottom of other content */
  attached: _react.PropTypes.oneOf(_meta.props.attached),

  /** A basic button is less pronounced */
  basic: _react.PropTypes.bool,

  /** Primary content. */
  children: _lib.customPropTypes.every([_react.PropTypes.node, _lib.customPropTypes.disallow(['label']), _lib.customPropTypes.givenProps({
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string.isRequired, _react.PropTypes.object.isRequired, _react.PropTypes.element.isRequired])
  }, _lib.customPropTypes.disallow(['icon']))]),

  /** A button can be circular */
  circular: _react.PropTypes.bool,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A button can have different colors */
  color: _react.PropTypes.oneOf(_meta.props.color),

  /** A button can reduce its padding to fit into tighter spaces */
  compact: _react.PropTypes.bool,

  /** A button can show it is currently unable to be interacted with */
  disabled: _react.PropTypes.bool,

  /** A button can be aligned to the left or right of its container */
  floated: _react.PropTypes.oneOf(_meta.props.floated),

  /** A button can take the width of its container */
  fluid: _react.PropTypes.bool,

  /** Add an Icon by name, props object, or pass an <Icon /> */
  icon: _lib.customPropTypes.some([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.object, _react.PropTypes.element]),

  /** A button can be formatted to appear on dark backgrounds */
  inverted: _react.PropTypes.bool,

  /** A labeled button can format a Label or Icon to appear on the left or right */
  labelPosition: _react.PropTypes.oneOf(_meta.props.labelPosition),

  /** Add a Label by text, props object, or pass a <Label /> */
  label: _lib.customPropTypes.some([_react.PropTypes.string, _react.PropTypes.object, _react.PropTypes.element]),

  /** A button can show a loading indicator */
  loading: _react.PropTypes.bool,

  /** A button can hint towards a negative consequence */
  negative: _react.PropTypes.bool,

  /**
   * Called after user's click.
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _react.PropTypes.func,

  /** A button can hint towards a positive consequence */
  positive: _react.PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis */
  primary: _react.PropTypes.bool,

  /** A button can be formatted to show different levels of emphasis */
  secondary: _react.PropTypes.bool,

  /** A button can be formatted to toggle on and off */
  toggle: _react.PropTypes.bool,

  /** A button can have different sizes */
  size: _react.PropTypes.oneOf(_meta.props.size)
};
Button.defaultProps = {
  as: 'button'
};
Button._meta = _meta;
Button.Content = _ButtonContent2.default;
Button.Group = _ButtonGroup2.default;
Button.Or = _ButtonOr2.default;


Button.create = (0, _lib.createShorthandFactory)(Button, function (value) {
  return { content: value };
});

exports.default = Button;