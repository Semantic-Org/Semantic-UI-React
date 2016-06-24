import _ from 'lodash'
import React, { PropTypes, Children } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
} from '../../lib'
import { Icon } from '../../elements'

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
    disabled, error, fluid, inverted, loading, size, transparent,
    icon, type, children, className,
  } = props

  // Semantic supports actions and labels on either side of an input.
  // The element must be on the same side as the indicated class.
  // We first determine the left/right classes for each type of child,
  //   then we extract the children and place them on the correct side
  //   of the input.
  const isLeftAction = _.includes(className, 'left action')
  const isRightAction = !isLeftAction && _.includes(className, 'action')
  const isRightLabeled = _.includes(className, 'right labeled')
  const isLeftLabeled = !isRightLabeled && _.includes(className, 'labeled')

  const labelChildren = []
  const actionChildren = []

  Children.forEach(children, child => {
    const isButton = child.type.name === 'Button'
    const isDropdown = child.type.name === 'Dropdown'
    const isLabel = child.type.name === 'Label'
    const childIsAction = !isLabel && isButton || isDropdown

    if (childIsAction) {
      actionChildren.push(child)
    } else if (isLabel) {
      labelChildren.push(child)
    }
  })

  const classes = cx(
    'ui',
    size,
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(error, 'error'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(loading, 'loading'),
    useKeyOnly(transparent, 'transparent'),
    icon && 'icon',
    className,
    'input',
  )

  const unhandledProps = getUnhandledProps(Input, this.props)
  const inputProps = _.pick(unhandledProps, inputPropNames)
  const rest = _.omit(unhandledProps, inputPropNames)
  const ElementType = getElementType(Input, this.props)
  return (
    <ElementType {...rest} className={classes}>
      {isLeftLabeled && labelChildren}
      {isLeftAction && actionChildren}
      <input {...inputProps} type={type} />
      {Icon.create(icon)}
      {isRightLabeled && labelChildren}
      {isRightAction && actionChildren}
    </ElementType>
  )
}

Input._meta = {
  name: 'Input',
  type: META.TYPES.ELEMENT,
  props: {
    size: SUI.SIZES,
  },
}

Input.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Body of the component. */
  children: PropTypes.node,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** An input field can show that it is disabled */
  disabled: PropTypes.bool,

  /** An input field can show the data contains errors */
  error: PropTypes.bool,

  /** Take on the size of it's container */
  fluid: PropTypes.bool,

  /** Optional icon to display in input */
  icon: PropTypes.string,

  /** Format to appear on dark backgrounds */
  inverted: PropTypes.bool,

  /** An icon input field can show that it is currently loading data */
  loading: PropTypes.bool,

  /** An input can vary in size */
  size: PropTypes.oneOf(Input._meta.props.size),

  /** Transparent input has no background */
  transparent: PropTypes.bool,

  /** Specifies the type of <input> element to display */
  type: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

export default Input
