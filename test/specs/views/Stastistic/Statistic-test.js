import Statistic from 'src/views/Statistic/Statistic'
import StatisticLabel from 'src/views/Statistic/StatisticLabel'
import StatisticValue from 'src/views/Statistic/StatisticValue'
import StatisticStatistics from 'src/views/Statistic/StatisticStatistics'
import * as common from 'test/specs/commonTests'

describe('Statistic', () => {
  common.isConformant(Statistic)
  common.hasUIClassName(StatisticStatistics)
  common.rendersChildren(Statistic)
  common.hasSubComponents(Statistic, [StatisticLabel, StatisticValue, StatisticStatistics])
})

describe('StatisticLabel', () => {
  common.isConformant(Statistic)
  common.rendersChildren(Statistic)
})

describe('StatisticValue', () => {
  common.isConformant(Statistic)
  common.rendersChildren(Statistic)
})

describe('Statistics', () => {
  common.isConformant(StatisticStatistics)
  common.hasUIClassName(StatisticStatistics)
  common.rendersChildren(StatisticStatistics)
})
