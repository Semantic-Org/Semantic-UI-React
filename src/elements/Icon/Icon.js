import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useValueAndKey,
} from '../../lib'
import IconGroup from './IconGroup'

/**
 * An icon is a glyph used to represent something else
 */
function Icon(props) {
  const {
    bordered, className, circular, color, corner, disabled,
    fitted, flipped, inverted, link, loading, name, rotated, size,
  } = props

  const classes = cx(
    size,
    color,
    useKeyOnly(bordered, 'bordered'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(corner, 'corner'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(fitted, 'fitted'),
    useValueAndKey(flipped, 'flipped'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(link, 'link'),
    useKeyOnly(loading, 'loading'),
    useValueAndKey(rotated, 'rotated'),
    name,
    className,
    'icon'
  )

  const rest = getUnhandledProps(Icon, props)

  return (
    <i className={classes} {...rest} />
  )
}

Icon.Group = IconGroup

Icon._meta = {
  name: 'Icon',
  type: META.TYPES.ELEMENT,
  props: {
    color: SUI.COLORS,
    flipped: ['horizontally', 'vertically'],
    name: SUI.icons,
    rotated: ['clockwise', 'counterclockwise'],
    size: SUI.SIZES,
  },
}

Icon.propTypes = {
  /** Formatted to appear bordered */
  bordered: PropTypes.bool,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** Icon can formatted to appear circular */
  circular: PropTypes.bool,

  /** Color of the icon. */
  color: PropTypes.oneOf(Icon._meta.props.color),

  /** Icons can display a smaller corner icon */
  corner: PropTypes.bool,

  /** Show that the icon is inactive */
  disabled: PropTypes.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: PropTypes.bool,

  /** Icon can flipped */
  flipped: PropTypes.oneOf(Icon._meta.props.flipped),

  /** Formatted to have its colors inverted for contrast */
  inverted: PropTypes.bool,

  /** Name of the icon */
  name: PropTypes.string,

  /** Icon can be formatter as a link */
  link: PropTypes.bool,

  /** Icon can be used as a simple loader */
  loading: PropTypes.bool,

  /** Icon can rotated */
  rotated: PropTypes.oneOf(Icon._meta.props.rotated),

  /** Size of the icon. */
  size: PropTypes.oneOf(Icon._meta.props.size),
}

export default Icon
