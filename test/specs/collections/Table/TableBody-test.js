import React from 'react'

import * as common from 'test/specs/commonTests'
import TableBody from 'src/collections/Table/TableBody'

describe('TableBody', () => {
  common.isConformant(TableBody)
  common.rendersChildren(TableBody, {
    rendersContent: false,
  })

  describe('as', () => {
    it('is "tbody" by default', () => {
      expect(shallow(<TableBody />).type()).toBe('tbody')
    })
  })
})
