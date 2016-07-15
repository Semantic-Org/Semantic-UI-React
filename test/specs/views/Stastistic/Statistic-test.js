import React from 'react'
import * as common from 'test/specs/commonTests'

import Statistic from 'src/views/Statistic/Statistic'
import StatisticGroup from 'src/views/Statistic/StatisticGroup'
import StatisticLabel from 'src/views/Statistic/StatisticLabel'
import StatisticValue from 'src/views/Statistic/StatisticValue'

describe('Statistic', () => {
  common.isConformant(Statistic)
  common.hasUIClassName(Statistic)
  common.hasSubComponents(Statistic, [StatisticGroup, StatisticLabel, StatisticValue])
  common.rendersChildren(Statistic)

  common.propValueOnlyToClassName(Statistic, 'color')
  common.propKeyAndValueToClassName(Statistic, 'floated')
  common.propKeyOnlyToClassName(Statistic, 'horizontal')
  common.propKeyOnlyToClassName(Statistic, 'inverted')
  common.propValueOnlyToClassName(Statistic, 'size')

  it('renders an div element', () => {
    shallow(<Statistic />)
      .should.have.tagName('div')
  })
})

