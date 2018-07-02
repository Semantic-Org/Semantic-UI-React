import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import StatisticGroup from 'src/views/Statistic/StatisticGroup'
import * as common from 'test/specs/commonTests'

describe('StatisticGroup', () => {
  common.isConformant(StatisticGroup)
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

      expect(wrapper.find('Statistic')).toHaveLength(2)
      expect(items.at(0).prop('content')).toBe('foo')
      expect(items.at(1).prop('content')).toBe('bar')
    })
  })
})
