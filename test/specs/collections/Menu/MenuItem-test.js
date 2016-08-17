import React from 'react'

import Menu from 'src/collections/Menu/Menu'
import MenuItem from 'src/collections/Menu/MenuItem'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils/sandbox'

describe('MenuItem', () => {
  common.isConformant(MenuItem)
  common.propKeyOnlyToClassName(MenuItem, 'active')
  common.propKeyOnlyToClassName(MenuItem, 'header')
  common.propKeyOnlyToClassName(MenuItem, 'link')
  common.propValueOnlyToClassName(MenuItem, 'position')
  common.rendersChildren(MenuItem)

  it('renders a `div` by default', () => {
    shallow(<MenuItem />)
      .should.have.tagName('div')
  })

  describe('active', () => {
    it('is not by default', () => {
      shallow(<MenuItem name='item' />)
        .should.not.have.className('active')
    })
  })

  describe('name', () => {
    it('uses the name prop as text', () => {
      shallow(<MenuItem name='This is an item' />)
        .should.contain.text('This is an item')
    })
  })

  describe('onClick', () => {
    it('is called when clicked', () => {
      const handleClick = sandbox.spy()

      const wrapper = shallow(<MenuItem onClick={handleClick} />)
      wrapper.simulate('click')

      handleClick.should.have.been.called()
    })
    it('renders an `a` tag', () => {
      shallow(<MenuItem onClick={() => null} />)
        .should.have.tagName('a')
    })
    it('is called when the item is clicked', () => {
      const props = {
        onClick: sandbox.spy(),
      }

      // mount to get click event to propagate on click
      mount(<MenuItem {...props} />)
        .simulate('click')

      props.onClick.should.have.been.calledOnce()
    })
  })
})
