import StatisticLabel from 'src/views/Statistic/StatisticLabel'
import * as common from 'test/specs/commonTests'

describe('StatisticLabel', () => {
  common.isConformant(StatisticLabel)
  common.forwardsRef(StatisticLabel)
  common.implementsCreateMethod(StatisticLabel)
  common.rendersChildren(StatisticLabel)
})
