import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getUnhandledProps, useKeyOnly } from '../../utils/propUtils'
import META from '../../utils/Meta'

function StatisticGroup(props) {
  const { children, className, horizontal } = props
  const classes = cx(
    'ui',
    className,
    useKeyOnly(horizontal, 'horizontal'),
    'value'
  )
  const rest = getUnhandledProps(StatisticGroup, props)

  return <div className={classes} {...rest}>{children}</div>
}

StatisticGroup._meta = {
  library: META.library.semanticUI,
  name: 'StatisticGroup',
  type: META.type.view,
  parent: 'Statistic',
}

StatisticGroup.propTypes = {
  /** Primary content of the StatisticLabel. */
  children: PropTypes.node,

  /** Classes that will be added to the StatisticLabel className. */
  className: PropTypes.string,

  /** A statistic can present its measurement horizontally. */
  horizontal: PropTypes.bool,
}

export default StatisticGroup
