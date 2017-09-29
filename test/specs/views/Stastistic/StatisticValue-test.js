import faker from 'faker'
import React from 'react'

import StatisticValue from 'src/views/Statistic/StatisticValue'
import * as common from 'test/specs/commonTests'

describe('StatisticValue', () => {
  common.isConformant(StatisticValue)
  common.implementsCreateMethod(StatisticValue)
  common.rendersChildren(StatisticValue)

  common.propKeyOnlyToClassName(StatisticValue, 'text')

  describe('content', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<StatisticValue content={text} />)
        .should.contain.text(text)
    })
  })
})

