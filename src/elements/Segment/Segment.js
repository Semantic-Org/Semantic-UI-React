import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useAlignedProp,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
} from '../../lib'
import SegmentGroup from './SegmentGroup'
import { Header } from '../'


/**
 * A segment is used to create a grouping of related content.
 */
function Segment(props) {
  const {
    className, children, attached, aligned, floated, disabled, loading, padded,
    basic, inverted, circular, color, clearing, compact, heading, vertical,
  } = props

  const classes = cx('ui',
    color,
    useKeyOrValueAndKey(attached, 'attached'),
    useAlignedProp(aligned, 'aligned'),
    useKeyOnly(basic, 'basic'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(clearing, 'clearing'),
    useKeyOnly(compact, 'compact'),
    useKeyOnly(disabled, 'disabled'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(loading, 'loading'),
    useKeyOrValueAndKey(padded, 'padded'),
    useKeyOnly(vertical, 'vertical'),
    className,
    'segment',
  )

  const rest = getUnhandledProps(Segment, props)
  const ElementType = getElementType(Segment, props)

  return (
    <ElementType {...rest} className={classes}>
      {heading && <Header as='h4'>{heading}</Header>}
      {children}
    </ElementType>
  )
}

Segment.Group = SegmentGroup

Segment._meta = {
  name: 'Segment',
  type: META.TYPES.ELEMENT,
  props: {
    attached: ['top', 'bottom'],
    floated: SUI.FLOATS,
    aligned: SUI.VERTICAL_ALIGNMENTS,
    padded: ['very'],
    color: SUI.COLORS,
  },
}

Segment.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Attach segment to other content, like a header */
  attached: PropTypes.oneOf(Segment._meta.props.attached),

  /** Formats content to be aligned as part of a vertical group. */
  aligned: PropTypes.oneOf(Segment._meta.props.aligned),

  /** A basic segment has no special formatting */
  basic: PropTypes.bool,

  /** Segment tag body content. */
  children: PropTypes.any,

  /** A segment can be circular */
  circular: PropTypes.bool,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** A segment can clear floated content */
  clearing: PropTypes.bool,

  /** Segment can be colored */
  color: PropTypes.oneOf(Segment._meta.props.color),

  /** A segment may take up only as much space as is necessary */
  compact: PropTypes.bool,

  /** A segment may show its content is disabled */
  disabled: PropTypes.bool,

  /** Segment content can be floated to the left or right */
  floated: PropTypes.oneOf(Segment._meta.props.floated),

  /** Optional segment heading. */
  heading: PropTypes.string,

  /** A segment can have its colors inverted for contrast */
  inverted: PropTypes.bool,

  /** A segment may show its content is being loaded */
  loading: PropTypes.bool,

  /** A segment can increase its padding */
  padded: PropTypes.oneOf(Segment._meta.props.padded),

  /** Formatted to look like a pile of pages. */
  piled: PropTypes.bool,

  /** A segment may be formatted to raise above the page. */
  raised: PropTypes.bool,

  /** Formatted to show it contains multiple pages. */
  stacked: PropTypes.bool,

  /** Formats content to be aligned vertically */
  vertical: PropTypes.bool,
}

export default Segment
