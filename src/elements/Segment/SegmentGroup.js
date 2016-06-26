import cx from 'classnames'
import React, { PropTypes } from 'react'
import {
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A group of segments can be formatted to appear together.
 */
function SegmentGroup(props) {
  const {
    children, className, horizontal, raised, stacked, piled,
  } = props

  const classes = cx(
    'ui',
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(raised, 'raised'),
    useKeyOnly(stacked, 'stacked'),
    useKeyOnly(piled, 'piled'),
    className,
    'segments',
  )

  const rest = getUnhandledProps(SegmentGroup, props)
  const ElementType = getElementType(SegmentGroup, props)
  return (
    <ElementType className={classes} {...rest}>
      {children}
    </ElementType>
  )
}


SegmentGroup._meta = {
  library: META.library.semanticUI,
  name: 'SegmentGroup',
  parent: 'Segment',
  type: META.type.element,
}


SegmentGroup.propTypes = {
  /** Class names for custom styling. */
  className: PropTypes.string,

  /** Nested segments for this Segment group */
  children: PropTypes.node,

  /** Formats content to be aligned horizontally */
  horizontal: PropTypes.bool,

  /** Formatted to look like a pile of pages. */
  piled: PropTypes.bool,

  /** A segment group may be formatted to raise above the page. */
  raised: PropTypes.bool,

  /** Formatted to show it contains multiple pages. */
  stacked: PropTypes.bool,
}

export default SegmentGroup
