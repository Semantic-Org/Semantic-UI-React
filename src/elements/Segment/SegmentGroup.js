import _ from 'lodash'
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

/**
 * A group of segments can be formatted to appear together.
 */
function SegmentGroup(props) {
  const { children, className, compact, horizontal, piled, raised, size, stacked } = props
  const classes = cx(
    'ui',
    size,
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(compact, 'compact'),
    useKeyOnly(piled, 'piled'),
    useKeyOnly(raised, 'raised'),
    useKeyOnly(stacked, 'stacked'),
    className,
    'segments',
  )
  const rest = getUnhandledProps(SegmentGroup, props)
  const ElementType = getElementType(SegmentGroup, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

SegmentGroup._meta = {
  name: 'SegmentGroup',
  parent: 'Segment',
  type: META.TYPES.ELEMENT,
  props: {
    size: _.without(SUI.SIZES, 'medium'),
  },
}

SegmentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** A segment may take up only as much space as is necessary */
  compact: PropTypes.bool,

  /** Formats content to be aligned horizontally */
  horizontal: PropTypes.bool,

  /** Formatted to look like a pile of pages. */
  piled: PropTypes.bool,

  /** A segment group may be formatted to raise above the page. */
  raised: PropTypes.bool,

  /** A segment group can have different sizes. */
  size: PropTypes.oneOf(SegmentGroup._meta.props.size),

  /** Formatted to show it contains multiple pages. */
  stacked: PropTypes.bool,
}

export default SegmentGroup
