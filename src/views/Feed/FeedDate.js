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
  const { children, className, date } = props
  const classes = cx(className, 'date')
  const rest = getUnhandledProps(FeedDate, props)
  const ElementType = getElementType(FeedDate, props)

  return <ElementType {...rest} className={classes}>{children || date}</ElementType>
}

FeedDate._meta = {
  name: 'FeedDate',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedDate.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the FeedDate. Mutually exclusive with the date prop. */
  children: customPropTypes.every([
    customPropTypes.disallow(['date']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedDate className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the FeedDate. Mutually exclusive with the children prop. */
  date: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default FeedDate
