import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'

function FeedDate(props) {
  const { children, className, date } = props
  const classes = cx(className, 'date')
  const rest = getUnhandledProps(FeedDate, props)

  return <div {...rest} className={classes}>{children || date}</div>
}

FeedDate._meta = {
  name: 'FeedDate',
  parent: 'Feed',
  type: META.type.view,
}

FeedDate.propTypes = {
  /** Primary content of the FeedDate. Mutually exclusive with the date prop. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['date']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedDate className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the FeedDate. Mutually exclusive with the children prop. */
  date: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.string,
  ]),
}

export default FeedDate
