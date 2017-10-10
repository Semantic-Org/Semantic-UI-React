import faker from 'faker'
import React from 'react'

import StatisticLabel from 'src/views/Statistic/StatisticLabel'
import * as common from 'test/specs/commonTests'

describe('StatisticLabel', () => {
  common.isConformant(StatisticLabel)
  common.implementsCreateMethod(StatisticLabel)
  common.rendersChildren(StatisticLabel)

  describe('content', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<StatisticLabel content={text} />)
        .should.contain.text(text)
    })
  })
})
