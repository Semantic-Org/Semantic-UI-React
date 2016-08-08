import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'
import FeedContent from './FeedContent'
import FeedDate from './FeedDate'
import FeedEvent from './FeedEvent'
import FeedExtra from './FeedExtra'
import FeedLabel from './FeedLabel'
import FeedLike from './FeedLike'
import FeedMeta from './FeedMeta'
import FeedSummary from './FeedSummary'
import FeedUser from './FeedUser'

function Feed(props) {
  const { children, className, size } = props
  const classes = cx('ui', className, size, 'feed')
  const rest = getUnhandledProps(Feed, props)

  return <div {...rest} className={classes}>{children}</div>
}

Feed._meta = {
  name: 'Feed',
  type: META.type.view,
  props: {
    size: _.without(sui.sizes, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive'),
  },
}

Feed.propTypes = {
  /** Primary content of the Feed. */
  children: PropTypes.node,

  /** Classes that will be added to the Feed className. */
  className: PropTypes.string,

  /** A feed can have different sizes. */
  size: PropTypes.oneOf(Feed._meta.props.size),
}

Feed.Content = FeedContent
Feed.Date = FeedDate
Feed.Event = FeedEvent
Feed.Extra = FeedExtra
Feed.Label = FeedLabel
Feed.Like = FeedLike
Feed.Meta = FeedMeta
Feed.Summary = FeedSummary
Feed.User = FeedUser

export default Feed
