import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'

import getUnhandledProps from '../../utils/getUnhandledProps'
import { customPropTypes } from '../../utils/propUtils'
import META from '../../utils/Meta'

import Statistics from './Statistics'
import StatisticLabel from './StatisticLabel'
import StatisticValue from './StatisticValue'

export default class Statistic extends Component {
  static propTypes = {
    children: customPropTypes.ofComponentTypes(['Statistics', 'Label', 'Value']),
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Statistic',
    type: META.type.view,
  };

  static Statistics = Statistics;
  static Label = StatisticLabel;
  static Value = StatisticValue;

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
