import faker from 'faker'
import React from 'react'

import ItemGroup from 'src/views/Item/ItemGroup'
import * as common from 'test/specs/commonTests'

describe('ItemGroup', () => {
  common.hasUIClassName(ItemGroup)
  common.isConformant(ItemGroup)
  common.rendersChildren(ItemGroup)

  common.propKeyOnlyToClassName(ItemGroup, 'divided')
  common.propKeyOnlyToClassName(ItemGroup, 'link')
  common.propKeyOnlyToClassName(ItemGroup, 'unstackable')

  common.propKeyOrValueAndKeyToClassName(ItemGroup, 'relaxed', ['very'])

  describe('items prop', () => {
    it('renders children', () => {
      const firstText = faker.hacker.phrase()
      const secondText = faker.hacker.phrase()
      const items = [{ content: firstText }, { content: secondText }]

      const wrapper = mount(<ItemGroup items={items} />)
      const itemWrappers = wrapper.find('Item')

      expect(wrapper.find('Item')).toHaveLength(2)
      expect(
        itemWrappers
          .first()
          .find('ItemContent')
          .text(),
      ).toBe(firstText)
      expect(
        itemWrappers
          .last()
          .find('ItemContent')
          .text(),
      ).toBe(secondText)
    })
  })
})
