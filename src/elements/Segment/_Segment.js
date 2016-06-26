import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import * as sui from '../../utils/semanticUtils'
import {
  useKeyOnly,
  getUnhandledProps,
  useKeyOrValueAndKey,
  useValueAndKey,
  useAlignedProp,
} from '../../utils/propUtils'
import Header from '../Header/Header'

function _Segment(props) {
  const {
    _sdClass, _segmentClass,
    className, heading, children, raised, stacked, piled, attached, aligned, floated, disabled, loading, padded,
    basic, inverted, circular, color, clearing, compact,
  } = props

  const classes = cx(_sdClass, 'ui',
    color,
    useKeyOnly(raised, 'raised'),
    useKeyOnly(stacked, 'stacked'),
    useKeyOnly(piled, 'piled'),
    useKeyOrValueAndKey(attached, 'attached'),
    useAlignedProp(aligned, 'aligned'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(loading, 'loading'),
    useKeyOrValueAndKey(padded, 'padded'),
    useKeyOnly(basic, 'basic'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(clearing, 'clearing'),
    useKeyOnly(compact, 'compact'),
    className,
    _segmentClass
  )

  const rest = getUnhandledProps(_Segment, props)

  return (
    <div className={classes} {...rest}>
      {heading && (
        <Header.H4>{heading}</Header.H4>
      )}
      {children}
    </div>
  )
}

_Segment._meta = {
  library: META.library.semanticUI,
  name: '_Segment',
  type: META.type.element,
  props: {
    attached: ['top', 'bottom'],
    floated: ['left', 'right'],
    aligned: ['horizontal', 'vertical'],
    padded: ['very'],
    color: sui.colors,
  },
}

_Segment.propTypes = {
  _sdClass: PropTypes.string,
  _segmentClass: PropTypes.string,

  /** Segment tag body content. */
  children: PropTypes.any,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** Optional segment heading. */
  heading: PropTypes.any,

  /** */
  raised: PropTypes.bool,

  /** Formatted to show it contains multiple pages. */
  stacked: PropTypes.bool,

  /** Formatted to look like a pile of pages. */
  piled: PropTypes.bool,

  /** Attach segment to other content, like a header */
  attached: PropTypes.oneOf(_Segment._meta.props.attached),

  /** Formats content to be aligned as part of a vertical group. */
  aligned: PropTypes.oneOf(_Segment._meta.props.aligned),

  /** Segment content can be floated to the left or right */
  floated: PropTypes.oneOf(_Segment._meta.props.floated),

  color: PropTypes.oneOf(_Segment._meta.props.color),

  /** */
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  padded: PropTypes.oneOf(_Segment._meta.props.padded),
  basic: PropTypes.bool,
  circular: PropTypes.bool,
  inverted: PropTypes.bool,
  clearing: PropTypes.bool,
  compact: PropTypes.bool,
}

_Segment.defaultProps = {
  _sdClass: 'sd-segment',
  _segmentClass: 'segment',
}

export default _Segment
