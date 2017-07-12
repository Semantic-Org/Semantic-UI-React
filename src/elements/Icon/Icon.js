import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useValueAndKey,
} from '../../lib'
import IconGroup from './IconGroup'

/**
 * An icon is a glyph used to represent something else.
 * @see Image
 */
function Icon(props) {
  const {
    bordered,
    circular,
    className,
    color,
    corner,
    disabled,
    fitted,
    flipped,
    inverted,
    link,
    loading,
    name,
    rotated,
    size,
  } = props

  const classes = cx(
    color,
    name,
    size,
    useKeyOnly(bordered, 'bordered'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(corner, 'corner'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(fitted, 'fitted'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(link, 'link'),
    useKeyOnly(loading, 'loading'),
    useValueAndKey(flipped, 'flipped'),
    useValueAndKey(rotated, 'rotated'),
    'icon',
    className,
  )
  const rest = getUnhandledProps(Icon, props)
  const ElementType = getElementType(Icon, props)

  return <ElementType {...rest} aria-hidden='true' className={classes} />
}

Icon.Group = IconGroup

Icon._meta = {
  name: 'Icon',
  type: META.TYPES.ELEMENT,
}

Icon.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Formatted to appear bordered. */
  bordered: PropTypes.bool,

  /** Icon can formatted to appear circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Color of the icon. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Icons can display a smaller corner icon. */
  corner: PropTypes.bool,

  /** Show that the icon is inactive. */
  disabled: PropTypes.bool,

  /** Fitted, without space to left or right of Icon. */
  fitted: PropTypes.bool,

  /** Icon can flipped. */
  flipped: PropTypes.oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: PropTypes.bool,

  /** Icon can be formatted as a link. */
  link: PropTypes.bool,

  /** Icon can be used as a simple loader. */
  loading: PropTypes.bool,

  /** Name of the icon. */
  name: customPropTypes.suggest(SUI.ALL_ICONS_IN_ALL_CONTEXTS),

  /** Icon can rotated. */
  rotated: PropTypes.oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium')),
}

Icon.defaultProps = {
  as: 'i',
}

Icon.create = createShorthandFactory(Icon, value => ({ name: value }))

export default Icon
