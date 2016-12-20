import React from 'react'
import * as common from 'test/specs/commonTests'
import StatisticGroup from 'src/views/Statistic/StatisticGroup'

describe('StatisticGroup', () => {
  common.isConformant(StatisticGroup)
  common.implementsWidthProp(StatisticGroup, { propKey: 'widths', canEqual: false })
  common.hasUIClassName(StatisticGroup)
  common.rendersChildren(StatisticGroup)

  common.propValueOnlyToClassName(StatisticGroup, 'color')
  common.propKeyOnlyToClassName(StatisticGroup, 'horizontal')
  common.propKeyOnlyToClassName(StatisticGroup, 'inverted')
  common.propValueOnlyToClassName(StatisticGroup, 'size')

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
