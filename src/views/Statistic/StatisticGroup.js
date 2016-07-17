import _ from 'lodash'
import cx from 'classnames'
import React, {PropTypes} from 'react'

import {customPropTypes, getUnhandledProps, useKeyOnly} from '../../utils/propUtils'
import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta'
import Statistic from './Statistic'

function StatisticGroup(props) {
  const {children, className, horizontal, items, widths} = props
  const classes = cx(
    'ui',
    useKeyOnly(horizontal, 'horizontal'),
    _.isNumber(widths) ? numberToWord(widths) : widths,
    className,
    'statistics'
  )
  const rest = getUnhandledProps(StatisticGroup, props)

  if (children) {
    return <div className={classes} {...rest}>{children}</div>
  }

  let itemsJSX = items.map((item) => <Statistic {...item}/>)

  return <div className={classes} {...rest}>{itemsJSX}</div>
}

StatisticGroup._meta = {
  library: META.library.semanticUI,
  name: 'StatisticGroup',
  type: META.type.view,
  parent: 'Statistic',
}

StatisticGroup.propTypes = {
  /** Primary content of the StatisticGroup. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the StatisticGroup className. */
  className: PropTypes.string,

  /** A statistic can present its measurement horizontally. */
  horizontal: PropTypes.bool,

  /** Array of props for Statistic. */
  items: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.array,
  ]),

  /** A statistic group can have its items divided evenly. */
  widths: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

export default StatisticGroup
