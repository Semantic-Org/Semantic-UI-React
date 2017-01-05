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

/**
 * A statistic emphasizes the current value of an attribute
 */
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

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      <StatisticValue text={text} value={value} />
      <StatisticLabel label={label} />
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

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A statistic can be formatted to be different colors. */
  color: PropTypes.oneOf(Statistic._meta.props.color),

  /** A statistic can sit to the left or right of other content. */
  floated: PropTypes.oneOf(Statistic._meta.props.floated),

  /** A statistic can present its measurement horizontally. */
  horizontal: PropTypes.bool,

  /** A statistic can be formatted to fit on a dark background. */
  inverted: PropTypes.bool,

  /** Label content of the Statistic. */
  label: customPropTypes.contentShorthand,

  /** A statistic can vary in size. */
  size: PropTypes.oneOf(Statistic._meta.props.size),

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,

  /** Value content of the Statistic. */
  value: customPropTypes.contentShorthand,
}

Statistic.Group = StatisticGroup
Statistic.Label = StatisticLabel
Statistic.Value = StatisticValue

export default Statistic
