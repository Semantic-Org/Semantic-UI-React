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
import { Button, Icon, Label } from '../../elements'

export const htmlInputPropNames = [
  // React
  'selected',
  'defaultValue',
  'defaultChecked',

  // Limited HTML props
  'autoComplete',
  'autoFocus',
  'checked',
  // 'disabled', do not pass (duplicates SUI CSS opacity rule)
  'form',
  'max',
  'maxLength',
  'min',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'step',
  'type',
  'value',
]

/**
 * An Input is a field used to elicit a response from a user
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */
function Input(props) {
  const {
    action,
    actionPosition,
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
    type,
    input,
    transparent,
  } = props

  const classes = cx(
    'ui',
    size,
    useValueAndKey(actionPosition, 'action') || useKeyOnly(action, 'action'),
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

  const rest = getUnhandledProps(Input, props)
  const ElementType = getElementType(Input, props)
  const inputProps = _.pick(props, htmlInputPropNames)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const actionElement = Button.create(action, elProps => ({
    className: cx(
      // all action components should have the button className
      !_.includes(elProps.className, 'button') && 'button',
    ),
  }))
  const iconElement = Icon.create(icon)
  const labelElement = Label.create(label, elProps => ({
    className: cx(
      // all label components should have the label className
      !_.includes(elProps.className, 'label') && 'label',
      // add 'left|right corner'
      _.includes(labelPosition, 'corner') && labelPosition,
    ),
  }))

  return (
    <ElementType {...rest} className={classes}>
      {actionPosition === 'left' && actionElement}
      {iconPosition === 'left' && iconElement}
      {labelPosition !== 'right' && labelElement}
      {createHTMLInput(input || type, inputProps)}
      {actionPosition !== 'left' && actionElement}
      {iconPosition !== 'left' && iconElement}
      {labelPosition === 'right' && labelElement}
    </ElementType>
  )
}

Input._meta = {
  name: 'Input',
  type: META.TYPES.ELEMENT,
  props: {
    actionPosition: ['left'],
    iconPosition: ['left'],
    labelPosition: ['left', 'right', 'left corner', 'right corner'],
    size: SUI.SIZES,
  },
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** An Input can be formatted to alert the user to an action they may perform */
  action: customPropTypes.some([
    PropTypes.bool,
    customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.element,
      ]),
    ]),
  ]),

  /** An action can appear along side an Input on the left or right */
  actionPosition: PropTypes.oneOf(Input._meta.props.actionPosition),

  /** Primary content.  Used when there are multiple Labels or multiple Actions. */
  children: customPropTypes.every([
    customPropTypes.disallow(['icon', 'input', 'label']),
    customPropTypes.givenProps(
      { action: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.element]).isRequired },
      customPropTypes.disallow(['action']),
    ),
    PropTypes.node,
  ]),

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
  icon: customPropTypes.some([
    PropTypes.bool,
    customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.element]),
    ]),
  ]),

  /** An Icon can appear inside an Input on the left or right */
  iconPosition: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOf(Input._meta.props.iconPosition),
  ]),

  /** Format to appear on dark backgrounds */
  inverted: PropTypes.bool,

  /** Shorthand prop for creating the HTML Input */
  input: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.element]),
  ]),

  /** Optional Label to display along side the Input */
  label: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.element]),
  ]),

  /** A Label can appear outside an Input on the left or right */
  labelPosition: PropTypes.oneOf(Input._meta.props.labelPosition),

  /** An Icon Input field can show that it is currently loading data */
  loading: PropTypes.bool,

  /** An Input can vary in size */
  size: PropTypes.oneOf(Input._meta.props.size),

  /** Transparent Input has no background */
  transparent: PropTypes.bool,

  /** The HTML input type */
  type: PropTypes.string,
}

export default Input
