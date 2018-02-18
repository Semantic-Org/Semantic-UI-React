import React from 'react'

import MountNode from 'src/addons/MountNode/MountNode'
import * as common from 'test/specs/commonTests'

describe('MountNode', () => {
  common.isConformant(MountNode, {
    rendersChildren: false,
  })

  describe('node', () => {
    it('will add className to specified node', () => {
      const node = document.createElement('div')
      shallow(<MountNode className='foo' node={node} />)

      node.classList.contains('foo').should.be.equal(true)
    })

    it('will update className on specified node', () => {
      const node = document.createElement('div')
      const wrapper = mount(<MountNode className='foo' node={node} />)

      wrapper.setProps({ className: 'bar' })
      node.classList.contains('foo').should.be.equal(false)
      node.classList.contains('bar').should.be.equal(true)
    })

    it('will remove className on specified node', () => {
      const node = document.createElement('div')
      const wrapper = mount(<MountNode className='foo' node={node} />)

      node.classList.contains('foo').should.be.equal(true)

      wrapper.unmount()
      node.classList.contains('foo').should.be.equal(false)
    })
  })

  describe('shouldComponentUpdate', () => {
    it('will not rerender when nextClassName is same', () => {
      const wrapper = shallow(<MountNode className='foo' />)
      const shouldUpdate = wrapper.instance().shouldComponentUpdate({ className: 'foo' })

      shouldUpdate.should.be.equal(false)
    })

    it('will rerender when nextClassName is another', () => {
      const wrapper = shallow(<MountNode className='foo' />)
      const shouldUpdate = wrapper.instance().shouldComponentUpdate({ className: 'bar' })

      shouldUpdate.should.be.equal(true)
    })
  })
})
