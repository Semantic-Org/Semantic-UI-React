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
    expect(shallow(<TestComponent childKey={1} />)).not.have.prop('childKey')
  })

  it('leaves props that are not defined in handledProps', () => {
    expect(shallow(<TestComponent data-leave-this='it is unhandled' />)).have.prop(
      'data-leave-this',
    )
  })

  it('removes props defined in handledProps', () => {
    TestComponent.handledProps = ['data-remove-me']
    expect(shallow(<TestComponent data-remove-me='it is handled' />)).not.have.prop(
      'data-remove-me',
      'thanks',
    )
  })
})
