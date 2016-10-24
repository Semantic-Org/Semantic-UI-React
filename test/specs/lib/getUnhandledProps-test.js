import React from 'react'
import { getUnhandledProps } from 'src/lib'

// We spread the unhandled props onto the rendered result.
// Then, we can test the props of the rendered result.
// This is the inteded usage of the util.
function TestComponent(props) {
  return <div {...getUnhandledProps(TestComponent, props)} />
}

beforeEach(() => {
  delete TestComponent._meta
})

describe('getUnhandledProps', () => {
  it('removes props defined in _meta.props', () => {
    TestComponent._meta = { props: ['data-remove-me'] }
    shallow(<TestComponent />)
      .should.not.have.prop('data-remove-me', 'thanks')
  })
  it('leaves props that are not defined _meta.props', () => {
    TestComponent._meta = {}
    shallow(<TestComponent data-leave-this='it is unhandled' />)
      .should.have.prop('data-leave-this')
  })
  it('leaves props that are not defined _meta.props', () => {
    shallow(<TestComponent data-leave-this='it is unhandled' />)
      .should.have.prop('data-leave-this')
  })
})
