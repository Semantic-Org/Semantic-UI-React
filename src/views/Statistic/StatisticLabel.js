import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'

function StatisticLabel(props) {
  const { children, className, label } = props
  const classes = cx(className, 'label')
  const rest = getUnhandledProps(StatisticLabel, props)

  return <div {...rest} className={classes}>{children || label}</div>
}

StatisticLabel._meta = {
  name: 'StatisticLabel',
  parent: 'Statistic',
  type: META.TYPES.VIEW,
}

StatisticLabel.propTypes = {
  /** Primary content of the StatisticLabel. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the StatisticLabel className. */
  className: PropTypes.string,

  /** Primary content of the StatisticLabel. Mutually exclusive with the children prop. */
  label: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default StatisticLabel
