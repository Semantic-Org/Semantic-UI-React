import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function FeedSummary(props) {
  const { children, className } = props
  const classes = cx(className, 'summary')
  const rest = getUnhandledProps(FeedSummary, props)

  return <div {...rest} className={classes}>{children}</div>
}

FeedSummary._meta = {
  library: META.library.semanticUI,
  name: 'FeedDate',
  parent: 'Feed',
  type: META.type.view,
}

FeedSummary.propTypes = {
  /** Primary content of the FeedSummary. */
  children: PropTypes.node,

  /** Classes that will be added to the FeedSummary className. */
  className: PropTypes.string,
}

export default FeedSummary
