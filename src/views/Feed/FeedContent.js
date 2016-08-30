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
<<<<<<< HEAD
      {createShorthand(FeedExtra, val => ({ text: true, content: val }), extraText)}
      {createShorthand(FeedExtra, val => ({ images: val }), extraImages)}
=======
      {createShorthand(FeedExtra, val => ({ images: val }), extraImages)}
      {createShorthand(FeedExtra, val => ({ text: val }), extraText)}
>>>>>>> wip
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

<<<<<<< HEAD
  /** Shorthand for children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
=======
  /** Deprecated. Use date, extraText, extraImages, meta, and summary instead. */
  content: customPropTypes.deprecate('Use date, extraText, extraImages, meta, and summary instead.'),
>>>>>>> wip

  /** An event can contain a date. */
  date: FeedDate.propTypes.content,

<<<<<<< HEAD
  /** Shorthand for the FeedExtra component with images. Mutually exclusive with children. */
  extraImages: FeedExtra.propTypes.images,

  /** Shorthand for the FeedExtra component with text. Mutually exclusive with children. */
  extraText: FeedExtra.propTypes.content,

  /** Shorthand for the FeedMeta component. Mutually exclusive with children. */
  meta: FeedMeta.propTypes.content,

  /** Shorthand for the FeedSummary component. Mutually exclusive with children. */
=======
  /** Shorthand for FeedExtra with prop images. */
  extraImages: FeedExtra.propTypes.images,

  /** Shorthand for FeedExtra with prop text. */
  extraText: FeedExtra.propTypes.text,

  /** Shorthand for FeedMeta. */
  meta: FeedMeta.propTypes.content,

  /** Shorthand for FeedSummary. */
>>>>>>> wip
  summary: FeedSummary.propTypes.content,
}

export default FeedContent
