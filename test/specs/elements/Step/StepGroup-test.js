import _ from 'lodash'
import React from 'react'

import StepGroup from 'src/elements/Step/StepGroup'
import { numberToWordMap } from 'src/lib'
import * as common from 'test/specs/commonTests'

const numberMap = _.pickBy(numberToWordMap, (val, key) => key <= 8)

describe('StepGroup', () => {
  common.isConformant(StepGroup)
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

      expect(wrapper.find('Step')).toHaveLength(2)
      expect(items.at(0).prop('content')).toBe('foo')
      expect(items.at(1).prop('content')).toBe('bar')
    })
  })
})
