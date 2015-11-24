import React, {Component} from 'react';
import {Statistic} from 'stardust';
import _ from 'lodash';

export default class StatisticStatisticExample extends Component {
  render() {
    const value = _.random(0, 12000).toLocaleString();

    return (
      <Statistic value={value} label='Value'/>
    );
  }
}
