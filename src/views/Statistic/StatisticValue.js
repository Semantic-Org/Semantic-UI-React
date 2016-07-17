import cx from 'classnames'
import React, { PropTypes } from 'react'

import { customPropTypes, getUnhandledProps, useKeyOnly } from '../../utils/propUtils'
import META from '../../utils/Meta'

function StatisticValue(props) {
  const { children, className, content, text } = props
  const classes = cx(useKeyOnly(text, 'text'), className, 'value')
  const rest = getUnhandledProps(StatisticValue, props)

  return <div className={classes} {...rest}>{children || content}</div>
}

StatisticValue._meta = {
  library: META.library.semanticUI,
  name: 'StatisticValue',
  parent: 'Statistic',
  type: META.type.view,
}

StatisticValue.propTypes = {
  /** Primary content of the StatisticValue. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the StatisticValue className. */
  className: PropTypes.string,

  /** Primary content of the StatisticValue. Mutually exclusive with the children prop. */
  content: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),

  /** Shows that StatisticValue is text. */
  text: PropTypes.bool,
}

export default StatisticValue
