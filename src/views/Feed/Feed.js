import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function Feed(props) {
  const { children, className } = props
  const classes = cx(
    'ui',
    className,
    'feed',
  )
  const rest = getUnhandledProps(Feed, props)

  return <div {...rest} className={classes}>{children}</div>
}

Feed._meta = {
  library: META.library.semanticUI,
  name: 'Feed',
  type: META.type.view,
}

Feed.propTypes = {
  /** Primary content of the Feed. */
  children: PropTypes.node,

  /** Classes that will be added to the Feed className. */
  className: PropTypes.string,
}

export default Feed
