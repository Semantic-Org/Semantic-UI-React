import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { createElement } from 'react'

import {
  childrenUtils,
  createHTMLLabel,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import Label from '../../elements/Label'
import Checkbox from '../../modules/Checkbox'
import Radio from '../../addons/Radio'

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
  const {
    children,
    className,
    content,
    control,
    disabled,
    error,
    inline,
    label,
    required,
    type,
    width,
    id,
  } = props

  const classes = cx(
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(error, 'error'),
    useKeyOnly(inline, 'inline'),
    useKeyOnly(required, 'required'),
    useWidthProp(width, 'wide'),
    'field',
    className,
  )
  const rest = getUnhandledProps(FormField, props)
  const ElementType = getElementType(FormField, props)

  const errorPointing = _.get(error, 'pointing', 'above')
  const errorLabel = Label.create(error, {
    autoGenerateKey: false,
    defaultProps: {
      prompt: true,
      pointing: errorPointing,
      id: id ? `${id}-error-message` : undefined,
      role: 'alert',
      'aria-atomic': true,
    },
  })

  const errorLabelBefore = (errorPointing === 'below' || errorPointing === 'right') && errorLabel
  const errorLabelAfter = (errorPointing === 'above' || errorPointing === 'left') && errorLabel

  // ----------------------------------------
  // No Control
  // ----------------------------------------

  if (_.isNil(control)) {
    if (_.isNil(label)) {
      return (
        <ElementType {...rest} className={classes} id={id}>
          {childrenUtils.isNil(children) ? content : children}
        </ElementType>
      )
    }

    return (
      <ElementType {...rest} className={classes} id={id}>
        {errorLabelBefore}
        {createHTMLLabel(label, { autoGenerateKey: false })}
        {errorLabelAfter}
      </ElementType>
    )
  }

  // ----------------------------------------
  // Checkbox/Radio Control
  // ----------------------------------------

  const ariaDescribedBy = id && error ? `${id}-error-message` : null
  const ariaAttrs = {
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': error ? true : undefined,
  }
  const controlProps = { ...rest, content, children, disabled, required, type, id }

  // wrap HTML checkboxes/radios in the label
  if (control === 'input' && (type === 'checkbox' || type === 'radio')) {
    return (
      <ElementType className={classes}>
        <label>
          {errorLabelBefore}
          {createElement(control, { ...ariaAttrs, ...controlProps })} {label}
          {errorLabelAfter}
        </label>
      </ElementType>
    )
  }

  // pass label prop to controls that support it
  if (control === Checkbox || control === Radio) {
    return (
      <ElementType className={classes}>
        {errorLabelBefore}
        {createElement(control, { ...ariaAttrs, ...controlProps, label })}
        {errorLabelAfter}
      </ElementType>
    )
  }

  // ----------------------------------------
  // Other Control
  // ----------------------------------------

  return (
    <ElementType className={classes}>
      {createHTMLLabel(label, {
        defaultProps: { htmlFor: id },
        autoGenerateKey: false,
      })}
      {errorLabelBefore}
      {createElement(control, { ...ariaAttrs, ...controlProps })}
      {errorLabelAfter}
    </ElementType>
  )
}

FormField.propTypes = {
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
  control: customPropTypes.some([
    PropTypes.func,
    PropTypes.oneOf(['button', 'input', 'select', 'textarea']),
  ]),

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
  type: customPropTypes.every([
    customPropTypes.demand(['control']),
    // don't strictly validate HTML types
    // a control might be passed that uses a `type` prop with unknown values
    // let the control validate if for us
  ]),

  /** A field can specify its width in grid columns */
  width: PropTypes.oneOf(SUI.WIDTHS),
}

export default FormField
