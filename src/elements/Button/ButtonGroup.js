import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useValueAndKey,
  useWidthProp,
} from '../../lib'

/**
 * Button.Group
 */
function ButtonGroup(props) {
  const {
    attached, basic, children, className, color, compact,
    fluid, icon, inverted, labeled, negative, positive, primary,
    secondary, size, toggle, vertical, widths,
  } = props

  const classes = cx('ui',
    size,
    color,
    useValueAndKey(attached, 'attached'),
    useKeyOnly(basic, 'basic'),
    useKeyOnly(compact, 'compact'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(icon, 'icon'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(labeled, 'labeled'),
    useKeyOnly(negative, 'negative'),
    useKeyOnly(positive, 'positive'),
    useKeyOnly(primary, 'primary'),
    useKeyOnly(secondary, 'secondary'),
    useKeyOnly(toggle, 'toggle'),
    useKeyOnly(vertical, 'vertical'),
    useWidthProp(widths),
    'buttons',
    className,
  )

  const rest = getUnhandledProps(ButtonGroup, props)
  const ElementType = getElementType(ButtonGroup, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

ButtonGroup._meta = {
  name: 'ButtonGroup',
  parent: 'Button',
  type: META.TYPES.ELEMENT,
  props: {
    attached: ['left', 'right', 'top', 'bottom'],
    color: SUI.COLORS,
    size: SUI.SIZES,
    widths: SUI.WIDTHS,
  },
}

ButtonGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A button can be attached to the top or bottom of other content */
  attached: PropTypes.oneOf(ButtonGroup._meta.props.attached),

  /** Groups can be less pronounced */
  basic: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Groups can have a shared color */
  color: PropTypes.oneOf(ButtonGroup._meta.props.color),

  /** Groups can reduce their padding to fit into tighter spaces */
  compact: PropTypes.bool,

  /** Groups can take the width of their container */
  fluid: PropTypes.bool,

  /** Groups can be formatted as icons */
  icon: PropTypes.bool,

  /** Groups can be formatted to appear on dark backgrounds */
  inverted: PropTypes.bool,

  /** Groups can be formatted as labeled icon buttons */
  labeled: PropTypes.bool,

  /** Groups can hint towards a negative consequence */
  negative: PropTypes.bool,

  /** Groups can hint towards a positive consequence */
  positive: PropTypes.bool,

  /** Groups can be formatted to show different levels of emphasis */
  primary: PropTypes.bool,

  /** Groups can be formatted to show different levels of emphasis */
  secondary: PropTypes.bool,

  /** Groups can have different sizes */
  size: PropTypes.oneOf(ButtonGroup._meta.props.size),

  /** Groups can be formatted to toggle on and off */
  toggle: PropTypes.bool,

  /** Groups can be formatted to appear vertically */
  vertical: PropTypes.bool,

  /** Groups can have their widths divided evenly */
  widths: PropTypes.oneOf(ButtonGroup._meta.props.widths),
}

export default ButtonGroup
