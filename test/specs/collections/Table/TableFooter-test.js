import React from 'react'

import * as common from 'test/specs/commonTests'
import TableHeader from 'src/collections/Table/TableHeader'
import TableFooter from 'src/collections/Table/TableFooter'

describe('TableFooter', () => {
  common.isConformant(TableFooter)

  describe('as', () => {
    it('is "tfoot" by default', () => {
      const wrapper = shallow(<TableFooter />)

      expect(wrapper.type()).toBe(TableHeader)
      expect(wrapper.find(TableHeader).prop('as')).toBe('tfoot')
    })
  })
})
