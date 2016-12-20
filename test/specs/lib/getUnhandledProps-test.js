import React, { PropTypes } from 'react'

import { getUnhandledProps } from 'src/lib'

// We spread the unhandled props onto the rendered result.
// Then, we can test the props of the rendered result.
// This is the inteded usage of the util.
function TestComponent(props) {
  return <div {...getUnhandledProps(TestComponent, props)} />
}
TestComponent._meta = { name: 'TestComponent' }

beforeEach(() => {
  delete TestComponent.propTypes
  delete TestComponent.defaultProps
  delete TestComponent.autoControlledProps
})

describe('getUnhandledProps', () => {
  it('removes props defined in propTypes', () => {
    TestComponent.propTypes = { 'data-remove-me': PropTypes.string }
    shallow(<TestComponent />)
      .should.not.have.prop('data-remove-me', 'thanks')
  })
  it('removes the proprietary childKey prop', () => {
    shallow(<TestComponent childKey={1} />)
      .should.not.have.prop('childKey')
  })
  it('removes props defined in defaultProps', () => {
    TestComponent.defaultProps = { 'data-remove-me': 'thanks' }
    shallow(<TestComponent />)
      .should.not.have.prop('data-remove-me', 'thanks')
  })
  it('removes props defined in autoControlledProps', () => {
    TestComponent.autoControlledProps = ['data-remove-me']
    shallow(<TestComponent />)
      .should.not.have.prop('data-remove-me')
  })
  it('removes default versions of autoControlledProps', () => {
    TestComponent.autoControlledProps = ['data-remove-me']
    shallow(<TestComponent />)
      .should.not.have.prop('defaultRemoveMe')
  })
  it('leaves props that are not defined in propTypes', () => {
    shallow(<TestComponent data-leave-this='it is unhandled' />)
      .should.have.prop('data-leave-this')
  })
})
