import faker from 'faker'
import React from 'react'
import * as common from 'test/specs/commonTests'

import ListContent from 'src/elements/List/ListContent'

describe('ListContent', () => {
  common.isConformant(ListContent)
  common.rendersChildren(ListContent)

  common.implementsVerticalAlignProp(ListContent)
  common.propKeyAndValueToClassName(ListContent, 'floated')

  describe('shorthand', () => {
    const baseProps = {
      content: faker.hacker.phrase(),
      description: faker.hacker.phrase(),
      header: faker.hacker.phrase(),
    }

    it('renders content without wrapping ListContent', () => {
      const wrapper = shallow(<ListContent {...baseProps} />)

      wrapper.find('ListHeader').should.have.prop('content', baseProps.header)
      wrapper.find('ListDescription').should.have.prop('content', baseProps.description)
      wrapper.should.contain.text(baseProps.content)
    })
  })
})
