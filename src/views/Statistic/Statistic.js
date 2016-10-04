import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useValueAndKey,
} from '../../lib'
import StatisticGroup from './StatisticGroup'
import StatisticLabel from './StatisticLabel'
import StatisticValue from './StatisticValue'

function Statistic(props) {
  const { children, className, color, floated, horizontal, inverted, label, size, text, value } = props
  const classes = cx(
    'ui',
    color,
    useValueAndKey(floated, 'floated'),
    useKeyOnly(horizontal, 'horizontal'),
    useKeyOnly(inverted, 'inverted'),
    size,
    className,
    'statistic',
  )
  const rest = getUnhandledProps(Statistic, props)
  const ElementType = getElementType(Statistic, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      <StatisticValue content={value} text={text} />
      <StatisticLabel content={label} />
    </ElementType>
  )
}

Statistic._meta = {
  name: 'Statistic',
  type: META.TYPES.VIEW,
  props: {
    color: SUI.COLORS,
    floated: SUI.FLOATS,
    size: _.without(SUI.SIZES, 'big', 'massive', 'medium'),
  },
}

Statistic.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the Statistic. Mutually exclusive with all shorthand props. */
  children: customPropTypes.every([
    customPropTypes.disallow(['label', 'value']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the Statistic className. */
  className: PropTypes.string,

  /** A statistic can be formatted to be different colors. */
  color: PropTypes.oneOf(Statistic._meta.props.color),

  /** A statistic can sit to the left or right of other content. */
  floated: PropTypes.oneOf(Statistic._meta.props.floated),

  /** A statistic can present its measurement horizontally. */
  horizontal: PropTypes.bool,

  /** A statistic can be formatted to fit on a dark background. */
  inverted: PropTypes.bool,

  /** Shorthand for the StatisticLabel component. Mutually exclusive with the children. */
  label: customPropTypes.shorthand,

  /** A statistic can vary in size. */
  size: PropTypes.oneOf(Statistic._meta.props.size),

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,

  /** Shorthand for the StatisticValue component. Mutually exclusive with the children. */
  value: customPropTypes.shorthand,
}

Statistic.Group = StatisticGroup
Statistic.Label = StatisticLabel
Statistic.Value = StatisticValue

export default Statistic
