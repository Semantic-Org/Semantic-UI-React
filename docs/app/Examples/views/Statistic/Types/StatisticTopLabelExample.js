import React, {Component} from 'react';
import {Statistic} from 'stardust';
const {Label, Value} = Statistic;

export default class StatisticTopLabelExample extends Component {
  render() {
    return (
      <Statistic>
        <Label>Views</Label>
        <Value>40,509</Value>
      </Statistic>
    );
  }
}
