import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
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
    attached, basic, children, className, color, icon, labeled, size, vertical, widths,
  } = props

  const classes = cx('ui',
    size,
    color,
    useValueAndKey(attached, 'attached'),
    useKeyOnly(basic, 'basic'),
    useKeyOnly(icon, 'icon'),
    useKeyOnly(labeled, 'labeled'),
    useKeyOnly(vertical, 'vertical'),
    useWidthProp(widths),
    'buttons',
    className,
  )

  const rest = getUnhandledProps(ButtonGroup, props)
  const ElementType = getElementType(ButtonGroup, props)

  return (
    <ElementType className={classes} {...rest}>
      {children}
    </ElementType>
  )
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
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** A button can be attached to the top or bottom of other content */
  attached: PropTypes.oneOf(ButtonGroup._meta.props.attached),

  /** Groups can be less pronounced */
  basic: PropTypes.bool,

  /** Additional classes */
  className: PropTypes.string,

  /** Primary content, intended to be Button elements */
  children: PropTypes.any,

  /** Groups can have a shared color */
  color: PropTypes.oneOf(ButtonGroup._meta.props.color),

  /** Groups can be formatted as icons */
  icon: PropTypes.bool,

  /** Groups can be formatted as labeled icon buttons */
  labeled: PropTypes.bool,

  /** Groups can have different sizes */
  size: PropTypes.oneOf(ButtonGroup._meta.props.size),

  /** Groups can be formatted to appear vertically */
  vertical: PropTypes.bool,

  /** Groups can have their widths divided evenly */
  widths: PropTypes.oneOf(ButtonGroup._meta.props.widths),
}

export default ButtonGroup
