import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function StatisticLabel(props) {
  const { children, className, content } = props
  const classes = cx(className, 'label')
  const rest = getUnhandledProps(StatisticLabel, props)
  const ElementType = getElementType(StatisticLabel, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

StatisticLabel._meta = {
  name: 'StatisticLabel',
  parent: 'Statistic',
  type: META.TYPES.VIEW,
}

StatisticLabel.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the StatisticLabel. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Shorthand for primary content of the StatisticLabel. Mutually exclusive with the children. */
  content: customPropTypes.shorthand,

  /** Classes that will be added to the StatisticLabel className. */
  className: PropTypes.string,
}

export default StatisticLabel
