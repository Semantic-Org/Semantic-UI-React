import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
   customPropTypes,
   getUnhandledProps,
   META,
} from '../../lib'
import FeedContent from './FeedContent'
import FeedLabel from './FeedLabel'

function FeedEvent(props) {
  const { content, children, className, date, extraImages, extraText, image, icon, meta, summary } = props
  const classes = cx(className, 'event')
  const rest = getUnhandledProps(FeedEvent, props)

  const hasContentProp = (content || date || extraImages || extraText || meta || summary)
  const contentProps = { content, date, extraImages, extraText, meta, summary }

  return (
    <div {...rest} className={classes}>
    {icon && <FeedLabel icon={icon} />}
    {image && <FeedLabel image={image} />}
    {hasContentProp && <FeedContent {...contentProps} />}
    {children}
  </div>
  )
}

FeedEvent._meta = {
  name: 'FeedEvent',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedEvent.propTypes = {
  /** Primary content of the FeedEvent. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'date', 'extraImages', 'extraText', 'meta', 'summary']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedEvent className. */
  className: PropTypes.string,

  /** Shorthand for FeedContent. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children', 'date', 'extraImages', 'extraText', 'meta', 'summary']),
    PropTypes.string,
  ]),

  /** Shorthand for FeedDate. */
  date: customPropTypes.every([
    customPropTypes.disallow(['children', 'content']),
    PropTypes.string,
  ]),

  /** Shorthand for FeedExtra with prop images. */
  extraImages: customPropTypes.every([
    customPropTypes.disallow(['children', 'content']),
    PropTypes.arrayOf(PropTypes.node),
  ]),

  /** Shorthand for FeedExtra with prop text. */
  extraText: customPropTypes.every([
    customPropTypes.disallow(['children', 'content']),
    PropTypes.string,
  ]),

  /** An event can contain icon label. */
  icon: PropTypes.node,

  /** An event can contain image label. */
  image: PropTypes.node,

  /** Shorthand for FeedMeta. */
  meta: customPropTypes.every([
    customPropTypes.disallow(['children', 'content']),
    PropTypes.string,
  ]),

  /** Shorthand for FeedSummary. */
  summary: customPropTypes.every([
    customPropTypes.disallow(['children', 'content']),
    PropTypes.string,
  ]),
}

export default FeedEvent
