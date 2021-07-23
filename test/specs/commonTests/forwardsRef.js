import React from 'react'
import { sandbox } from 'test/utils'

/**
 * Assert a Component correctly implements a shorthand create method.
 * @param {React.Component} Component The component to test
 */
export default function implementsCreateMethod(Component, options = {}) {
  describe('forwardsRef', () => {
    const { requiredProps = {}, tagName = 'div' } = options

    it(`forwards ref to "${tagName}"`, () => {
      const ref = sandbox.spy()

      mount(<Component {...requiredProps} ref={ref} />)

      ref.should.have.been.calledOnce()
      ref.should.have.been.calledWithMatch({ tagName: tagName.toUpperCase() })
    })
  })
}
