import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function FeedDate(props) {
  const { children, className } = props
  const classes = cx(className, 'date')
  const rest = getUnhandledProps(FeedDate, props)

  return <div {...rest} className={classes}>{children}</div>
}

FeedDate._meta = {
  library: META.library.semanticUI,
  name: 'FeedDate',
  parent: 'Feed',
  type: META.type.view,
}

FeedDate.propTypes = {
  /** Primary content of the FeedDate. */
  children: PropTypes.node,

  /** Classes that will be added to the FeedDate className. */
  className: PropTypes.string,
}

export default FeedDate
