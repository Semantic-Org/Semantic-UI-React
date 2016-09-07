import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
} from '../../lib'
import { createIcon } from '../../factories'
import ButtonGroup from './ButtonGroup'

/**
 * A Button indicates a possible user action
 * @see Form
 */
function Button(props) {
  const {
    active, animated, attached, basic, children, circular, className, color, compact, disabled,
    floated, fluid, icon, inverted, labeled, loading, negative, positive, primary, secondary, size, toggle, type,
  } = props

  const classes = cx('ui',
    icon && 'icon',
    color,
    size,
    useKeyOnly(active, 'active'),
    useKeyOnly(animated, 'animated'),
    useKeyOrValueAndKey(attached, 'attached'),
    useKeyOnly(basic, 'basic'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(compact, 'compact'),
    useKeyOnly(disabled, 'disabled'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOrValueAndKey(labeled, 'labeled'),
    useKeyOnly(loading, 'loading'),
    useKeyOnly(negative, 'negative'),
    useKeyOnly(positive, 'positive'),
    useKeyOnly(primary, 'primary'),
    useKeyOnly(secondary, 'secondary'),
    useKeyOnly(toggle, 'toggle'),
    'button',
    className
  )

  const rest = getUnhandledProps(Button, props)
  const ElementType = getElementType(Button, props, () => {
    if (type === 'submit') return 'button'
    if (attached) return 'div'
  })
  const tabIndex = ElementType === 'div' && { tabIndex: 0 }

  return (
    <ElementType {...rest} type={type} className={classes} {...tabIndex}>
      {createIcon(icon)}
      {children}
    </ElementType>
  )
}

Button.Group = ButtonGroup

Button._meta = {
  name: 'Button',
  type: META.TYPES.ELEMENT,
  props: {
    attached: ['left', 'right', 'top', 'bottom'],
    color: SUI.COLORS,
    floated: SUI.FLOATS,
    labeled: ['left icon', 'right icon'],
    size: SUI.SIZES,
  },
}

Button.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** A button can show it is currently the active user selection */
  active: PropTypes.bool,

  /** A button can animate to show hidden content */
  animated: PropTypes.bool,

  /** A button can be attached to the top or bottom of other content */
  attached: PropTypes.oneOf(Button._meta.props.attached),

  /** A basic button is less pronounced */
  basic: PropTypes.bool,

  /** Primary content of the button */
  children: customPropTypes.every([
    PropTypes.node,
    customPropTypes.givenProps(
      { icon: PropTypes.bool.isRequired },
      customPropTypes.disallow(['icon']),
    ),
  ]),

  /** A button can be circular */
  circular: PropTypes.bool,

  /** Classes to add to the button className. */
  className: PropTypes.string,

  /** A button can have different colors */
  color: PropTypes.oneOf(Button._meta.props.color),

  /** A button can reduce its padding to fit into tighter spaces */
  compact: PropTypes.bool,

  /** A button can show it is currently unable to be interacted with */
  disabled: PropTypes.bool,

  /** A button can be aligned to the left or right of its container */
  floated: PropTypes.oneOf(Button._meta.props.floated),

  /** A button can take the width of its container */
  fluid: PropTypes.bool,

  /** Add an icon by icon className or pass an <Icon /.>*/
  icon: customPropTypes.every([
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.object,
      PropTypes.element,
    ]),
    customPropTypes.givenProps(
      { icon: PropTypes.bool.isRequired },
      customPropTypes.disallow(['children']),
    ),
  ]),

  /** A button can be formatted to appear on dark backgrounds */
  inverted: PropTypes.bool,

  /** A button can appear alongside a label */
  labeled: customPropTypes.some([
    PropTypes.bool,
    PropTypes.oneOf(Button._meta.props.labeled),
  ]),

  /** A button can show a loading indicator */
  loading: PropTypes.bool,

  /** */
  negative: PropTypes.bool,

  /** */
  positive: PropTypes.bool,

  /** */
  primary: PropTypes.bool,

  /** */
  secondary: PropTypes.bool,

  /** A button can be formatted to toggle on and off */
  toggle: PropTypes.bool,

  /**  */
  type: PropTypes.string,

  /** A button can have different sizes */
  size: PropTypes.oneOf(Button._meta.props.size),
}

Button.defaultProps = {
  as: 'button',
  type: 'button',
}

export default Button
