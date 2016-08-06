import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function FeedUser(props) {
  const { children, className } = props
  const classes = cx(className, 'user')
  const rest = getUnhandledProps(FeedUser, props)

  return <a {...rest} className={classes}>{children}</a>
}

FeedUser._meta = {
  library: META.library.semanticUI,
  name: 'FeedUser',
  parent: 'Feed',
  type: META.type.view,
}

FeedUser.propTypes = {
  /** Primary content of the FeedUser. */
  children: PropTypes.node,

  /** Classes that will be added to the FeedUser className. */
  className: PropTypes.string,
}

export default FeedUser
