"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Label = _interopRequireDefault(require("../../elements/Label"));

var _Checkbox = _interopRequireDefault(require("../../modules/Checkbox"));

var _Radio = _interopRequireDefault(require("../../addons/Radio"));

/**
 * A field is a form element containing a label and an input.
 * @see Form
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Radio
 * @see Select
 * @see Visibility
 */
function FormField(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      control = props.control,
      disabled = props.disabled,
      error = props.error,
      inline = props.inline,
      label = props.label,
      required = props.required,
      type = props.type,
      width = props.width,
      id = props.id;
  var classes = (0, _clsx.default)((0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOnly)(required, 'required'), (0, _lib.useWidthProp)(width, 'wide'), 'field', className);
  var rest = (0, _lib.getUnhandledProps)(FormField, props);
  var ElementType = (0, _lib.getElementType)(FormField, props);
  var errorPointing = (0, _get2.default)(error, 'pointing', 'above');

  var errorLabel = _Label.default.create(error, {
    autoGenerateKey: false,
    defaultProps: {
      prompt: true,
      pointing: errorPointing,
      id: id ? id + "-error-message" : undefined,
      role: 'alert',
      'aria-atomic': true
    }
  });

  var errorLabelBefore = (errorPointing === 'below' || errorPointing === 'right') && errorLabel;
  var errorLabelAfter = (errorPointing === 'above' || errorPointing === 'left') && errorLabel; // ----------------------------------------
  // No Control
  // ----------------------------------------

  if ((0, _isNil2.default)(control)) {
    if ((0, _isNil2.default)(label)) {
      return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes,
        id: id
      }), _lib.childrenUtils.isNil(children) ? content : children);
    }

    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes,
      id: id
    }), errorLabelBefore, (0, _lib.createHTMLLabel)(label, {
      autoGenerateKey: false
    }), errorLabelAfter);
  } // ----------------------------------------
  // Checkbox/Radio Control
  // ----------------------------------------


  var ariaDescribedBy = id && error ? id + "-error-message" : null;
  var ariaAttrs = {
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': error ? true : undefined
  };
  var controlProps = (0, _extends2.default)({}, rest, {
    content: content,
    children: children,
    disabled: disabled,
    required: required,
    type: type,
    id: id
  }); // wrap HTML checkboxes/radios in the label

  if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
    return /*#__PURE__*/_react.default.createElement(ElementType, {
      className: classes
    }, /*#__PURE__*/_react.default.createElement("label", null, errorLabelBefore, /*#__PURE__*/(0, _react.createElement)(control, (0, _extends2.default)({}, ariaAttrs, controlProps)), " ", label, errorLabelAfter));
  } // pass label prop to controls that support it


  if (control === _Checkbox.default || control === _Radio.default) {
    return /*#__PURE__*/_react.default.createElement(ElementType, {
      className: classes
    }, errorLabelBefore, /*#__PURE__*/(0, _react.createElement)(control, (0, _extends2.default)({}, ariaAttrs, controlProps, {
      label: label
    })), errorLabelAfter);
  } // ----------------------------------------
  // Other Control
  // ----------------------------------------


  return /*#__PURE__*/_react.default.createElement(ElementType, {
    className: classes
  }, (0, _lib.createHTMLLabel)(label, {
    defaultProps: {
      htmlFor: id
    },
    autoGenerateKey: false
  }), errorLabelBefore, /*#__PURE__*/(0, _react.createElement)(control, (0, _extends2.default)({}, ariaAttrs, controlProps)), errorLabelAfter);
}

FormField.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "id", "inline", "label", "required", "type", "width"];
FormField.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: _lib.customPropTypes.some([_propTypes.default.func, _propTypes.default.oneOf(['button', 'input', 'select', 'textarea'])]),

  /** Individual fields may be disabled. */
  disabled: _propTypes.default.bool,

  /** Individual fields may display an error state along with a message. */
  error: _propTypes.default.oneOfType([_propTypes.default.bool, _lib.customPropTypes.itemShorthand]),

  /** The id of the control */
  id: _propTypes.default.string,

  /** A field can have its label next to instead of above it. */
  inline: _propTypes.default.bool,
  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`

  /** Mutually exclusive with children. */
  label: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.object]),

  /** A field can show that input is mandatory. */
  required: _propTypes.default.bool,

  /** Passed to the control component (i.e. <input type='password' />) */
  type: _lib.customPropTypes.every([_lib.customPropTypes.demand(['control']) // don't strictly validate HTML types
  // a control might be passed that uses a `type` prop with unknown values
  // let the control validate if for us
  ]),

  /** A field can specify its width in grid columns */
  width: _propTypes.default.oneOf(_lib.SUI.WIDTHS)
} : {};
var _default = FormField;
exports.default = _default;