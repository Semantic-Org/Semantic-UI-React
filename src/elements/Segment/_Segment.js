import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import {
  useKeyOnly,
  getUnhandledProps,
  useAlignProp,
} from '../../utils/propUtils'
import Header from '../Header/Header'

function Segment(props) {
  const {
    _sdClass, _segmentClass,
    className, heading, children, raised, stacked, piled, aligned,
  } = props

  const classes = cx(_sdClass, 'ui',
    useKeyOnly(raised, 'raised'),
    useKeyOnly(stacked, 'stacked'),
    useKeyOnly(piled, 'piled'),
    useAlignProp(aligned, 'aligned'),
    className,
    _segmentClass
  )

  const rest = getUnhandledProps(Segment, props)

  return (
    <div className={classes} {...rest}>
      {heading && (
        <Header.H4>{heading}</Header.H4>
      )}
      {children}
    </div>
  )
}

Segment._meta = {
  library: META.library.semanticUI,
  name: 'Segment',
  type: META.type.element,
  props: {
    aligned: ['horizontal', 'vertical'],
  },
}

Segment.propTypes = {
  _sdClass: PropTypes.string,
  _segmentClass: PropTypes.string,

  /** Segment tag body content. */
  children: PropTypes.node,

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

  /** Formats content to be aligned as part of a vertical group. */
  aligned: PropTypes.oneOf(Segment._meta.props.aligned),
}

export default Segment
