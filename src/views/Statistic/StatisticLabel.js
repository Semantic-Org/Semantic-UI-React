import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A statistic can contain a label to help provide context for the presented value.
 */
function StatisticLabel(props) {
  const { children, className, label } = props
  const classes = cx('label', className)
  const rest = getUnhandledProps(StatisticLabel, props)
  const ElementType = getElementType(StatisticLabel, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? label : children}
    </ElementType>
  )
}

StatisticLabel._meta = {
  name: 'StatisticLabel',
  parent: 'Statistic',
  type: META.TYPES.VIEW,
}

StatisticLabel.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  label: customPropTypes.contentShorthand,
}

export default StatisticLabel
