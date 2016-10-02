import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
/**
 * Show a feed date
 */
function FeedDate(props) {
  const { children, className, content } = props
  const classes = cx(className, 'date')
  const rest = getUnhandledProps(FeedDate, props)
  const ElementType = getElementType(FeedDate, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

FeedDate._meta = {
  name: 'FeedDate',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedDate.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the FeedDate. Mutually exclusive with the content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedDate className. */
  className: PropTypes.string,

  /** Shorthand for children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

export default FeedDate
