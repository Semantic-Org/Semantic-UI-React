import React from 'react'
import { Statistic } from 'stardust'

const StatisticSizeExamples = () => (
  <div>
    <Statistic size='mini' label='Views' value='2,204' />
    <Statistic size='tiny' label='Views' value='2,204' />
    <Statistic size='small' label='Views' value='2,204' />
    <Statistic label='Views' value='2,204' />
    <Statistic size='large' label='Views' value='2,204' />
    <Statistic size='huge' label='Views' value='2,204' />
  </div>
)

export default StatisticSizeExamples
