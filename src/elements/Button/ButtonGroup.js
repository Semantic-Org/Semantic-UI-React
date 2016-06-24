import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'

/**
 * Button.Group
 */
function ButtonGroup(props) {
  const {
    basic, className, children, color, icon, size, vertical, widths,
  } = props

  const classes = cx('ui',
    size,
    color,
    useKeyOnly(basic, 'basic'),
    useKeyOnly(icon, 'icon'),
    useKeyOnly(vertical, 'vertical'),
    className,
    useWidthProp(widths),
    'buttons'
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

  /** A button group can be less pronounced */
  basic: PropTypes.bool,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** */
  children: PropTypes.any,

  /** Groups can have a shared color */
  color: PropTypes.oneOf(ButtonGroup._meta.props.color),

  /** Groups can be formatted as icons */
  icon: PropTypes.bool,

  /** A button can have different sizes */
  size: PropTypes.oneOf(ButtonGroup._meta.props.size),

  /** Groups can be formatted to appear vertically */
  vertical: PropTypes.bool,

  /** Groups can have their widths divided evenly */
  widths: PropTypes.oneOf(ButtonGroup._meta.props.widths),
}

export default ButtonGroup
