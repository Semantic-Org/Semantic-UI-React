import _extends from "@babel/runtime/helpers/esm/extends";
import _isNil from "lodash/isNil";
import _get from "lodash/get";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { childrenUtils, createHTMLLabel, customPropTypes, getElementType, getUnhandledProps, SUI, useKeyOnly, useWidthProp } from '../../lib';
import Label from '../../elements/Label';
import Checkbox from '../../modules/Checkbox';
import Radio from '../../addons/Radio';
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
  var classes = cx(useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(inline, 'inline'), useKeyOnly(required, 'required'), useWidthProp(width, 'wide'), 'field', className);
  var rest = getUnhandledProps(FormField, props);
  var ElementType = getElementType(FormField, props);

  var errorPointing = _get(error, 'pointing', 'above');

  var errorLabel = Label.create(error, {
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

  if (_isNil(control)) {
    if (_isNil(label)) {
      return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        id: id
      }), childrenUtils.isNil(children) ? content : children);
    }

    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      id: id
    }), errorLabelBefore, createHTMLLabel(label, {
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

  var controlProps = _extends({}, rest, {
    content: content,
    children: children,
    disabled: disabled,
    required: required,
    type: type,
    id: id
  }); // wrap HTML checkboxes/radios in the label


  if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
    return /*#__PURE__*/React.createElement(ElementType, {
      className: classes
    }, /*#__PURE__*/React.createElement("label", null, errorLabelBefore, /*#__PURE__*/createElement(control, _extends({}, ariaAttrs, controlProps)), " ", label, errorLabelAfter));
  } // pass label prop to controls that support it


  if (control === Checkbox || control === Radio) {
    return /*#__PURE__*/React.createElement(ElementType, {
      className: classes
    }, errorLabelBefore, /*#__PURE__*/createElement(control, _extends({}, ariaAttrs, controlProps, {
      label: label
    })), errorLabelAfter);
  } // ----------------------------------------
  // Other Control
  // ----------------------------------------


  return /*#__PURE__*/React.createElement(ElementType, {
    className: classes
  }, createHTMLLabel(label, {
    defaultProps: {
      htmlFor: id
    },
    autoGenerateKey: false
  }), errorLabelBefore, /*#__PURE__*/createElement(control, _extends({}, ariaAttrs, controlProps)), errorLabelAfter);
}

FormField.handledProps = ["as", "children", "className", "content", "control", "disabled", "error", "id", "inline", "label", "required", "type", "width"];
FormField.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /**
   * A form control component (i.e. Dropdown) or HTML tagName (i.e. 'input').
   * Extra FormField props are passed to the control component.
   * Mutually exclusive with children.
   */
  control: customPropTypes.some([PropTypes.func, PropTypes.oneOf(['button', 'input', 'select', 'textarea'])]),

  /** Individual fields may be disabled. */
  disabled: PropTypes.bool,

  /** Individual fields may display an error state along with a message. */
  error: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** The id of the control */
  id: PropTypes.string,

  /** A field can have its label next to instead of above it. */
  inline: PropTypes.bool,
  // Heads Up!
  // Do not disallow children with `label` shorthand
  // The `control` might accept a `label` prop and `children`

  /** Mutually exclusive with children. */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),

  /** A field can show that input is mandatory. */
  required: PropTypes.bool,

  /** Passed to the control component (i.e. <input type='password' />) */
  type: customPropTypes.every([customPropTypes.demand(['control']) // don't strictly validate HTML types
  // a control might be passed that uses a `type` prop with unknown values
  // let the control validate if for us
  ]),

  /** A field can specify its width in grid columns */
  width: PropTypes.oneOf(SUI.WIDTHS)
} : {};
export default FormField;