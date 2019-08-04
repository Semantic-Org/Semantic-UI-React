import React from 'react'
import { getUnhandledProps } from 'src/lib'

// We spread the unhandled props onto the rendered result.
// Then, we can test the props of the rendered result.
// This is the intended usage of the util.
function TestComponent(props) {
  return <div {...getUnhandledProps(TestComponent, props)} />
}

describe('getUnhandledProps', () => {
  it('removes the proprietary childKey prop', () => {
    shallow(<TestComponent childKey={1} />).should.not.have.prop('childKey')
  })

  it('leaves props that are not defined in handledProps', () => {
    shallow(<TestComponent data-leave-this='it is unhandled' />).should.have.prop('data-leave-this')
  })

  it('removes props defined in handledProps', () => {
    TestComponent.handledProps = ['data-remove-me']
    shallow(<TestComponent data-remove-me='it is handled' />).should.not.have.prop(
      'data-remove-me',
      'thanks',
    )
  })
})
