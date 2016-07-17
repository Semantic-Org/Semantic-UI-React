import cx from 'classnames'
import React, { PropTypes } from 'react'

import { customPropTypes, getUnhandledProps, useKeyOnly } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'
import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta'
import Statistic from './Statistic'

function StatisticGroup(props) {
  const { children, className, horizontal, items, widths } = props
  const classes = cx(
    'ui',
    useKeyOnly(horizontal, 'horizontal'),
    numberToWord(widths),
    className,
    'statistics'
  )
  const rest = getUnhandledProps(StatisticGroup, props)

  if (!items) {
    return <div {...rest} className={classes}>{children}</div>
  }

  let itemsJSX = []

  items.forEach((item, index) => {
    const key = `${item.label}-${item.value}-${index}`
    itemsJSX.push(<Statistic key={key} {...item} />)
  })

  return <div {...rest} className={classes}>{itemsJSX}</div>
}

StatisticGroup._meta = {
  library: META.library.semanticUI,
  name: 'StatisticGroup',
  type: META.type.view,
  parent: 'Statistic',
  props: {
    widths: sui.widths,
  },
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
  widths: PropTypes.oneOf(StatisticGroup._meta.props.widths),
}

export default StatisticGroup
