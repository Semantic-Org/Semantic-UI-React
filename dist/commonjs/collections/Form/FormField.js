'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Checkbox = require('../../modules/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require('../../addons/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A field is a form element containing a label and an input
 * @see Form
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Radio
 * @see Select
 * @see TextArea
 */
function FormField(props) {
  var children = props.children,
      className = props.className,
      control = props.control,
      disabled = props.disabled,
      error = props.error,
      inline = props.inline,
      label = props.label,
      required = props.required,
      type = props.type,
      width = props.width;


  var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(inline, 'inline'), (0, _lib.useKeyOnly)(required, 'required'), (0, _lib.useWidthProp)(width, 'wide'), 'field', className);
  var rest = (0, _lib.getUnhandledProps)(FormField, props);
  var ElementType = (0, _lib.getElementType)(FormField, props);

  // ----------------------------------------
  // No Control
  // ----------------------------------------

  if (!control) {
    if (!label) return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );

    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      (0, _lib.createHTMLLabel)(label)
    );
  }

  // ----------------------------------------
  // Checkbox/Radio Control
  // ----------------------------------------
  var controlProps = _extends({}, rest, { children: children, required: required, type: type });

  // wrap HTML checkboxes/radios in the label
  if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
    return _react2.default.createElement(
      ElementType,
      { className: classes },
      _react2.default.createElement(
        'label',
        null,
        (0, _react.createElement)(control, controlProps),
        ' ',
        label
      )
    );
  }

  // pass label prop to controls that support it
  if (control === _Checkbox2.default || control === _Radio2.default) {
    return _react2.default.createElement(
      ElementType,
      { className: classes },
      (0, _react.createElement)(control, _extends({}, controlProps, { label: label }))
    );
  }

  // ----------------------------------------
  // Other Control
  // ----------------------------------------

  return _react2.default.createElement(
    ElementType,
    { className: classes },
    (0, _lib.createHTMLLabel)(label),
    (0, _react.createElement)(control, controlProps)
  );
}

FormField._meta = {
  name: 'FormField',
  parent: 'Form',
  type: _lib.META.TYPES.COLLECTION,
  props: {
    width: _lib.SUI.WIDTHS,
    control: ['button', 'input', 'select', 'textarea']
  }
};

FormField.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: _lib.customPropTypes.some([_react.PropTypes.func, _react.PropTypes.oneOf(FormField._meta.props.control)]),

  /** Individual fields may be disabled */
  disabled: _react.PropTypes.bool,

  /** Individual fields may display an error state */
  error: _react.PropTypes.bool,

  /** A field can have its label next to instead of above it */
  inline: _react.PropTypes.bool,

  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`
  /** Mutually exclusive with children. */
  label: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.object]),

  /** A field can show that input is mandatory.  Requires a label. */
  required: _lib.customPropTypes.every([_lib.customPropTypes.demand(['label']), _react.PropTypes.bool]),

  /** Passed to the control component (i.e. <input type='password' />) */
  type: _lib.customPropTypes.every([_lib.customPropTypes.demand(['control'])]),

  /** A field can specify its width in grid columns */
  width: _react.PropTypes.oneOf(FormField._meta.props.width)
};

exports.default = FormField;