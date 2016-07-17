import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import { customPropTypes, getUnhandledProps, useKeyOnly, useValueAndKey } from '../../utils/propUtils'
import * as sui from '../../utils/semanticUtils'
import META from '../../utils/Meta'
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
      <Statistic.Value text={text}>{value}</Statistic.Value>
      <Statistic.Label>{label}</Statistic.Label>
    </div>
  )
}

Statistic._meta = {
  library: META.library.semanticUI,
  name: 'Statistic',
  type: META.type.view,
  props: {
    color: sui.colors,
    floated: sui.floats,
    size: _.without(sui.sizes, 'big', 'massive', 'medium'),
  },
}

Statistic.propTypes = {
  /** Primary content of the Statistic. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['label', 'value']),
    customPropTypes.ofComponentTypes([
      'StatisticLabel',
      'StatisticValue',
    ]),
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
  label: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),

  /** A statistic can vary in size. */
  size: PropTypes.oneOf(Statistic._meta.props.size),

  /** Format the StatisticValue with smaller font size to fit nicely beside number values. */
  text: PropTypes.bool,

  /** Value content of the Statistic. Mutually exclusive with the children prop. */
  value: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

Statistic.Group = StatisticGroup
Statistic.Label = StatisticLabel
Statistic.Value = StatisticValue

export default Statistic
