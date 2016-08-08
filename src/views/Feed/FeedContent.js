import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'
import FeedDate from './FeedDate'
import FeedMeta from './FeedMeta'
import FeedSummary from './FeedSummary'

function FeedContent(props) {
  const { children, content, className, date, meta, summary } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(FeedContent, props)

  return (
    <div {...rest} className={classes}>
      {date && <FeedDate date={date} />}
      {summary && <FeedSummary summary={summary} />}
      {meta && <FeedMeta meta={meta} />}
      {children || content}
    </div>
  )
}

FeedContent._meta = {
  name: 'FeedContent',
  parent: 'Feed',
  type: META.type.view,
}

FeedContent.propTypes = {
  /** Primary content of the FeedContent. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedContent className. */
  className: PropTypes.string,

  /** Primary content of the FeedContent. */
  content: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),

  /** An event can contain a date. */
  date: PropTypes.node,

  /** A shorthand for FeedMeta. */
  meta: PropTypes.node,

  /** A shorthand for FeedSummary. */
  summary: PropTypes.node,
}

export default FeedContent
