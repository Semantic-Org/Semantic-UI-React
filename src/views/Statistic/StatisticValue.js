import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getUnhandledProps, useKeyOnly } from '../../utils/propUtils'
import META from '../../utils/Meta'

function StatisticValue(props) {
  const { children, className, text } = props
  const classes = cx(useKeyOnly(text, 'text'), className, 'value')
  const rest = getUnhandledProps(StatisticValue, props)

  return <div className={classes} {...rest}>{children}</div>
}

StatisticValue._meta = {
  library: META.library.semanticUI,
  name: 'StatisticValue',
  parent: 'Statistic',
  type: META.type.view,
}

StatisticValue.propTypes = {
  /** Primary content of the StatisticValue. */
  children: PropTypes.node,

  /** Classes that will be added to the StatisticValue className. */
  className: PropTypes.string,

  /** Show that StatisticValue is text. */
  text: PropTypes.bool,
}

export default StatisticValue
