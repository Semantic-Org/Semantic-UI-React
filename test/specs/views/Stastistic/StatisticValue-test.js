import faker from 'faker'
import React from 'react'

import StatisticValue from 'src/views/Statistic/StatisticValue'
import * as common from 'test/specs/commonTests'

describe('StatisticValue', () => {
  common.isConformant(StatisticValue)
  common.rendersChildren(StatisticValue)

  common.propKeyOnlyToClassName(StatisticValue, 'text')

  it('renders text with label prop', () => {
    const text = faker.hacker.phrase()

    shallow(<StatisticValue value={text} />)
      .children()
      .at(0)
      .should.contain.text(text)
  })
})

