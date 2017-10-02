import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  withElementType,
} from '../../lib'

/**
 * A label can be grouped.
 */
function LabelGroup(props) {
  const {
    as: ElementType,
    children,
    circular,
    className,
    color,
    size,
    tag,
  } = props

  const classes = cx(
    'ui',
    color,
    size,
    useKeyOnly(circular, 'circular'),
    useKeyOnly(tag, 'tag'),
    'labels',
    className,
  )
  const rest = getUnhandledProps(LabelGroup, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

LabelGroup._meta = {
  name: 'LabelGroup',
  parent: 'Label',
  type: META.TYPES.ELEMENT,
}

LabelGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Labels can share shapes. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Label group can share colors together. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** Label group can share sizes together. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** Label group can share tag formatting. */
  tag: PropTypes.bool,
}

export default withElementType(LabelGroup)
