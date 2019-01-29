import React, { createRef } from 'react'

import RefForward from 'src/addons/Ref/RefForward'
import * as common from 'test/specs/commonTests'
import { ForwardedRef } from './fixtures'

describe('RefForward', () => {
  common.hasValidTypings(RefForward)

  describe('innerRef', () => {
    it('works with "forwardRef" API', () => {
      const forwardedRef = createRef()
      const innerRef = createRef()

      mount(<RefForward innerRef={innerRef}>{<ForwardedRef ref={forwardedRef} />}</RefForward>)

      expect(forwardedRef.current.tagName).to.equal('BUTTON')
      expect(innerRef.current.tagName).to.equal('BUTTON')
    })
  })
})
