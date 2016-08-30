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
import FeedUser from './FeedUser'

function FeedSummary(props) {
  const { children, className, content, date, user } = props
  const classes = cx(className, 'summary')
  const rest = getUnhandledProps(FeedSummary, props)
  const ElementType = getElementType(FeedSummary, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {createShorthand(FeedUser, val => ({ content: val }), user)}
      {content}
      {createShorthand(FeedDate, val => ({ content: val }), date)}
    </ElementType>
  )
}

FeedSummary._meta = {
  name: 'FeedSummary',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedSummary.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the FeedSummary. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'date', 'user']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedSummary className. */
  className: PropTypes.string,

  /** Shorthand for children. Mutually exclusive with children. */
  content: customPropTypes.shorthand,

  /** Shorthand for the FeedDate component. Mutually exclusive with children. */
  date: customPropTypes.shorthand,

  /** Shorthand for the FeedUser component. Mutually exclusive with children. */
  user: customPropTypes.shorthand,
}

export default FeedSummary
