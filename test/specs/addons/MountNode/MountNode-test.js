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

      expect(node.classList.contains('foo')).toBe(true)
    })

    it('will update className on specified node', () => {
      const node = document.createElement('div')
      const wrapper = mount(<MountNode className='foo' node={node} />)

      wrapper.setProps({ className: 'bar' })
      expect(node.classList.contains('foo')).toBe(false)
      expect(node.classList.contains('bar')).toBe(true)
    })

    it('will remove className on specified node', () => {
      const node = document.createElement('div')
      const wrapper = mount(<MountNode className='foo' node={node} />)

      expect(node.classList.contains('foo')).toBe(true)

      wrapper.unmount()
      expect(node.classList.contains('foo')).toBe(false)
    })
  })

  describe('shouldComponentUpdate', () => {
    it('will not rerender when nextClassName is same', () => {
      const wrapper = shallow(<MountNode className='foo' />)
      const shouldUpdate = wrapper.instance().shouldComponentUpdate({ className: 'foo' })

      expect(shouldUpdate).toBe(false)
    })

    it('will rerender when nextClassName is another', () => {
      const wrapper = shallow(<MountNode className='foo' />)
      const shouldUpdate = wrapper.instance().shouldComponentUpdate({ className: 'bar' })

      expect(shouldUpdate).toBe(true)
    })
  })
})
