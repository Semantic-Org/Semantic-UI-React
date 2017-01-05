import faker from 'faker'
import React from 'react'
import * as common from 'test/specs/commonTests'
import CardGroup from 'src/views/Card/CardGroup'

describe('CardGroup', () => {
  common.isConformant(CardGroup)
  common.hasUIClassName(CardGroup)
  common.implementsWidthProp(CardGroup, { propKey: 'itemsPerRow', canEqual: false })
  common.propKeyOnlyToClassName(CardGroup, 'doubling')
  common.propKeyOnlyToClassName(CardGroup, 'stackable')
  common.rendersChildren(CardGroup)

  describe('renders children', () => {
    const firstText = faker.hacker.phrase()
    const secondText = faker.hacker.phrase()

    it('with `items` prop', () => {
      const items = [
        { header: firstText },
        { header: secondText },
      ]

      const wrapper = mount(<CardGroup items={items} />).find('Card')

      wrapper.first().find('CardHeader').should.contain.text(firstText)
      wrapper.last().find('CardHeader').should.contain.text(secondText)
    })
  })
})
