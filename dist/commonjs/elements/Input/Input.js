'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlInputPropNames = undefined;

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('../../lib');

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../../elements/Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var htmlInputPropNames = exports.htmlInputPropNames = [
// REACT
'selected', 'defaultValue', 'defaultChecked',

// LIMITED HTML PROPS
'autoComplete', 'autoFocus', 'checked', 'form', 'max', 'maxLength', 'min', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'type', 'value',

// Heads Up!
// Do not pass disabled, it duplicates the SUI CSS opacity rule.
// 'disabled',

// EVENTS
// keyboard
'onKeyDown', 'onKeyPress', 'onKeyUp',

// focus
'onFocus', 'onBlur',

// form
'onChange', 'onInput',

// mouse
'onClick', 'onContextMenu', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',

// selection
'onSelect',

// touch
'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart'];

var _meta = {
  name: 'Input',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    actionPosition: ['left'],
    iconPosition: ['left'],
    labelPosition: ['left', 'right', 'left corner', 'right corner'],
    size: _lib.SUI.SIZES
  }
};

/**
 * An Input is a field used to elicit a response from a user
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var value = (0, _get3.default)(e, 'target.value');

      var onChange = _this.props.onChange;

      if (onChange) onChange(e, _extends({}, _this.props, { value: value }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          actionPosition = _props.actionPosition,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          error = _props.error,
          focus = _props.focus,
          fluid = _props.fluid,
          icon = _props.icon,
          iconPosition = _props.iconPosition,
          inverted = _props.inverted,
          label = _props.label,
          labelPosition = _props.labelPosition,
          loading = _props.loading,
          onChange = _props.onChange,
          size = _props.size,
          type = _props.type,
          input = _props.input,
          transparent = _props.transparent;


      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useValueAndKey)(actionPosition, 'action') || (0, _lib.useKeyOnly)(action, 'action'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useValueAndKey)(labelPosition, 'labeled') || (0, _lib.useKeyOnly)(label, 'labeled'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(transparent, 'transparent'), (0, _lib.useValueAndKey)(iconPosition, 'icon') || (0, _lib.useKeyOnly)(icon, 'icon'), className, 'input');
      var unhandled = (0, _lib.getUnhandledProps)(Input, this.props);

      var rest = (0, _omit3.default)(unhandled, htmlInputPropNames);

      var htmlInputProps = (0, _pick3.default)(this.props, htmlInputPropNames);
      if (onChange) htmlInputProps.onChange = this.handleChange;

      var ElementType = (0, _lib.getElementType)(Input, this.props);

      if (children) {
        // add htmlInputProps to the `<input />` child
        var childElements = _react.Children.map(children, function (child) {
          if (child.type !== 'input') return child;

          return (0, _react.cloneElement)(child, _extends({}, htmlInputProps, child.props));
        });

        return _react2.default.createElement(
          ElementType,
          _extends({}, rest, { className: classes }),
          childElements
        );
      }

      var actionElement = _Button2.default.create(action, function (elProps) {
        return {
          className: (0, _classnames2.default)(
          // all action components should have the button className
          !(0, _includes3.default)(elProps.className, 'button') && 'button')
        };
      });
      var iconElement = _Icon2.default.create(icon);
      var labelElement = _Label2.default.create(label, function (elProps) {
        return {
          className: (0, _classnames2.default)(
          // all label components should have the label className
          !(0, _includes3.default)(elProps.className, 'label') && 'label',
          // add 'left|right corner'
          (0, _includes3.default)(labelPosition, 'corner') && labelPosition)
        };
      });

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes }),
        actionPosition === 'left' && actionElement,
        iconPosition === 'left' && iconElement,
        labelPosition !== 'right' && labelElement,
        (0, _lib.createHTMLInput)(input || type, htmlInputProps),
        actionPosition !== 'left' && actionElement,
        iconPosition !== 'left' && iconElement,
        labelPosition === 'right' && labelElement
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An Input can be formatted to alert the user to an action they may perform */
  action: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),

  /** An action can appear along side an Input on the left or right */
  actionPosition: _react.PropTypes.oneOf(_meta.props.actionPosition),

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** An Input field can show that it is disabled */
  disabled: _react.PropTypes.bool,

  /** An Input field can show the data contains errors */
  error: _react.PropTypes.bool,

  /** An Input field can show a user is currently interacting with it */
  focus: _react.PropTypes.bool,

  /** Take on the size of it's container */
  fluid: _react.PropTypes.bool,

  /** Optional Icon to display inside the Input */
  icon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right */
  iconPosition: _react.PropTypes.oneOf(_meta.props.iconPosition),

  /** Format to appear on dark backgrounds */
  inverted: _react.PropTypes.bool,

  /** Shorthand for creating the HTML Input */
  input: _lib.customPropTypes.itemShorthand,

  /** Optional Label to display along side the Input */
  label: _lib.customPropTypes.itemShorthand,

  /** A Label can appear outside an Input on the left or right */
  labelPosition: _react.PropTypes.oneOf(_meta.props.labelPosition),

  /** An Icon Input field can show that it is currently loading data */
  loading: _react.PropTypes.bool,

  /**
   * Called on change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: _react.PropTypes.func,

  /** An Input can vary in size */
  size: _react.PropTypes.oneOf(_meta.props.size),

  /** Transparent Input has no background */
  transparent: _react.PropTypes.bool,

  /** The HTML input type */
  type: _react.PropTypes.string
};
Input.defaultProps = {
  type: 'text'
};
Input._meta = _meta;
exports.default = Input;