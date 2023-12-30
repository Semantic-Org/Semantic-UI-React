import React from 'react'
import {
  StatisticValue,
  StatisticLabel,
  StatisticGroup,
  Statistic,
} from 'semantic-ui-react'

const StatisticExampleColored = () => (
  <StatisticGroup>
    <Statistic color='red'>
      <StatisticValue>27</StatisticValue>
      <StatisticLabel>red</StatisticLabel>
    </Statistic>
    <Statistic color='orange'>
      <StatisticValue>8'</StatisticValue>
      <StatisticLabel>orange</StatisticLabel>
    </Statistic>
    <Statistic color='yellow'>
      <StatisticValue>28</StatisticValue>
      <StatisticLabel>yellow</StatisticLabel>
    </Statistic>
    <Statistic color='olive'>
      <StatisticValue>7'</StatisticValue>
      <StatisticLabel>olive</StatisticLabel>
    </Statistic>
    <Statistic color='green'>
      <StatisticValue>14</StatisticValue>
      <StatisticLabel>green</StatisticLabel>
    </Statistic>
    <Statistic color='teal'>
      <StatisticValue>82</StatisticValue>
      <StatisticLabel>teal</StatisticLabel>
    </Statistic>
    <Statistic color='blue'>
      <StatisticValue>1'</StatisticValue>
      <StatisticLabel>blue</StatisticLabel>
    </Statistic>
    <Statistic color='violet'>
      <StatisticValue>22</StatisticValue>
      <StatisticLabel>violet</StatisticLabel>
    </Statistic>
    <Statistic color='purple'>
      <StatisticValue>23</StatisticValue>
      <StatisticLabel>purple</StatisticLabel>
    </Statistic>
    <Statistic color='pink'>
      <StatisticValue>15</StatisticValue>
      <StatisticLabel>pink</StatisticLabel>
    </Statistic>
    <Statistic color='brown'>
      <StatisticValue>36</StatisticValue>
      <StatisticLabel>brown</StatisticLabel>
    </Statistic>
    <Statistic color='grey'>
      <StatisticValue>49</StatisticValue>
      <StatisticLabel>grey</StatisticLabel>
    </Statistic>
  </StatisticGroup>
)

export default StatisticExampleColored
