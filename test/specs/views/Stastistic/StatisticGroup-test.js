import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import StatisticGroup from 'src/views/Statistic/StatisticGroup'
import * as common from 'test/specs/commonTests'

describe('StatisticGroup', () => {
  common.isConformant(StatisticGroup)
  common.hasUIClassName(StatisticGroup)
  common.rendersChildren(StatisticGroup)

  common.implementsWidthProp(StatisticGroup, { propKey: 'widths', canEqual: false })

  common.propKeyOnlyToClassName(StatisticGroup, 'horizontal')
  common.propKeyOnlyToClassName(StatisticGroup, 'inverted')

  common.propValueOnlyToClassName(StatisticGroup, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(StatisticGroup, 'size', _.without(SUI.SIZES, 'big', 'massive', 'medium'))

  it('renders an div element', () => {
    shallow(<StatisticGroup />)
      .should.have.tagName('div')
  })

  it('renders children with `items` prop', () => {
    const items = [
      { label: 'Faves', value: 22 },
      { label: 'Views', value: '31,200' },
    ]

    shallow(<StatisticGroup items={items} />)
      .should.have.exactly(2).descendants('Statistic')
  })
})
