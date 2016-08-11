import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'
import FeedLike from './FeedLike'

function FeedMeta(props) {
  const { children, className, like, meta } = props
  const classes = cx(className, 'meta')
  const rest = getUnhandledProps(FeedMeta, props)

  return (
    <div {...rest} className={classes}>
      {like && <FeedLike like={like} />}
      {children || meta}
    </div>
  )
}

FeedMeta._meta = {
  name: 'FeedMeta',
  parent: 'Feed',
  type: META.type.view,
}

FeedMeta.propTypes = {
  /** Primary content of the FeedMeta. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['meta']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedMeta className. */
  className: PropTypes.string,

  /** Shorthand for FeedLike. */
  like: PropTypes.node,

  /** Primary content of the FeedMeta. Mutually exclusive with children. */
  meta: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.string,
  ]),
}

export default FeedMeta
