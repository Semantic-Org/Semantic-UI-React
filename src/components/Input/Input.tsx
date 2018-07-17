import PropTypes from 'prop-types'
import React, { Children, cloneElement } from 'react'
import cx from 'classnames'
import _ from 'lodash'

import {
  childrenExist,
  createHTMLInput,
  customPropTypes,
  getUnhandledProps,
  partitionHTMLProps,
  UIComponent,
} from '../../lib'
import inputRules from './inputRules'
import inputVariables from './inputVariables'
import Icon from '../Icon'

/**
 * An Input
 * @accessibility This is example usage of the accessibility tag.
 */
class Input extends UIComponent<any, any> {
  static className = 'ui-input'

  static displayName = 'Input'

  static rules = inputRules
  static variables = inputVariables

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Optional Icon to display inside the Input. */
    icon: customPropTypes.itemShorthand,

    /** Shorthand for creating the HTML Input. */
    input: customPropTypes.itemShorthand,

    /** The HTML input type. */
    type: PropTypes.string,
  }

  static handledProps = ['as', 'children', 'className', 'icon', 'input', 'type']

  static defaultProps = {
    as: 'div',
    type: 'text',
  }

  handleChildOverrides = (child, defaultProps) => ({
    ...defaultProps,
    ...child.props,
  })

  partitionProps = () => {
    const { type } = this.props

    const unhandled = getUnhandledProps(Input, this.props)
    const [htmlInputProps, rest] = partitionHTMLProps(unhandled)

    return [
      {
        ...htmlInputProps,
        type,
      },
      rest,
    ]
  }

  computeIcon = () => {
    const { icon } = this.props

    if (!_.isNil(icon)) return icon
    return null
  }

  renderComponent({ ElementType, classes, rest }) {
    const { children, className, icon, input, type } = this.props
    const [htmlInputProps, restProps] = this.partitionProps()

    const inputClasses = cx(classes.input)

    // Render with children
    // ----------------------------------------
    if (childrenExist(children)) {
      // add htmlInputProps to the `<input />` child
      const childElements = _.map(Children.toArray(children), child => {
        if (child.type !== 'input') return child
        return cloneElement(child, this.handleChildOverrides(child, htmlInputProps))
      })

      return (
        <ElementType {...rest} className={classes.root}>
          {childElements}
        </ElementType>
      )
    }

    if (this.computeIcon()) {
      return (
        <ElementType {...rest} className={classes.root} {...htmlInputProps}>
          {createHTMLInput(input || type, {
            defaultProps: htmlInputProps,
            overrideProps: { className: inputClasses },
          })}
          <Icon name={this.computeIcon()} />
        </ElementType>
      )
    }

    return (
      <ElementType {...rest} className={classes.root} {...htmlInputProps}>
        {createHTMLInput(input || type, {
          defaultProps: htmlInputProps,
          overrideProps: { className: inputClasses },
        })}
      </ElementType>
    )
  }
}

export default Input
