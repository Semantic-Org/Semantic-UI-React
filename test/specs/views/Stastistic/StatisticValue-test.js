import React from 'react'
import * as common from 'test/specs/commonTests'

import StatisticValue from 'src/views/Statistic/StatisticValue'

describe('Statistic', () => {
  common.isConformant(StatisticValue)
  common.rendersChildren(StatisticValue)
  common.propKeyOnlyToClassName(StatisticValue, 'text')

  it('renders an div element', () => {
    shallow(<StatisticValue />)
      .should.have.tagName('div')
  })
})

