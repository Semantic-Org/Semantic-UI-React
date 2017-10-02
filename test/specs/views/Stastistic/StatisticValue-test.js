import React from 'react'

import StatisticValue from 'src/views/Statistic/StatisticValue'
import * as common from 'test/specs/commonTests'

describe('StatisticValue', () => {
  common.isConformant(StatisticValue)
  common.rendersChildren(StatisticValue)

  common.propKeyOnlyToClassName(StatisticValue, 'text')
})

