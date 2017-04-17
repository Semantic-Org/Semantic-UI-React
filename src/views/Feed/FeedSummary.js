import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FeedDate from './FeedDate'
import FeedUser from './FeedUser'

/**
 * A feed can contain a summary.
 */
function FeedSummary(props) {
  const {
    children,
    className,
    content,
    date,
    user,
  } = props

  const classes = cx('summary', className)
  const rest = getUnhandledProps(FeedSummary, props)
  const ElementType = getElementType(FeedSummary, props)

  if (!_.isNil(children)) {
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

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for FeedDate. */
  date: customPropTypes.itemShorthand,

  /** Shorthand for FeedUser. */
  user: customPropTypes.itemShorthand,
}

export default FeedSummary
