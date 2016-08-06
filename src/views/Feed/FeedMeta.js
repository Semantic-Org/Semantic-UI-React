import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import FeedLike from './FeedLike'

function FeedMeta(props) {
  const { children, className, like } = props
  const classes = cx(className, 'meta')
  const rest = getUnhandledProps(FeedMeta, props)

  return (
    <div {...rest} className={classes}>
      {like && <FeedLike like={like} />}
      {children}
    </div>
  )
}

FeedMeta._meta = {
  library: META.library.semanticUI,
  name: 'FeedMeta',
  parent: 'Feed',
  type: META.type.view,
}

FeedMeta.propTypes = {
  /** Primary content of the FeedMeta. */
  children: PropTypes.node,

  /** Classes that will be added to the FeedMeta className. */
  className: PropTypes.string,

  /** Shorthand for FeedLike. */
  like: PropTypes.node,
}

export default FeedMeta
