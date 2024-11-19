import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import * as React from 'react'

import { getComponentType, getUnhandledProps, SUI, getKeyOnly, getWidthProp } from '../../lib'
import FormButton from './FormButton'
import FormCheckbox from './FormCheckbox'
import FormDropdown from './FormDropdown'
import FormField from './FormField'
import FormGroup from './FormGroup'
import FormInput from './FormInput'
import FormRadio from './FormRadio'
import FormSelect from './FormSelect'
import FormTextArea from './FormTextArea'

/**
 * A Form displays a set of related user input fields in a structured way.
 * @see Button
 * @see Checkbox
 * @see Dropdown
 * @see Input
 * @see Message
 * @see Radio
 * @see Select
 */
const Form = React.forwardRef(function (props, ref) {
  const {
    action,
    children,
    className,
    error,
    inverted,
    loading,
    reply,
    size,
    success,
    unstackable,
    warning,
    widths,
  } = props

  const handleSubmit = (e, ...args) => {
    // Heads up! Third party libs can pass own data as first argument, we need to check that it has preventDefault()
    // method.
    if (typeof action !== 'string') _.invoke(e, 'preventDefault')
    _.invoke(props, 'onSubmit', e, props, ...args)
  }

  const classes = cx(
    'ui',
    size,
    getKeyOnly(error, 'error'),
    getKeyOnly(inverted, 'inverted'),
    getKeyOnly(loading, 'loading'),
    getKeyOnly(reply, 'reply'),
    getKeyOnly(success, 'success'),
    getKeyOnly(unstackable, 'unstackable'),
    getKeyOnly(warning, 'warning'),
    getWidthProp(widths, null, true),
    'form',
    className,
  )
  const rest = getUnhandledProps(Form, props)
  const ElementType = getComponentType(props, { defaultAs: 'form' })

  return (
    <ElementType {...rest} action={action} className={classes} onSubmit={handleSubmit} ref={ref}>
      {children}
    </ElementType>
  )
})

Form.displayName = 'Form'

Form.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The HTML form action */
  action: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Automatically show any error Message children. */
  error: PropTypes.bool,

  /** A form can have its color inverted for contrast. */
  inverted: PropTypes.bool,

  /** Automatically show a loading indicator. */
  loading: PropTypes.bool,

  /** The HTML form submit handler. */
  onSubmit: PropTypes.func,

  /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
  reply: PropTypes.bool,

  /** A form can vary in size. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium')),

  /** Automatically show any success Message children. */
  success: PropTypes.bool,

  /** A form can prevent itself from stacking on mobile. */
  unstackable: PropTypes.bool,

  /** Automatically show any warning Message children. */
  warning: PropTypes.bool,

  /** Forms can automatically divide fields to be equal width. */
  widths: PropTypes.oneOf(['equal']),
}

Form.Field = FormField
Form.Button = FormButton
Form.Checkbox = FormCheckbox
Form.Dropdown = FormDropdown
Form.Group = FormGroup
Form.Input = FormInput
Form.Radio = FormRadio
Form.Select = FormSelect
Form.TextArea = FormTextArea

export default Form
