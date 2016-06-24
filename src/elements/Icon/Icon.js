import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import * as sui from '../../utils/semanticUtils'
import {
  useKeyOnly,
  useValueAndKey,
  getUnhandledProps,
} from '../../utils/propUtils'
import IconGroup from './IconGroup'

/**
 * An icon is a glyph used to represent something else
 */
function Icon(props) {
  const {
    className, disabled, fitted, size, color, link, flipped, rotated, circular, bordered, inverted, loading, corner,
  } = props

  const classes = cx('sd-icon',
    size,
    color,
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(fitted, 'fitted'),
    useKeyOnly(link, 'link'),
    useValueAndKey(flipped, 'flipped'),
    useValueAndKey(rotated, 'rotated'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(bordered, 'bordered'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(loading, 'loading'),
    useKeyOnly(corner, 'corner'),
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
  library: META.library.semanticUI,
  name: 'Icon',
  type: META.type.element,
  props: {
    sizes: sui.sizes,
    flipped: ['horizontally', 'vertically'],
    rotated: ['clockwise', 'counterclockwise'],
    color: sui.colors,
  },
}

Icon.propTypes = {
  /** Class names for custom styling. */
  className: PropTypes.string,

  /** Show that the icon is inactive */
  disabled: PropTypes.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: PropTypes.bool,

  /** Size of the icon. */
  size: PropTypes.oneOf(Icon._meta.props.sizes),

  /** Icon can be formatter as a link */
  link: PropTypes.bool,

  /** Icon can flipped */
  flipped: PropTypes.oneOf(Icon._meta.props.flipped),

  /** Icon can rotated */
  rotated: PropTypes.oneOf(Icon._meta.props.rotated),

  /** Icon can formatted to appear circular */
  circular: PropTypes.bool,

  /** Formatted to appear bordered */
  bordered: PropTypes.bool,

  /** Formatted to have its colors inverted for contrast */
  inverted: PropTypes.bool,

  /** Icon can be used as a simple loader */
  loading: PropTypes.bool,

  /** Color of the icon. */
  color: PropTypes.oneOf(Icon._meta.props.colors),

  /** Icons can display a smaller corner icon */
  corner: PropTypes.bool,
}

export default Icon
