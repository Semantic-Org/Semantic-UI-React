import cx from 'classnames'
import _ from 'lodash'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
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
 * @see TextArea
 */
export default class Form extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

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

    /** A comment can contain a form to reply to a comment. This may have arbitrary content. */
    reply: PropTypes.bool,

    /** A form can vary in size. */
    size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium')),

    /** Automatically show any success Message children. */
    success: PropTypes.bool,

    /** Automatically show any warning Message children .*/
    warning: PropTypes.bool,

    /** Forms can automatically divide fields to be equal width. */
    widths: PropTypes.oneOf(['equal']),
  }

  static defaultProps = {
    as: 'form',
  }

  static _meta = {
    name: 'Form',
    type: META.TYPES.COLLECTION,
  }

  static Field = FormField
  static Button = FormButton
  static Checkbox = FormCheckbox
  static Dropdown = FormDropdown
  static Group = FormGroup
  static Input = FormInput
  static Radio = FormRadio
  static Select = FormSelect
  static TextArea = FormTextArea

  render() {
    const {
      children,
      className,
      error,
      inverted,
      loading,
      reply,
      size,
      success,
      warning,
      widths,
    } = this.props

    const classes = cx(
      'ui',
      size,
      useKeyOnly(error, 'error'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(loading, 'loading'),
      useKeyOnly(reply, 'reply'),
      useKeyOnly(success, 'success'),
      useKeyOnly(warning, 'warning'),
      useWidthProp(widths, null, true),
      'form',
      className,
    )
    const rest = getUnhandledProps(Form, this.props)
    const ElementType = getElementType(Form, this.props)

    return (
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    )
  }
}
