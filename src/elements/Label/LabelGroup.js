import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
} from '../../lib'

function LabelGroup(props) {
  const {
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
    className
  )

  const ElementType = getElementType(LabelGroup, props)
  const rest = getUnhandledProps(LabelGroup, props)

  return <ElementType className={classes} {...rest}>{ children }</ElementType>
}

LabelGroup._meta = {
  name: 'LabelGroup',
  parent: 'Label',
  type: META.TYPES.ELEMENT,
  props: {
    color: SUI.COLORS,
    size: SUI.SIZES,
  },
}

LabelGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the label group. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Labels can share shapes. */
  circular: PropTypes.bool,

  /** Classes to add to the label group className. */
  className: PropTypes.string,

  /** Label group can share colors together. */
  color: PropTypes.oneOf(LabelGroup._meta.props.color),

  /** Label group can share sizes together. */
  size: PropTypes.oneOf(LabelGroup._meta.props.size),

  /** Label group can share tag formatting. */
  tag: PropTypes.bool,
}

export default LabelGroup
