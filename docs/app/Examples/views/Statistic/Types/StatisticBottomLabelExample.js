import React, {Component} from 'react';
import {Statistic} from 'stardust';
const {Label, Value} = Statistic;

export default class StatisticBottomLabelExample extends Component {
  render() {
    return (
      <Statistic>
        <Value>5,550</Value>
        <Label>Downloads</Label>
      </Statistic>
    );
  }
}
