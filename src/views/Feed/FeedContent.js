import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FeedDate from './FeedDate'
import FeedExtra from './FeedExtra'
import FeedMeta from './FeedMeta'
import FeedSummary from './FeedSummary'

function FeedContent(props) {
  const { children, content, className, extraImages, extraText, date, meta, summary } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(FeedContent, props)
  const ElementType = getElementType(FeedContent, props)

  return (
    <ElementType {...rest} className={classes}>
      {date && <FeedDate date={date} />}
      {summary && <FeedSummary summary={summary} />}
      {extraImages && <FeedExtra images={extraImages} />}
      {extraText && <FeedExtra text={extraText} />}
      {meta && <FeedMeta meta={meta} />}
      {children || content}
    </ElementType>
  )
}

FeedContent._meta = {
  name: 'FeedContent',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the FeedContent. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedContent className. */
  className: PropTypes.string,

  /** Primary content of the FeedContent. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),

  /** An event can contain a date. */
  date: PropTypes.string,

  /** Shorthand for FeedExtra with prop images. */
  extraImages: customPropTypes.every([
    customPropTypes.disallow(['children', 'content']),
    PropTypes.arrayOf(PropTypes.string),
  ]),

  /** Shorthand for FeedExtra with prop text. */
  extraText: customPropTypes.every([
    customPropTypes.disallow(['children', 'content']),
    PropTypes.string,
  ]),

  /** A shorthand for FeedMeta. */
  meta: PropTypes.string,

  /** A shorthand for FeedSummary. */
  summary: PropTypes.string,
}

export default FeedContent
