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
  const { children, className, content, text } = props
  const classes = cx(useKeyOnly(text, 'text'), className, 'value')
  const rest = getUnhandledProps(StatisticValue, props)
  const ElementType = getElementType(StatisticValue, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

StatisticValue._meta = {
  name: 'StatisticValue',
  parent: 'Statistic',
  type: META.TYPES.VIEW,
}

StatisticValue.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the StatisticValue. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the StatisticValue className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the StatisticValue. Mutually exclusive with the children. */
  content: customPropTypes.shorthand,

  /** Format the value with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,
}

export default StatisticValue
