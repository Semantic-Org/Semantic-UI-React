import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import StepGroup from 'src/elements/Step/StepGroup'
import { numberToWordMap } from 'src/lib'
import * as common from 'test/specs/commonTests'

const numberMap = _.pickBy(numberToWordMap, (val, key) => key <= 8)

describe('StepGroup', () => {
  common.isConformant(StepGroup)
  common.forwardsRef(StepGroup)
  common.forwardsRef(StepGroup, { requiredProps: { content: faker.lorem.word() } })
  common.forwardsRef(StepGroup, { requiredProps: { children: <span /> } })
  common.hasUIClassName(StepGroup)
  common.rendersChildren(StepGroup)

  common.implementsWidthProp(
    StepGroup,
    [..._.keys(numberMap), ..._.keys(numberMap).map(Number), ..._.values(numberMap)],
    {
      canEqual: false,
      propKey: 'widths',
    },
  )

  common.propKeyAndValueToClassName(StepGroup, 'stackable', ['tablet'])

  common.propKeyOnlyToClassName(StepGroup, 'fluid')
  common.propKeyOnlyToClassName(StepGroup, 'ordered')
  common.propKeyOnlyToClassName(StepGroup, 'vertical')

  common.propKeyOrValueAndKeyToClassName(StepGroup, 'attached', ['top', 'bottom'])

  describe('items', () => {
    it('renders children', () => {
      const wrapper = shallow(<StepGroup items={['foo', 'bar']} />)
      const items = wrapper.children()

      wrapper.should.have.exactly(2).descendants('Step')
      items.at(0).should.have.prop('content', 'foo')
      items.at(1).should.have.prop('content', 'bar')
    })
  })
})
