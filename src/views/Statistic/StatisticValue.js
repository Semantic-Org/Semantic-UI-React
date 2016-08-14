import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function StatisticValue(props) {
  const { children, className, text, value } = props
  const classes = cx(useKeyOnly(text, 'text'), className, 'value')
  const rest = getUnhandledProps(StatisticValue, props)

  return <div {...rest} className={classes}>{children || value}</div>
}

StatisticValue._meta = {
  name: 'StatisticValue',
  parent: 'Statistic',
  type: META.TYPES.VIEW,
}

StatisticValue.propTypes = {
  /** Primary content of the StatisticValue. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the StatisticValue className. */
  className: PropTypes.string,

  /** Format the value with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,

  /** Primary content of the StatisticValue. Mutually exclusive with the children prop. */
  value: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default StatisticValue
