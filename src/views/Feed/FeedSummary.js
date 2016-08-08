import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import FeedDate from './FeedDate'

function FeedSummary(props) {
  const { children, className, date } = props
  const classes = cx(className, 'summary')
  const rest = getUnhandledProps(FeedSummary, props)

  return (
    <div {...rest} className={classes}>
      {children}
      {date && <FeedDate date={date} />}
    </div>
  )
}

FeedSummary._meta = {
  name: 'FeedSummary',
  parent: 'Feed',
  type: META.type.view,
}

FeedSummary.propTypes = {
  /** Primary content of the FeedSummary. */
  children: PropTypes.node,

  /** Classes that will be added to the FeedSummary className. */
  className: PropTypes.string,

  /** An event summary can contain a date. */
  date: PropTypes.node,
}

export default FeedSummary
