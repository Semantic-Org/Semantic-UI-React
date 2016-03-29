import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import getUnhandledProps from '../../utils/getUnhandledProps'
import META from '../../utils/Meta'

import StatisticStatistics from './StatisticStatistics'
import StatisticLabel from './StatisticLabel'
import StatisticValue from './StatisticValue'

export default class Statistic extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Statistic',
    type: META.type.view,
  }

  static Statistics = StatisticStatistics
  static Label = StatisticLabel
  static Value = StatisticValue

  render() {
    const classes = classNames(
      'sd-statistic',
      'ui',
      this.props.className,
      'statistic'
    )

    const props = getUnhandledProps(this)

    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
