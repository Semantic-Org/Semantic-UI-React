import React from 'react'
import { consoleUtil, sandbox } from 'test/utils'

/**
 * Assert a Component correctly implements a shorthand create method.
 * @param {React.Component} Component The component to test
 * @param {{ requiredProps?: Object, tagName?: string }} options Options for a test
 */
export default function forwardsRef(Component, options = {}) {
  describe('forwardsRef', () => {
    const { requiredProps = {}, tagName = 'div' } = options

    it(`forwards ref to "${tagName}"`, () => {
      const ref = sandbox.spy()

      // mount() can produce "validateNesting" error from React when elements like "td" are mounted
      consoleUtil.disableOnce()
      mount(<Component {...requiredProps} ref={ref} />)

      ref.should.have.been.calledOnce()
      ref.should.have.been.calledWithMatch({ tagName: tagName.toUpperCase() })
    })
  })
}
