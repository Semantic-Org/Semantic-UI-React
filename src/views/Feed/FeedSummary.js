import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FeedDate from './FeedDate'

function FeedSummary(props) {
  const { children, className, date, summary } = props
  const classes = cx(className, 'summary')
  const rest = getUnhandledProps(FeedSummary, props)
  const ElementType = getElementType(FeedSummary, props)

  return (
    <ElementType {...rest} className={classes}>
      {children || summary }
      {date && <FeedDate date={date} />}
    </ElementType>
  )
}

FeedSummary._meta = {
  name: 'FeedSummary',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedSummary.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

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
