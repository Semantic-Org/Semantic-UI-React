import * as React from 'react'
import * as ReactIs from 'react-is'

import { consoleUtil, sandbox } from 'test/utils'

/**
 * Assert a Component correctly implements a shorthand create method.
 * @param {React.ElementType} Component The component to test
 * @param {{ isMemoized?: Boolean, requiredProps?: Object, tagName?: string }} options
 */
export default function forwardsRef(Component, options = {}) {
  describe('forwardsRef', () => {
    const { isMemoized = false, requiredProps = {}, tagName = 'div' } = options
    const RootComponent = isMemoized ? Component.type : Component

    it('is produced by React.forwardRef() call', () => {
      expect(ReactIs.isForwardRef(<RootComponent {...requiredProps} />)).to.equal(true)
    })

    it('a render function is anonymous', () => {
      const innerFunctionName = RootComponent.render.name
      expect(innerFunctionName).to.equal('')
    })

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
