import React from 'react'
import * as common from 'test/specs/commonTests'

import StatisticGroup from 'src/views/Statistic/Statistic'

describe('StatisticGroup', () => {
  common.isConformant(StatisticGroup)
  common.hasUIClassName(StatisticGroup)
  common.rendersChildren(StatisticGroup)
  common.propKeyOnlyToClassName(StatisticGroup, 'horizontal')

  it('renders an div element', () => {
    shallow(<StatisticGroup />)
      .should.have.tagName('div')
  })
})
