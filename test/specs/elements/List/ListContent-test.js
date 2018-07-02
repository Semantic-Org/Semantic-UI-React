import faker from 'faker'
import React from 'react'

import ListContent from 'src/elements/List/ListContent'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('ListContent', () => {
  common.isConformant(ListContent)
  common.rendersChildren(ListContent)

  common.implementsCreateMethod(ListContent)

  common.implementsVerticalAlignProp(ListContent)

  common.propKeyAndValueToClassName(ListContent, 'floated', SUI.FLOATS)

  describe('shorthand', () => {
    const baseProps = {
      content: faker.hacker.phrase(),
      description: faker.hacker.phrase(),
      header: faker.hacker.phrase(),
    }

    it('renders content without wrapping ListContent', () => {
      const wrapper = shallow(<ListContent {...baseProps} />)

      expect(wrapper.find('ListHeader')).have.prop('content', baseProps.header)
      expect(wrapper.find('ListDescription')).have.prop('content', baseProps.description)
      expect(wrapper).contain.text(baseProps.content)
    })
  })
})
