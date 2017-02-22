import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A statistic can contain a numeric, icon, image, or text value.
 */
function StatisticValue(props) {
  const {
    children,
    className,
    text,
    value,
  } = props

  const classes = cx(
    useKeyOnly(text, 'text'),
    'value',
    className,
  )
  const rest = getUnhandledProps(StatisticValue, props)
  const ElementType = getElementType(StatisticValue, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? value : children}
    </ElementType>
  )
}

StatisticValue._meta = {
  name: 'StatisticValue',
  parent: 'Statistic',
  type: META.TYPES.VIEW,
}

StatisticValue.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Format the value with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,

  /** Primary content of the StatisticValue. Mutually exclusive with the children prop. */
  value: customPropTypes.contentShorthand,
}

export default StatisticValue
