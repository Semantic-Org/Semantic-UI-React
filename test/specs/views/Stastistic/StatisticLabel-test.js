import StatisticLabel from 'src/views/Statistic/StatisticLabel'
import * as common from 'test/specs/commonTests'

describe('StatisticLabel', () => {
  common.isConformant(StatisticLabel)
  common.rendersChildren(StatisticLabel)
})
