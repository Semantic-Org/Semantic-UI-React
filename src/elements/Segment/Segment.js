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
  useKeyOrValueAndKey,
  useTextAlignProp,
  useValueAndKey,
} from '../../lib'
import SegmentGroup from './SegmentGroup'

/**
 * A segment is used to create a grouping of related content.
 */
function Segment(props) {
  const {
    attached,
    basic,
    children,
    circular,
    className,
    clearing,
    color,
    compact,
    disabled,
    floated,
    inverted,
    loading,
    padded,
    piled,
    raised,
    secondary,
    size,
    stacked,
    tertiary,
    textAlign,
    vertical,
  } = props

  const classes = cx(
    'ui',
    color,
    size,
    useKeyOrValueAndKey(attached, 'attached'),
    useKeyOnly(basic, 'basic'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(clearing, 'clearing'),
    useKeyOnly(compact, 'compact'),
    useKeyOnly(disabled, 'disabled'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(loading, 'loading'),
    useKeyOrValueAndKey(padded, 'padded'),
    useKeyOnly(piled, 'piled'),
    useKeyOnly(raised, 'raised'),
    useKeyOnly(secondary, 'secondary'),
    useKeyOnly(stacked, 'stacked'),
    useKeyOnly(tertiary, 'tertiary'),
    useTextAlignProp(textAlign),
    useKeyOnly(vertical, 'vertical'),
    className,
    'segment',
  )
  const rest = getUnhandledProps(Segment, props)
  const ElementType = getElementType(Segment, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Segment.Group = SegmentGroup

Segment._meta = {
  name: 'Segment',
  type: META.TYPES.ELEMENT,
  props: {
    attached: ['top', 'bottom'],
    color: SUI.COLORS,
    floated: SUI.FLOATS,
    padded: ['very'],
    size: _.without(SUI.SIZES, 'medium'),
    textAlign: SUI.TEXT_ALIGNMENTS,
  },
}

Segment.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Attach segment to other content, like a header */
  attached: PropTypes.oneOfType([
    PropTypes.oneOf(Segment._meta.props.attached),
    PropTypes.bool,
  ]),

  /** A basic segment has no special formatting */
  basic: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** A segment can be circular */
  circular: PropTypes.bool,

  /** Additional classes. */
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

  /** A segment can have its colors inverted for contrast */
  inverted: PropTypes.bool,

  /** A segment may show its content is being loaded */
  loading: PropTypes.bool,

  /** A segment can increase its padding */
  padded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Segment._meta.props.padded),
  ]),

  /** Formatted to look like a pile of pages. */
  piled: PropTypes.bool,

  /** A segment may be formatted to raise above the page. */
  raised: PropTypes.bool,

  /** A segment can be formatted to appear less noticeable */
  secondary: PropTypes.bool,

  /** A segment can have different sizes. */
  size: PropTypes.oneOf(Segment._meta.props.size),

  /** Formatted to show it contains multiple pages. */
  stacked: PropTypes.bool,

  /** A segment can be formatted to appear even less noticeable */
  tertiary: PropTypes.bool,

  /** Formats content to be aligned as part of a vertical group. */
  textAlign: PropTypes.oneOf(Segment._meta.props.textAlign),

  /** Formats content to be aligned vertically */
  vertical: PropTypes.bool,
}

export default Segment
