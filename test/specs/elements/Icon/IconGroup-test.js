import React from 'react'
import IconGroup from 'src/elements/Icon/IconGroup'
import * as common from 'test/specs/commonTests'

describe('IconGroup', () => {
  common.isConformant(IconGroup)
  common.rendersChildren(IconGroup)

  describe('as', () => {
    it('renders as an "i" by default', () => {
      expect(shallow(<IconGroup />).type()).toBe('i')
    })
  })
})
