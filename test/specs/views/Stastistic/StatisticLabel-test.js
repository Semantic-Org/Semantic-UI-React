import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import StatisticLabel from 'src/views/Statistic/StatisticLabel'

describe('StatisticLabel', () => {
  common.isConformant(StatisticLabel)
  common.rendersChildren(StatisticLabel)

  it('renders an div element', () => {
    shallow(<StatisticLabel />)
      .should.have.tagName('div')
  })

  it('renders text with label prop', () => {
    const text = faker.hacker.phrase()

    shallow(<StatisticLabel label={text} />).should.contain.text(text)
  })
})
