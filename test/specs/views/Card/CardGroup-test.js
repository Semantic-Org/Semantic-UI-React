import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import CardGroup from 'src/views/Card/CardGroup'
import * as common from 'test/specs/commonTests'

describe('CardGroup', () => {
  common.isConformant(CardGroup)

  common.forwardsRef(CardGroup)
  common.forwardsRef(CardGroup, { requiredProps: { children: <span /> } })
  common.forwardsRef(CardGroup, { requiredProps: { content: faker.lorem.word() } })

  common.hasUIClassName(CardGroup)
  common.rendersChildren(CardGroup)

  common.implementsTextAlignProp(CardGroup, _.without(SUI.TEXT_ALIGNMENTS, 'justified'))
  common.implementsWidthProp(CardGroup, SUI.WIDTHS, { propKey: 'itemsPerRow', canEqual: false })

  common.propKeyOnlyToClassName(CardGroup, 'centered')
  common.propKeyOnlyToClassName(CardGroup, 'doubling')
  common.propKeyOnlyToClassName(CardGroup, 'stackable')

  describe('renders children', () => {
    const firstText = faker.hacker.phrase()
    const secondText = faker.hacker.phrase()

    it('with `items` prop', () => {
      const items = [{ header: firstText }, { header: secondText }]

      const wrapper = mount(<CardGroup items={items} />).find('Card')

      wrapper.first().find('CardHeader').should.contain.text(firstText)
      wrapper.last().find('CardHeader').should.contain.text(secondText)
    })
  })
})
