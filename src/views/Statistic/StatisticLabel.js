import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getUnhandledProps } from '../../utils/propUtils'
import META from '../../utils/Meta'

function StatisticLabel(props) {
  const { children, className } = props
  const classes = cx(className, 'value')
  const rest = getUnhandledProps(StatisticLabel, props)

  return <div className={classes} {...rest}>{children}</div>
}

StatisticLabel._meta = {
  library: META.library.semanticUI,
  name: 'StatisticLabel',
  parent: 'Statistic',
  type: META.type.view,
}

StatisticLabel.propTypes = {
  /** Primary content of the StatisticLabel. */
  children: PropTypes.node,

  /** Classes that will be added to the StatisticLabel className. */
  className: PropTypes.string,
}

export default StatisticLabel
