import React from 'react'
import { act } from 'react-dom/test-utils'

import useClassNamesOnNode from 'src/lib/hooks/useClassNamesOnNode'

function TestComponent(props) {
  useClassNamesOnNode(props.node, props.className)
  return null
}

describe('useClassNamesOnNode', () => {
  describe('node', () => {
    it('will add className to specified node', () => {
      const node = document.createElement('div')
      mount(<TestComponent className='foo' node={node} />)

      node.classList.contains('foo').should.be.equal(true)
    })

    it('will update className on specified node', () => {
      const node = document.createElement('div')
      const wrapper = mount(<TestComponent className='foo' node={node} />)

      wrapper.setProps({ className: 'bar' })
      node.classList.contains('foo').should.be.equal(false)
      node.classList.contains('bar').should.be.equal(true)
    })

    it('will add multiple classNames', () => {
      const node = document.createElement('div')

      mount(
        <>
          <TestComponent className='foo' node={node} />
          <TestComponent className='bar baz' node={node} />
        </>,
      )

      node.classList.contains('bar').should.be.equal(true)
      node.classList.contains('bar').should.be.equal(true)
      node.classList.contains('baz').should.be.equal(true)
    })

    it('will remove className on specified node', () => {
      const node = document.createElement('div')
      const wrapper = mount(<TestComponent className='foo' node={node} />)

      node.classList.contains('foo').should.be.equal(true)

      act(() => {
        wrapper.unmount()
      })
      node.classList.contains('foo').should.be.equal(false)
    })

    it('supports React ref objects', () => {
      const nodeRef = React.createRef()
      nodeRef.current = document.createElement('div')

      mount(<TestComponent className='foo' node={nodeRef} />)
      nodeRef.current.classList.contains('foo').should.be.equal(true)
    })
  })
})
