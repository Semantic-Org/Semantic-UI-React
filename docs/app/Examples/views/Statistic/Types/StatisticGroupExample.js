import React, {Component} from 'react';
import {Statistic} from 'stardust';
const {Statistics, Label, Value} = Statistic;

export default class StatisticGroupExample extends Component {
  render() {
    return (
      <Statistics>
        <Statistic>
          <Value>22</Value>
          <Label>Faves</Label>
        </Statistic>
        <Statistic>
          <Value>31,200</Value>
          <Label>Views</Label>
        </Statistic>
        <Statistic>
          <Value>22</Value>
          <Label>Members</Label>
        </Statistic>
      </Statistics>
    );
  }
}
