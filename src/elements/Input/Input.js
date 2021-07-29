import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createHTMLInput,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  partitionHTMLProps,
  useKeyOnly,
  useValueAndKey,
  setRef,
} from '../../lib'
import Button from '../Button'
import Icon from '../Icon'
import Label from '../Label'

/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */
const Input = React.forwardRef(function (props, ref) {
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
    size,
    tabIndex,
    transparent,
    type,
  } = props

  const computeIcon = () => {
    if (!_.isNil(icon)) {
      return icon
    }

    if (loading) {
      return 'spinner'
    }
  }

  const computeTabIndex = () => {
    if (!_.isNil(tabIndex)) {
      return tabIndex
    }

    if (disabled) {
      return -1
    }
  }

  const handleChange = (e) => {
    const newValue = _.get(e, 'target.value')

    _.invoke(props, 'onChange', e, { ...props, value: newValue })
  }

  const partitionProps = () => {
    const unhandledProps = getUnhandledProps(Input, props)
    const [htmlInputProps, rest] = partitionHTMLProps(unhandledProps)

    return [
      {
        ...htmlInputProps,
        disabled,
        type,
        tabIndex: computeTabIndex(),
        onChange: handleChange,
        ref,
      },
      rest,
    ]
  }

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
    useValueAndKey(iconPosition, 'icon') || useKeyOnly(icon || loading, 'icon'),
    useValueAndKey(labelPosition, 'labeled') || useKeyOnly(label, 'labeled'),
    'input',
    className,
  )
  const ElementType = getElementType(Input, props)
  const [htmlInputProps, rest] = partitionProps()

  // Render with children
  // ----------------------------------------
  if (!childrenUtils.isNil(children)) {
    // add htmlInputProps to the `<input />` child
    const childElements = _.map(React.Children.toArray(children), (child) => {
      if (child.type === 'input') {
        return React.cloneElement(child, {
          ...htmlInputProps,
          ...child.props,
          ref: (c) => {
            setRef(child.ref, c)
            setRef(ref, c)
          },
        })
      }

      return child
    })

    return (
      <ElementType {...rest} className={classes}>
        {childElements}
      </ElementType>
    )
  }

  // Render Shorthand
  // ----------------------------------------
  const actionElement = Button.create(action, { autoGenerateKey: false })
  const labelElement = Label.create(label, {
    defaultProps: {
      className: cx(
        'label',
        // add 'left|right corner'
        _.includes(labelPosition, 'corner') && labelPosition,
      ),
    },
    autoGenerateKey: false,
  })

  return (
    <ElementType {...rest} className={classes}>
      {actionPosition === 'left' && actionElement}
      {labelPosition !== 'right' && labelElement}
      {createHTMLInput(input || type, { defaultProps: htmlInputProps, autoGenerateKey: false })}
      {Icon.create(computeIcon(), { autoGenerateKey: false })}
      {actionPosition !== 'left' && actionElement}
      {labelPosition === 'right' && labelElement}
    </ElementType>
  )
})

Input.displayName = 'Input'
Input.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

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

  /** Take on the size of its container. */
  fluid: PropTypes.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: PropTypes.bool,

  /** Optional Icon to display inside the Input. */
  icon: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

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
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: PropTypes.func,

  /** An Input can vary in size. */
  size: PropTypes.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),

  /** An Input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Transparent Input has no background. */
  transparent: PropTypes.bool,

  /** The HTML input type. */
  type: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
}

Input.create = createShorthandFactory(Input, (type) => ({ type }))

export default Input
