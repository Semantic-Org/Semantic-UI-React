import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import FeedDate from './FeedDate'

function FeedContent(props) {
  const { children, className, date } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(FeedContent, props)

  return (
    <div {...rest} className={classes}>
      {date && <FeedDate date={date} />}
      {children}
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
  children: PropTypes.node,

  /** Classes that will be added to the FeedContent className. */
  className: PropTypes.string,

  /** An event can contain a date. */
  date: PropTypes.node,
}

export default FeedContent
