import faker from 'faker'
import React from 'react'

import ItemGroup from 'src/views/Item/ItemGroup'
import * as common from 'test/specs/commonTests'

describe('ItemGroup', () => {
  common.isConformant(ItemGroup)
  common.forwardsRef(ItemGroup)
  common.forwardsRef(ItemGroup, { requiredProps: { children: <span /> } })
  common.forwardsRef(ItemGroup, { requiredProps: { content: faker.lorem.word() } })
  common.hasUIClassName(ItemGroup)
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

      wrapper.should.have.exactly(2).descendants('Item')
      itemWrappers.first().find('ItemContent').should.contain.text(firstText)
      itemWrappers.last().find('ItemContent').should.contain.text(secondText)
    })
  })
})
