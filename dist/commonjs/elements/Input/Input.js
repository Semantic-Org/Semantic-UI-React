"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _reactComponentRef = require("@fluentui/react-component-ref");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Button = _interopRequireDefault(require("../Button"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Label = _interopRequireDefault(require("../Label"));

/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */
var Input = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Input, _Component);

  function Input() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.inputRef = /*#__PURE__*/(0, _react.createRef)();

    _this.computeIcon = function () {
      var _this$props = _this.props,
          loading = _this$props.loading,
          icon = _this$props.icon;
      if (!(0, _isNil2.default)(icon)) return icon;
      if (loading) return 'spinner';
    };

    _this.computeTabIndex = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!(0, _isNil2.default)(tabIndex)) return tabIndex;
      if (disabled) return -1;
    };

    _this.focus = function () {
      return _this.inputRef.current.focus();
    };

    _this.select = function () {
      return _this.inputRef.current.select();
    };

    _this.handleChange = function (e) {
      var value = (0, _get2.default)(e, 'target.value');
      (0, _invoke2.default)(_this.props, 'onChange', e, (0, _extends2.default)({}, _this.props, {
        value: value
      }));
    };

    _this.handleChildOverrides = function (child, defaultProps) {
      return (0, _extends2.default)({}, defaultProps, child.props, {
        ref: function ref(c) {
          (0, _reactComponentRef.handleRef)(child.ref, c);
          _this.inputRef.current = c;
        }
      });
    };

    _this.partitionProps = function () {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          type = _this$props3.type;

      var tabIndex = _this.computeTabIndex();

      var unhandled = (0, _lib.getUnhandledProps)(Input, _this.props);

      var _partitionHTMLProps = (0, _lib.partitionHTMLProps)(unhandled),
          htmlInputProps = _partitionHTMLProps[0],
          rest = _partitionHTMLProps[1];

      return [(0, _extends2.default)({}, htmlInputProps, {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onChange: _this.handleChange,
        ref: _this.inputRef
      }), rest];
    };

    return _this;
  }

  var _proto = Input.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        action = _this$props4.action,
        actionPosition = _this$props4.actionPosition,
        children = _this$props4.children,
        className = _this$props4.className,
        disabled = _this$props4.disabled,
        error = _this$props4.error,
        fluid = _this$props4.fluid,
        focus = _this$props4.focus,
        icon = _this$props4.icon,
        iconPosition = _this$props4.iconPosition,
        input = _this$props4.input,
        inverted = _this$props4.inverted,
        label = _this$props4.label,
        labelPosition = _this$props4.labelPosition,
        loading = _this$props4.loading,
        size = _this$props4.size,
        transparent = _this$props4.transparent,
        type = _this$props4.type;
    var classes = (0, _clsx.default)('ui', size, (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(transparent, 'transparent'), (0, _lib.useValueAndKey)(actionPosition, 'action') || (0, _lib.useKeyOnly)(action, 'action'), (0, _lib.useValueAndKey)(iconPosition, 'icon') || (0, _lib.useKeyOnly)(icon || loading, 'icon'), (0, _lib.useValueAndKey)(labelPosition, 'labeled') || (0, _lib.useKeyOnly)(label, 'labeled'), 'input', className);
    var ElementType = (0, _lib.getElementType)(Input, this.props);

    var _this$partitionProps = this.partitionProps(),
        htmlInputProps = _this$partitionProps[0],
        rest = _this$partitionProps[1]; // Render with children
    // ----------------------------------------


    if (!_lib.childrenUtils.isNil(children)) {
      // add htmlInputProps to the `<input />` child
      var childElements = (0, _map2.default)(_react.Children.toArray(children), function (child) {
        if (child.type !== 'input') return child;
        return /*#__PURE__*/(0, _react.cloneElement)(child, _this2.handleChildOverrides(child, htmlInputProps));
      });
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes
      }), childElements);
    } // Render Shorthand
    // ----------------------------------------


    var actionElement = _Button.default.create(action, {
      autoGenerateKey: false
    });

    var labelElement = _Label.default.create(label, {
      defaultProps: {
        className: (0, _clsx.default)('label', // add 'left|right corner'
        (0, _includes2.default)(labelPosition, 'corner') && labelPosition)
      },
      autoGenerateKey: false
    });

    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes
    }), actionPosition === 'left' && actionElement, labelPosition !== 'right' && labelElement, (0, _lib.createHTMLInput)(input || type, {
      defaultProps: htmlInputProps,
      autoGenerateKey: false
    }), _Icon.default.create(this.computeIcon(), {
      autoGenerateKey: false
    }), actionPosition !== 'left' && actionElement, labelPosition === 'right' && labelElement);
  };

  return Input;
}(_react.Component);

Input.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: _propTypes.default.oneOfType([_propTypes.default.bool, _lib.customPropTypes.itemShorthand]),

  /** An action can appear along side an Input on the left or right. */
  actionPosition: _propTypes.default.oneOf(['left']),

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** An Input field can show that it is disabled. */
  disabled: _propTypes.default.bool,

  /** An Input field can show the data contains errors. */
  error: _propTypes.default.bool,

  /** Take on the size of its container. */
  fluid: _propTypes.default.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: _propTypes.default.bool,

  /** Optional Icon to display inside the Input. */
  icon: _propTypes.default.oneOfType([_propTypes.default.bool, _lib.customPropTypes.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: _propTypes.default.oneOf(['left']),

  /** Shorthand for creating the HTML Input. */
  input: _lib.customPropTypes.itemShorthand,

  /** Format to appear on dark backgrounds. */
  inverted: _propTypes.default.bool,

  /** Optional Label to display along side the Input. */
  label: _lib.customPropTypes.itemShorthand,

  /** A Label can appear outside an Input on the left or right. */
  labelPosition: _propTypes.default.oneOf(['left', 'right', 'left corner', 'right corner']),

  /** An Icon Input field can show that it is currently loading data. */
  loading: _propTypes.default.bool,

  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: _propTypes.default.func,

  /** An Input can vary in size. */
  size: _propTypes.default.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),

  /** An Input can receive focus. */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Transparent Input has no background. */
  transparent: _propTypes.default.bool,

  /** The HTML input type. */
  type: _propTypes.default.string
} : {};
Input.defaultProps = {
  type: 'text'
};
Input.create = (0, _lib.createShorthandFactory)(Input, function (type) {
  return {
    type: type
  };
});
var _default = Input;
exports.default = _default;