import React from 'react'
import { shallow } from 'enzyme'
import { getUnhandledProps } from 'src/lib'

// We spread the unhandled props onto the rendered result.
// Then, we can test the props of the rendered result.
// This is the intended usage of the util.
const TestComponent: any = props => {
  return <div {...getUnhandledProps(TestComponent, props)} />
}

describe('getUnhandledProps', () => {
  test('removes the proprietary childKey prop', () => {
    expect(shallow(<TestComponent childKey={1} />).props()).not.toHaveProperty('childKey')
  })

  test('leaves props that are not defined in handledProps', () => {
    expect(shallow(<TestComponent data-leave-this="it is unhandled" />).props()).toHaveProperty(
      'data-leave-this',
    )
  })

  test('removes props defined in handledProps', () => {
    TestComponent.handledProps = ['data-remove-me']
    expect(shallow(<TestComponent data-remove-me="it is handled" />).props()).not.toHaveProperty(
      'data-remove-me',
      'thanks',
    )
  })
})
