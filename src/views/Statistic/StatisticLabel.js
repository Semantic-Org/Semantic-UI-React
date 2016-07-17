import cx from 'classnames'
import React, { PropTypes } from 'react'

import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'
import META from '../../utils/Meta'

// TODO: This file has disabled shorthand props
// @see https://github.com/TechnologyAdvice/stardust/pull/334

function StatisticLabel(props) {
  // const { children, className, content } = props
  const { children, className } = props
  const classes = cx(className, 'label')
  const rest = getUnhandledProps(StatisticLabel, props)

  // return <div className={classes} {...rest}>{children || content}</div>
  return <div {...rest} className={classes}>{children}</div>
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

  // /** Primary content of the StatisticLabel. Mutually exclusive with the children prop. */
  // content: customPropTypes.all([
  //   customPropTypes.mutuallyExclusive(['children']),
  //   PropTypes.node,
  // ]),
}

export default StatisticLabel
