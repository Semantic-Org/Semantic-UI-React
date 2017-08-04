import React from 'react'
import { Divider, Statistic } from 'semantic-ui-react'

const StatisticExampleSizeDivided = () => (
  <div>
    <Statistic size='mini' label='Views' value='2,204' />
    <Divider />

    <Statistic size='tiny' label='Views' value='2,204' />
    <Divider />

    <Statistic size='small' label='Views' value='2,204' />
    <Divider />

    <Statistic label='Views' value='2,204' />
    <Divider />

    <Statistic size='large' label='Views' value='2,204' />
    <Divider />

    <Statistic size='huge' label='Views' value='2,204' />
  </div>
)

export default StatisticExampleSizeDivided
