import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  numberToWord,
  SUI,
  useKeyOnly,
} from '../../lib'
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

  let itemsJSX = items.map(item => {
    const key = item.key || [item.label, item.title].join('-')

    return <Statistic key={key} {...item} />
  })

  return <div {...rest} className={classes}>{itemsJSX}</div>
}

StatisticGroup._meta = {
  name: 'StatisticGroup',
  type: META.TYPES.VIEW,
  parent: 'Statistic',
  props: {
    widths: SUI.WIDTHS,
  },
}

StatisticGroup.propTypes = {
  /** Primary content of the StatisticGroup. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the StatisticGroup className. */
  className: PropTypes.string,

  /** A statistic can present its measurement horizontally. */
  horizontal: PropTypes.bool,

  /** Array of props for Statistic. */
  items: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      text: PropTypes.bool,
      value: PropTypes.string,
    })),
  ]),

  /** A statistic group can have its items divided evenly. */
  widths: PropTypes.oneOf(StatisticGroup._meta.props.widths),
}

export default StatisticGroup
