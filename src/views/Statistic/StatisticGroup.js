import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import Statistic from './Statistic'

function StatisticGroup(props) {
  const { children, className, horizontal, items, widths } = props
  const classes = cx(
    'ui',
    useKeyOnly(horizontal, 'horizontal'),
    useWidthProp(widths),
    'statistics',
    className,
  )
  const rest = getUnhandledProps(StatisticGroup, props)
  const ElementType = getElementType(StatisticGroup, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  let itemsJSX = _.map(items, item => (
    <Statistic key={item.childKey || [item.label, item.title].join('-')} {...item} />
  ))

  return <ElementType {...rest} className={classes}>{itemsJSX}</ElementType>
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
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the StatisticGroup. Mutually exclusive with items. */
  children: customPropTypes.every([
    customPropTypes.disallow(['items']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the StatisticGroup className. */
  className: PropTypes.string,

  /** A statistic can present its measurement horizontally. */
  horizontal: PropTypes.bool,

  /** Array of props for Statistic. Mutually exclusive with children. */
  items: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.arrayOf(PropTypes.shape({
      childKey: customPropTypes.childKey,
      // do not spread Statistic propTypes here
      // it will be undefined due to circular imports
      // allow the Statistic to validate the props it is sent
    })),
  ]),

  /** A statistic group can have its items divided evenly. */
  widths: PropTypes.oneOf(StatisticGroup._meta.props.widths),
}

export default StatisticGroup
