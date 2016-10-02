import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthand,
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
  const { children, className, content, extraImages, extraText, date, meta, summary } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(FeedContent, props)
  const ElementType = getElementType(FeedContent, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {createShorthand(FeedDate, val => ({ content: val }), date)}
      {createShorthand(FeedSummary, val => ({ content: val }), summary)}
      {content}
      {createShorthand(FeedExtra, val => ({ text: true, content: val }), extraText)}
      {createShorthand(FeedExtra, val => ({ images: val }), extraImages)}
      {createShorthand(FeedMeta, val => ({ content: val }), meta)}
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

  /** Primary content of the FeedContent. Mutually exclusive with all shorthand props. */
  children: customPropTypes.every([
    customPropTypes.disallow([
      'date',
      'extraImages',
      'extraText',
      'meta',
      'summary',
    ]),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedContent className. */
  className: PropTypes.string,

  /** Shorthand for children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),

  /** An event can contain a date. */
  date: FeedDate.propTypes.content,

  /** Shorthand for the FeedExtra component with images. Mutually exclusive with children. */
  extraImages: FeedExtra.propTypes.images,

  /** Shorthand for the FeedExtra component with text. Mutually exclusive with children. */
  extraText: FeedExtra.propTypes.content,

  /** Shorthand for the FeedMeta component. Mutually exclusive with children. */
  meta: FeedMeta.propTypes.content,

  /** Shorthand for the FeedSummary component. Mutually exclusive with children. */
  summary: FeedSummary.propTypes.content,
}

export default FeedContent
