import _ from 'lodash'
import React, { Children, cloneElement, Component, PropTypes } from 'react'
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
import Button from '../../elements/Button'
import Icon from '../../elements/Icon'
import Label from '../../elements/Label'

export const htmlInputPropNames = [
  // REACT
  'selected', 'defaultValue', 'defaultChecked',

  // LIMITED HTML PROPS
  'autoComplete', 'autoFocus', 'checked', 'form', 'max', 'maxLength', 'min',
  'name', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'type', 'value',

  // Heads Up!
  // Do not pass disabled, it duplicates the SUI CSS opacity rule.
  // 'disabled',

  // EVENTS
  // keyboard
  'onKeyDown', 'onKeyPress', 'onKeyUp',

  // focus
  'onFocus', 'onBlur',

  // form
  'onChange', 'onInput',

  // mouse
  'onClick', 'onContextMenu',
  'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop',
  'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',

  // selection
  'onSelect',

  // touch
  'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart',
]

const _meta = {
  name: 'Input',
  type: META.TYPES.ELEMENT,
  props: {
    actionPosition: ['left'],
    iconPosition: ['left'],
    labelPosition: ['left', 'right', 'left corner', 'right corner'],
    size: SUI.SIZES,
  },
}

/**
 * An Input is a field used to elicit a response from a user
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */
class Input extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An Input can be formatted to alert the user to an action they may perform */
    action: PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.itemShorthand,
    ]),

    /** An action can appear along side an Input on the left or right */
    actionPosition: PropTypes.oneOf(_meta.props.actionPosition),

    /** Primary content. */
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
    icon: PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.itemShorthand,
    ]),

    /** An Icon can appear inside an Input on the left or right */
    iconPosition: PropTypes.oneOf(_meta.props.iconPosition),

    /** Format to appear on dark backgrounds */
    inverted: PropTypes.bool,

    /** Shorthand for creating the HTML Input */
    input: customPropTypes.itemShorthand,

    /** Optional Label to display along side the Input */
    label: customPropTypes.itemShorthand,

    /** A Label can appear outside an Input on the left or right */
    labelPosition: PropTypes.oneOf(_meta.props.labelPosition),

    /** An Icon Input field can show that it is currently loading data */
    loading: PropTypes.bool,

    /** Called with (e, data) on change. */
    onChange: PropTypes.func,

    /** An Input can vary in size */
    size: PropTypes.oneOf(_meta.props.size),

    /** Transparent Input has no background */
    transparent: PropTypes.bool,

    /** The HTML input type */
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
  }

  static _meta = _meta

  handleChange = (e) => {
    const { onChange } = this.props
    if (onChange) {
      onChange(e, {
        ...this.props,
        value: _.get(e, 'target.value'),
      })
    }
  }

  render() {
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
      onChange,
      size,
      type,
      input,
      transparent,
    } = this.props

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
    const unhandled = getUnhandledProps(Input, this.props)

    const rest = _.omit(unhandled, htmlInputPropNames)

    const htmlInputProps = _.pick(this.props, htmlInputPropNames)
    if (onChange) htmlInputProps.onChange = this.handleChange

    const ElementType = getElementType(Input, this.props)

    if (children) {
      // add htmlInputProps to the `<input />` child
      const childElements = Children.map(children, (child) => {
        if (child.type !== 'input') return child

        return cloneElement(child, { ...htmlInputProps, ...child.props })
      })

      return <ElementType {...rest} className={classes}>{childElements}</ElementType>
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
        {createHTMLInput(input || type, htmlInputProps)}
        {actionPosition !== 'left' && actionElement}
        {iconPosition !== 'left' && iconElement}
        {labelPosition === 'right' && labelElement}
      </ElementType>
    )
  }
}

export default Input
