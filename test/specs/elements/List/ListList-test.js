import React from 'react'

import ListList from 'src/elements/List/ListList'
import * as common from 'test/specs/commonTests'

describe('ListList', () => {
  common.isConformant(ListList)
  common.rendersChildren(ListList)

  describe('list', () => {
    it('omitted when rendered as `ol`', () => {
      expect(shallow(<ListList as='ol' />).hasClass('list')).toBe(false)
    })

    it('omitted when rendered as `ul`', () => {
      expect(shallow(<ListList as='ul' />).hasClass('list')).toBe(false)
    })
  })
})
