import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
} from '../../lib'
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
  const ElementType = getElementType(Feed, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const eventsJSX = _.map(events, eventProps => {
    const { childKey, date, meta, summary, ...eventData } = eventProps
    const finalKey = childKey || [date, meta, summary].join('-')

    return (
      <FeedEvent
        date={date}
        key={finalKey}
        meta={meta}
        summary={summary}
        {...eventData}
      />
    )
  })

  return <ElementType {...rest} className={classes}>{eventsJSX}</ElementType>
}

Feed._meta = {
  name: 'Feed',
  type: META.TYPES.VIEW,
  props: {
    size: _.without(SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive'),
  },
}

Feed.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the Feed. */
  children: customPropTypes.every([
    customPropTypes.disallow(['events']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the Feed className. */
  className: PropTypes.string,

  /** Array of props for FeedEvent. */
  events: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.arrayOf(PropTypes.shape({
      childKey: PropTypes.string,
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
