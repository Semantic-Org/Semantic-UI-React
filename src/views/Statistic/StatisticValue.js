import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

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
  name: 'StatisticValue',
  parent: 'Statistic',
  type: META.TYPES.VIEW,
}

StatisticValue.propTypes = {
  /** Primary content of the StatisticValue. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the StatisticValue className. */
  className: PropTypes.string,

  // /** Primary content of the StatisticValue. Mutually exclusive with the children prop. */
  // content: customPropTypes.every([
  //   customPropTypes.disallow(['children']),
  //   PropTypes.node,
  // ]),

  /** Format the value with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,
}

export default StatisticValue
