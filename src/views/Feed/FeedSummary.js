import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
   customPropTypes,
   getUnhandledProps,
   META,
} from '../../lib'
import FeedDate from './FeedDate'

function FeedSummary(props) {
  const { children, className, date, summary } = props
  const classes = cx(className, 'summary')
  const rest = getUnhandledProps(FeedSummary, props)

  return (
    <div {...rest} className={classes}>
      {children || summary }
      {date && <FeedDate date={date} />}
    </div>
  )
}

FeedSummary._meta = {
  name: 'FeedSummary',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedSummary.propTypes = {
  /** Primary content of the FeedSummary. */
  children: customPropTypes.every([
    customPropTypes.disallow(['summary']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedSummary className. */
  className: PropTypes.string,

  /** An event summary can contain a date. */
  date: PropTypes.string,

  summary: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default FeedSummary
