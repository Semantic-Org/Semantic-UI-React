import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import Statistic from './Statistic'

/**
 * A group of statistics.
 */
function StatisticGroup(props) {
  const {
    children,
    className,
    color,
    horizontal,
    inverted,
    items,
    size,
    widths,
  } = props

  const classes = cx(
    'ui',
    color,
    size,
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(inverted, 'inverted'),
    useWidthProp(widths),
    'statistics',
    className,
  )
  const rest = getUnhandledProps(StatisticGroup, props)
  const ElementType = getElementType(StatisticGroup, props)

  if (!childrenUtils.isNil(children)) return <ElementType {...rest} className={classes}>{children}</ElementType>

  const itemsJSX = _.map(items, item => (
    <Statistic key={item.childKey || [item.label, item.title].join('-')} {...item} />
  ))

  return <ElementType {...rest} className={classes}>{itemsJSX}</ElementType>
}

StatisticGroup._meta = {
  name: 'StatisticGroup',
  type: META.TYPES.VIEW,
  parent: 'Statistic',
}

StatisticGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A statistic group can be formatted to be different colors. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** A statistic group can present its measurement horizontally. */
  horizontal: PropTypes.bool,

  /** A statistic group can be formatted to fit on a dark background. */
  inverted: PropTypes.bool,

  /** Array of props for Statistic. */
  items: customPropTypes.collectionShorthand,

  /** A statistic group can vary in size. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'big', 'massive', 'medium')),

  /** A statistic group can have its items divided evenly. */
  widths: PropTypes.oneOf(SUI.WIDTHS),
}

export default StatisticGroup
