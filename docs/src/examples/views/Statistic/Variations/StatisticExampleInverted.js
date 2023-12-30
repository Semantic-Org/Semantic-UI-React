import React from 'react'
import {
  StatisticValue,
  StatisticLabel,
  Segment,
  Statistic,
} from 'semantic-ui-react'

const StatisticExampleInverted = () => (
  <Segment inverted>
    <Statistic inverted>
      <StatisticValue>54</StatisticValue>
      <StatisticLabel>inverted</StatisticLabel>
    </Statistic>
    <Statistic color='red' inverted>
      <StatisticValue>27</StatisticValue>
      <StatisticLabel>red</StatisticLabel>
    </Statistic>
    <Statistic color='orange' inverted>
      <StatisticValue>8'</StatisticValue>
      <StatisticLabel>orange</StatisticLabel>
    </Statistic>
    <Statistic color='yellow' inverted>
      <StatisticValue>28</StatisticValue>
      <StatisticLabel>yellow</StatisticLabel>
    </Statistic>
    <Statistic color='olive' inverted>
      <StatisticValue>7'</StatisticValue>
      <StatisticLabel>olive</StatisticLabel>
    </Statistic>
    <Statistic color='green' inverted>
      <StatisticValue>14</StatisticValue>
      <StatisticLabel>green</StatisticLabel>
    </Statistic>
    <Statistic color='teal' inverted>
      <StatisticValue>82</StatisticValue>
      <StatisticLabel>teal</StatisticLabel>
    </Statistic>
    <Statistic color='blue' inverted>
      <StatisticValue>1'</StatisticValue>
      <StatisticLabel>blue</StatisticLabel>
    </Statistic>
    <Statistic color='violet' inverted>
      <StatisticValue>22</StatisticValue>
      <StatisticLabel>violet</StatisticLabel>
    </Statistic>
    <Statistic color='purple' inverted>
      <StatisticValue>23</StatisticValue>
      <StatisticLabel>purple</StatisticLabel>
    </Statistic>
    <Statistic color='pink' inverted>
      <StatisticValue>15</StatisticValue>
      <StatisticLabel>pink</StatisticLabel>
    </Statistic>
    <Statistic color='brown' inverted>
      <StatisticValue>36</StatisticValue>
      <StatisticLabel>brown</StatisticLabel>
    </Statistic>
    <Statistic color='grey' inverted>
      <StatisticValue>49</StatisticValue>
      <StatisticLabel>grey</StatisticLabel>
    </Statistic>
  </Segment>
)

export default StatisticExampleInverted
