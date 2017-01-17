import _ from 'lodash'
import React, { Children, cloneElement, Component, PropTypes } from 'react'
import cx from 'classnames'

import {
  createHTMLInput,
  createShorthandFactory,
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

/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */
class Input extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An Input can be formatted to alert the user to an action they may perform. */
    action: PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.itemShorthand,
    ]),

    /** An action can appear along side an Input on the left or right. */
    actionPosition: PropTypes.oneOf(['left']),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** An Input field can show that it is disabled. */
    disabled: PropTypes.bool,

    /** An Input field can show the data contains errors. */
    error: PropTypes.bool,

    /** Take on the size of it's container. */
    fluid: PropTypes.bool,

    /** An Input field can show a user is currently interacting with it. */
    focus: PropTypes.bool,

    /** Optional Icon to display inside the Input. */
    icon: PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.itemShorthand,
    ]),

    /** An Icon can appear inside an Input on the left or right. */
    iconPosition: PropTypes.oneOf(['left']),

    /** Shorthand for creating the HTML Input. */
    input: customPropTypes.itemShorthand,

    /** Format to appear on dark backgrounds. */
    inverted: PropTypes.bool,

    /** Optional Label to display along side the Input. */
    label: customPropTypes.itemShorthand,

    /** A Label can appear outside an Input on the left or right. */
    labelPosition: PropTypes.oneOf(['left', 'right', 'left corner', 'right corner']),

    /** An Icon Input field can show that it is currently loading data. */
    loading: PropTypes.bool,

    /**
     * Called on change.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onChange: PropTypes.func,

    /** An Input can vary in size. */
    size: PropTypes.oneOf(SUI.SIZES),

    /** An Input can receive focus. */
    tabIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Transparent Input has no background. */
    transparent: PropTypes.bool,

    /** The HTML input type. */
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'text',
  }

  static _meta = {
    name: 'Input',
    type: META.TYPES.ELEMENT,
  }

  handleChange = (e) => {
    const value = _.get(e, 'target.value')

    const { onChange } = this.props
    if (onChange) onChange(e, { ...this.props, value })
  }

  render() {
    const {
      action,
      actionPosition,
      children,
      className,
      disabled,
      error,
      fluid,
      focus,
      icon,
      iconPosition,
      input,
      inverted,
      label,
      labelPosition,
      loading,
      onChange,
      size,
      tabIndex,
      transparent,
      type,
    } = this.props

    const classes = cx(
      'ui',
      size,
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(error, 'error'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOnly(focus, 'focus'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(loading, 'loading'),
      useKeyOnly(transparent, 'transparent'),
      useValueAndKey(actionPosition, 'action') || useKeyOnly(action, 'action'),
      useValueAndKey(iconPosition, 'icon') || useKeyOnly(icon, 'icon'),
      useValueAndKey(labelPosition, 'labeled') || useKeyOnly(label, 'labeled'),
      'input',
      className,
    )
    const unhandled = getUnhandledProps(Input, this.props)

    const rest = _.omit(unhandled, htmlInputPropNames)

    const htmlInputProps = _.pick(this.props, htmlInputPropNames)
    if (onChange) htmlInputProps.onChange = this.handleChange

    const ElementType = getElementType(Input, this.props)

    // tabIndex
    if (!_.isNil(tabIndex)) htmlInputProps.tabIndex = tabIndex
    else if (disabled) htmlInputProps.tabIndex = -1

    // Render with children
    // ----------------------------------------
    if (!_.isNil(children)) {
      // add htmlInputProps to the `<input />` child
      const childElements = _.map(Children.toArray(children), (child) => {
        if (child.type !== 'input') return child

        return cloneElement(child, { ...htmlInputProps, ...child.props })
      })

      return <ElementType {...rest} className={classes}>{childElements}</ElementType>
    }

    // Render Shorthand
    // ----------------------------------------
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

Input.create = createShorthandFactory(Input, type => ({ type }))

export default Input
