import React from 'react'

import Menu from 'src/collections/Menu/Menu'
import MenuItem from 'src/collections/Menu/MenuItem'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util.js'

describe('MenuItem', () => {
  common.isConformant(MenuItem)
  common.rendersChildren(MenuItem)

  describe('active', () => {
    it('is not by default', () => {
      shallow(<MenuItem name='item' />)
        .should.not.have.className('active')
    })

    it('should have active class if first child', () => {
      const wrapper = shallow(
        <Menu>
          <Menu.Item name='item1' />
          <Menu.Item name='item2' />
        </Menu>
      )
        .find('MenuItem')

      wrapper
        .first()
        .should.have.prop('active', true)
      wrapper
        .last()
        .should.have.prop('active', false)
    })

    it('should have active class after click', () => {
      const wrapper = mount(
        <Menu>
          <MenuItem name='item1' />
          <MenuItem name='item2' />
        </Menu>
      )
        .find('MenuItem')

      const lastItem = wrapper.last()

      lastItem.should.have.prop('active', false)
      lastItem.simulate('click')
      lastItem.should.have.prop('active', true)
    })
  })

  describe('name', () => {
    it('uses the name prop as text', () => {
      shallow(<MenuItem name='This is an item' />)
        .should.contain.text('This is an item')
    })
  })

  it('onClick', () => {
    it('is called when clicked', () => {
      const handleClick = sandbox.spy()

      const wrapper = shallow(<MenuItem onClick={handleClick} />)
      wrapper.simulate('click')

      handleClick.should.have.been.called()
    })
  })

  describe('label', () => {
    it('should not have a label by default', () => {
      shallow(<MenuItem name='item' />)
        .should.not.have.descendants('Label')
    })
    it('should render a label if prop given', () => {
      mount(<MenuItem name='item' label='37' />)
        .should.have.descendants('Label')
        .and.contain.text('37')
    })
  })
})
