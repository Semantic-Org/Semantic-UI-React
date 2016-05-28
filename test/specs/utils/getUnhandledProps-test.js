import React from 'react'

import { getUnhandledProps } from 'src/utils/propUtils'

// We spread the unhandled props onto the rendered result.
// Then, we can test the props of the rendered result.
// This is the inteded usage of the util.
function TestComponent(props) {
  return <div {...getUnhandledProps(TestComponent, props)} />
}

beforeEach(() => {
  delete TestComponent.propTypes
  delete TestComponent.defaultProps
  delete TestComponent.autoControlledProps
})

describe('getUnhandledProps', () => {
  it('removes props defined in propTypes', () => {
    TestComponent.propTypes = { removeMe: 'thanks' }
    shallow(<TestComponent />)
      .should.not.have.prop('removeMe', 'thanks')
  })
  it('removes props defined in defaultProps', () => {
    TestComponent.defaultProps = { removeMe: 'thanks' }
    shallow(<TestComponent />)
      .should.not.have.prop('removeMe', 'thanks')
  })
  it('removes props defined in autoControlledProps', () => {
    TestComponent.autoControlledProps = ['removeMe']
    shallow(<TestComponent />)
      .should.not.have.prop('removeMe')
  })
  it('removes default versions of autoControlledProps', () => {
    TestComponent.autoControlledProps = ['removeMe']
    shallow(<TestComponent />)
      .should.not.have.prop('defaultRemoveMe')
  })
  it('leaves props that are not defined in propTypes', () => {
    shallow(<TestComponent leaveThis='it is unhandled' />)
      .should.have.prop('leaveThis')
  })
})
