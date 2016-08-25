import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function StatisticValue(props) {
  const { children, className, text, value } = props
  const classes = cx(useKeyOnly(text, 'text'), className, 'value')
  const rest = getUnhandledProps(StatisticValue, props)
  const ElementType = getElementType(StatisticValue, props)

  return <ElementType {...rest} className={classes}>{children || value}</ElementType>
}

StatisticValue._meta = {
  name: 'StatisticValue',
  parent: 'Statistic',
  type: META.TYPES.VIEW,
}

StatisticValue.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

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
