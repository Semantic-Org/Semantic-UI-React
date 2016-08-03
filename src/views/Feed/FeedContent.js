import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function FeedContent(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'content',
  )
  const rest = getUnhandledProps(FeedContent, props)

  return <div {...rest} className={classes}>{children}</div>
}

FeedContent._meta = {
  library: META.library.semanticUI,
  name: 'FeedContent',
  parent: 'Feed',
  type: META.type.view,
}

FeedContent.propTypes = {
  /** Primary content of the FeedContent. */
  children: PropTypes.node,

  /** Classes that will be added to the FeedContent className. */
  className: PropTypes.string,
}

export default FeedContent
