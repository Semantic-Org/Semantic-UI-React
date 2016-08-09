import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'
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
  const { children, className, events, size } = props
  const classes = cx('ui', className, size, 'feed')
  const rest = getUnhandledProps(Feed, props)

  if (!events) {
    return <div {...rest} className={classes}>{children}</div>
  }

  const eventsJSX = events.map(({ key, ...eventData }, index) => {
    const finalKey = key || index

    return <FeedEvent key={finalKey} {...eventData} />
  })

  return <div {...rest} className={classes}>{eventsJSX}</div>
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
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['events']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the Feed className. */
  className: PropTypes.string,

  /** Array of props for FeedEvent. */
  events: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      date: PropTypes.string,
      image: PropTypes.node,
      icon: PropTypes.node,
      meta: PropTypes.string,
      summary: PropTypes.string,
      extraText: PropTypes.string,
      extraImages: PropTypes.arrayOf(PropTypes.node),
    })),
  ]),

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
