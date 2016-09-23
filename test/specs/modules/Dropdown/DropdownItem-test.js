import React from 'react'
import DropdownItem from 'src/modules/Dropdown/DropdownItem'
import * as common from 'test/specs/commonTests'

describe('DropdownItem', () => {
  common.isConformant(DropdownItem)
  common.rendersChildren(DropdownItem)
  common.propKeyOnlyToClassName(DropdownItem, 'selected')
  common.propKeyOnlyToClassName(DropdownItem, 'active')

  describe('description', () => {
    it('adds a description span', () => {
      const wrapper = shallow(<DropdownItem description='foo' />)
      wrapper.should.have.exactly(1).descendants('.description')

      const description = wrapper.find('span')
      description.should.have.className('description')
      description.should.have.text('foo')
    })
  })
})
