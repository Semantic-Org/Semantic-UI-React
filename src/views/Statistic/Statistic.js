import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
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

  if (children) {
    return <div {...rest} className={classes}>{children}</div>
  }

  return (
    <div {...rest} className={classes}>
      <StatisticValue text={text} value={value} />
      <StatisticLabel label={label} />
    </div>
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
  /** Primary content of the Statistic. */
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

  /** Label content of the Statistic. Mutually exclusive with the children prop. */
  label: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),

  /** A statistic can vary in size. */
  size: PropTypes.oneOf(Statistic._meta.props.size),

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,

  /** Value content of the Statistic. Mutually exclusive with the children prop. */
  value: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

Statistic.Group = StatisticGroup
Statistic.Label = StatisticLabel
Statistic.Value = StatisticValue

export default Statistic
