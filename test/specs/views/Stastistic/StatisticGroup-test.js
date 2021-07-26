import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import StatisticGroup from 'src/views/Statistic/StatisticGroup'
import * as common from 'test/specs/commonTests'

describe('StatisticGroup', () => {
  common.isConformant(StatisticGroup)
  common.forwardsRef(StatisticGroup)
  common.forwardsRef(StatisticGroup, { requiredProps: { children: <span /> } })
  common.forwardsRef(StatisticGroup, { requiredProps: { content: faker.lorem.word() } })
  common.hasUIClassName(StatisticGroup)
  common.rendersChildren(StatisticGroup)

  common.implementsWidthProp(StatisticGroup, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'widths',
  })

  common.propKeyOnlyToClassName(StatisticGroup, 'horizontal')
  common.propKeyOnlyToClassName(StatisticGroup, 'inverted')

  common.propValueOnlyToClassName(StatisticGroup, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(
    StatisticGroup,
    'size',
    _.without(SUI.SIZES, 'big', 'massive', 'medium'),
  )

  describe('items', () => {
    it('renders children', () => {
      const wrapper = shallow(<StatisticGroup items={['foo', 'bar']} />)
      const items = wrapper.children()

      wrapper.should.have.exactly(2).descendants('Statistic')
      items.at(0).should.have.prop('content', 'foo')
      items.at(1).should.have.prop('content', 'bar')
    })
  })
})
