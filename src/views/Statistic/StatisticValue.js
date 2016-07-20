import cx from 'classnames'
import React, { PropTypes } from 'react'

import { customPropTypes, getUnhandledProps, useKeyOnly } from '../../utils/propUtils'
import META from '../../utils/Meta'

// TODO: This file has disabled shorthand props
// @see https://github.com/TechnologyAdvice/stardust/pull/334

function StatisticValue(props) {
  // const { children, className, content, text } = props
  const { children, className, text } = props
  const classes = cx(useKeyOnly(text, 'text'), className, 'value')
  const rest = getUnhandledProps(StatisticValue, props)

  // return <div className={classes} {...rest}>{children || content}</div>
  return <div {...rest} className={classes}>{children}</div>
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

  // /** Primary content of the StatisticValue. Mutually exclusive with the children prop. */
  // content: customPropTypes.all([
  //   customPropTypes.mutuallyExclusive(['children']),
  //   PropTypes.node,
  // ]),

  /** Format the value with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,
}

export default StatisticValue
