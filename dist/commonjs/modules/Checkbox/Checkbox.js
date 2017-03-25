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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _lib.makeDebugger)('checkbox');

var _meta = {
  name: 'Checkbox',
  type: _lib.META.TYPES.MODULE,
  props: {
    type: ['checkbox', 'radio']
  }
};

/**
 * A checkbox allows a user to select a value from a small set of options, often binary
 * @see Form
 * @see Radio
 */

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.canToggle = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          radio = _this$props.radio,
          readOnly = _this$props.readOnly;
      var checked = _this.state.checked;


      return !disabled && !readOnly && !(radio && checked);
    }, _this.handleRef = function (c) {
      _this.checkboxRef = c;
    }, _this.handleClick = function (e) {
      debug('handleClick()');
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          onClick = _this$props2.onClick;
      var _this$state = _this.state,
          checked = _this$state.checked,
          indeterminate = _this$state.indeterminate;


      if (_this.canToggle()) {
        if (onClick) onClick(e, _extends({}, _this.props, { checked: !!checked, indeterminate: !!indeterminate }));
        if (onChange) onChange(e, _extends({}, _this.props, { checked: !checked, indeterminate: false }));

        _this.trySetState({ checked: !checked, indeterminate: false });
      }
    }, _this.setIndeterminate = function () {
      var indeterminate = _this.state.indeterminate;

      if (_this.checkboxRef) _this.checkboxRef.indeterminate = !!indeterminate;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setIndeterminate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setIndeterminate();
    }

    // Note: You can't directly set the indeterminate prop on the input, so we
    // need to maintain a ref to the input and set it manually whenever the
    // component updates.

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          label = _props.label,
          name = _props.name,
          radio = _props.radio,
          readOnly = _props.readOnly,
          slider = _props.slider,
          toggle = _props.toggle,
          type = _props.type,
          value = _props.value;
      var _state = this.state,
          checked = _state.checked,
          indeterminate = _state.indeterminate;


      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(checked, 'checked'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(indeterminate, 'indeterminate'),
      // auto apply fitted class to compact white space when there is no label
      // http://semantic-ui.com/modules/checkbox.html#fitted
      (0, _lib.useKeyOnly)(!label, 'fitted'), (0, _lib.useKeyOnly)(radio, 'radio'), (0, _lib.useKeyOnly)(readOnly, 'read-only'), (0, _lib.useKeyOnly)(slider, 'slider'), (0, _lib.useKeyOnly)(toggle, 'toggle'), 'checkbox', className);
      var rest = (0, _lib.getUnhandledProps)(Checkbox, this.props);
      var ElementType = (0, _lib.getElementType)(Checkbox, this.props);

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, onClick: this.handleClick, onChange: this.handleClick }),
        _react2.default.createElement('input', {
          checked: checked,
          className: 'hidden',
          name: name,
          readOnly: true,
          ref: this.handleRef,
          tabIndex: 0,
          type: type,
          value: value
        }),
        (0, _lib.createHTMLLabel)(label) || _react2.default.createElement('label', null)
      );
    }
  }]);

  return Checkbox;
}(_lib.AutoControlledComponent);

Checkbox.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Whether or not checkbox is checked. */
  checked: _react.PropTypes.bool,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** The initial value of checked. */
  defaultChecked: _react.PropTypes.bool,

  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: _react.PropTypes.bool,

  /** A checkbox can appear disabled and be unable to change states */
  disabled: _react.PropTypes.bool,

  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: _react.PropTypes.bool,

  /** Whether or not checkbox is indeterminate. */
  indeterminate: _react.PropTypes.bool,

  /** The text of the associated label element. */
  label: _lib.customPropTypes.itemShorthand,

  /** The HTML input name. */
  name: _react.PropTypes.string,

  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: _react.PropTypes.func,

  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: _react.PropTypes.func,

  /** Format as a radio element. This means it is an exclusive option.*/
  radio: _lib.customPropTypes.every([_react.PropTypes.bool, _lib.customPropTypes.disallow(['slider', 'toggle'])]),

  /** A checkbox can be read-only and unable to change states */
  readOnly: _react.PropTypes.bool,

  /** Format to emphasize the current selection state */
  slider: _lib.customPropTypes.every([_react.PropTypes.bool, _lib.customPropTypes.disallow(['radio', 'toggle'])]),

  /** Format to show an on or off choice */
  toggle: _lib.customPropTypes.every([_react.PropTypes.bool, _lib.customPropTypes.disallow(['radio', 'slider'])]),

  /** HTML input type, either checkbox or radio. */
  type: _react.PropTypes.oneOf(_meta.props.type),

  /** The HTML input value. */
  value: _react.PropTypes.string
};
Checkbox.defaultProps = {
  type: 'checkbox'
};
Checkbox.autoControlledProps = ['checked', 'indeterminate'];
Checkbox._meta = _meta;
exports.default = Checkbox;