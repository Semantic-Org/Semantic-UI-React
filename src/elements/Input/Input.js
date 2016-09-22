import _ from 'lodash'
import classNames from 'classnames'
import React, { Component, PropTypes, Children } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
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
export default class Input extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    input: PropTypes.object,
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
  }

  static _meta = {
    name: 'Input',
    type: META.TYPES.ELEMENT,
  }

  render() {
    const { className, children, icon, input, type } = this.props
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
      const isAction = _.includes(['Button', 'Dropdown', 'Select'], child.type._meta.name)
      const isLabel = child.type._meta.name === 'Label'

      if (isAction) {
        actionChildren.push(child)
      } else if (isLabel) {
        labelChildren.push(child)
      }
    })

    const classes = classNames(
      'ui',
      className,
      'input'
    )
    const unhandledProps = getUnhandledProps(Input, this.props)
    const inputProps = _.pick(unhandledProps, inputPropNames)
    const rest = _.omit(unhandledProps, inputPropNames)
    const ElementType = getElementType(Input, this.props)
    return (
      <ElementType {...rest} className={classes}>
        {isLeftLabeled && labelChildren}
        {isLeftAction && actionChildren}
        <input {...inputProps} {...input} type={type} />
        {icon && <Icon name={icon} />}
        {isRightLabeled && labelChildren}
        {isRightAction && actionChildren}
      </ElementType>
    )
  }
}
