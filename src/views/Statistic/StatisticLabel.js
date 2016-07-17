import cx from 'classnames'
import React, { PropTypes } from 'react'

import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'
import META from '../../utils/Meta'

function StatisticLabel(props) {
  const { children, className, content } = props
  const classes = cx(className, 'label')
  const rest = getUnhandledProps(StatisticLabel, props)

  return <div className={classes} {...rest}>{children || content}</div>
}

StatisticLabel._meta = {
  library: META.library.semanticUI,
  name: 'StatisticLabel',
  parent: 'Statistic',
  type: META.type.view,
}

StatisticLabel.propTypes = {
  /** Primary content of the StatisticLabel. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the StatisticLabel className. */
  className: PropTypes.string,

  /** Primary content of the StatisticLabel. Mutually exclusive with the children prop. */
  content: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default StatisticLabel
