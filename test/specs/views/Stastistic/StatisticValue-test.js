import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import StatisticValue from 'src/views/Statistic/StatisticValue'

describe('StatisticValue', () => {
  common.isConformant(StatisticValue)
  common.rendersChildren(StatisticValue)
  common.propKeyOnlyToClassName(StatisticValue, 'text')

  it('renders text with label prop', () => {
    const text = faker.hacker.phrase()

    shallow(<StatisticValue value={text} />).should.contain.text(text)
  })
})

