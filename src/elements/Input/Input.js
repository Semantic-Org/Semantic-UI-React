import _ from 'lodash'
import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  createHTMLInput,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useValueAndKey,
} from '../../lib'
import { Icon, Label } from '../../elements'

const inputPropNames = [
  // React
  'selected',
  'defaultValue',
  'defaultChecked',

  // HTML
  'accept',
  'alt',
  'autoComplete',
  'autoFocus',
  'checked',
  'dirname',
  'disabled',
  'form',
  'height',
  'list',
  'max',
  'maxLength',
  'min',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'size',
  'src',
  'step',
  'type',
  'value',
  'width',
]

/**
 * An Input is a field used to elicit a response from a user
 * @see Form
 */
function Input(props) {
  const {
    actions,
    actionsPosition,
    children,
    className,
    disabled,
    error,
    focus,
    fluid,
    icon,
    iconPosition,
    inverted,
    label,
    labelPosition,
    loading,
    size,
    input,
    transparent,
  } = props

  const classes = cx(
    'ui',
    size,
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(error, 'error'),
    useKeyOnly(focus, 'focus'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(inverted, 'inverted'),
    useValueAndKey(labelPosition, 'labeled') || useKeyOnly(label, 'labeled'),
    useKeyOnly(loading, 'loading'),
    useKeyOnly(transparent, 'transparent'),
    useValueAndKey(iconPosition, 'icon') || useKeyOnly(icon, 'icon'),
    className,
    'input',
  )

  const unhandledProps = getUnhandledProps(Input, props)
  const inputProps = _.pick(unhandledProps, inputPropNames)
  const rest = _.omit(unhandledProps, inputPropNames)
  const ElementType = getElementType(Input, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const iconElement = Icon.create(icon)
  const labelElement = Label.create(label, {
    // all label components should have the label className
    className: 'label',
    // pass corner='left|right'
    corner: _.includes(labelPosition, 'corner') ? labelPosition.replace(' corner', '') : undefined,
  })

  return (
    <ElementType {...rest} className={classes}>
      {labelPosition !== 'right' && labelElement}
      {actionsPosition === 'left' && actions}
      {iconPosition !== 'right' && iconElement}
      {createHTMLInput(input, inputProps)}
      {iconPosition === 'right' && iconElement}
      {labelPosition === 'right' && labelElement}
      {actionsPosition === 'right' && actions}
    </ElementType>
  )
}

Input._meta = {
  name: 'Input',
  type: META.TYPES.ELEMENT,
  props: {
    actionsPosition: ['right'],
    iconPosition: ['left'],
    labelPosition: ['left', 'right'],
    size: SUI.SIZES,
  },
}

Input.defaultProps = {
  input: 'text',
}

Input.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content.  Used when there are multiple Labels or multiple Actions. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** An Input field can show that it is disabled */
  disabled: PropTypes.bool,

  /** An Input field can show the data contains errors */
  error: PropTypes.bool,

  /** An Input field can show a user is currently interacting with it */
  focus: PropTypes.bool,

  /** Take on the size of it's container */
  fluid: PropTypes.bool,

  /** Optional Icon to display inside the Input */
  icon: PropTypes.string,

  /** An Icon can appear inside an Input on the left or right */
  iconPosition: PropTypes.oneOf(Input._meta.props.iconPosition),

  /** Format to appear on dark backgrounds */
  inverted: PropTypes.bool,

  /** Shorthand prop for creating the HTML Input */
  input: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]),

  /** Optional Label to display along side the Input */
  label: PropTypes.string,

  /** A Label can appear outside an Input on the left or right */
  labelPosition: PropTypes.oneOf(Input._meta.props.labelPosition),

  /** An Icon Input field can show that it is currently loading data */
  loading: PropTypes.bool,

  /** An Input can vary in size */
  size: PropTypes.oneOf(Input._meta.props.size),

  /** Transparent Input has no background */
  transparent: PropTypes.bool,
}

export default Input
