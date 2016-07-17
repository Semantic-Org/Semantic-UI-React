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
  const { children, className, color, floated, horizontal, inverted, size } = props
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

  return <div className={classes} {...rest}>{children}</div>
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
  children: customPropTypes.ofComponentTypes([
    'StatisticLabel',
    'StatisticValue',
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

  /** A statistic can vary in size. */
  size: PropTypes.oneOf(Statistic._meta.props.size),
}

Statistic.Group = StatisticGroup
Statistic.Label = StatisticLabel
Statistic.Value = StatisticValue

export default Statistic
