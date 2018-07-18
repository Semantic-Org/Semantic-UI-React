import React from 'react'

import * as common from 'test/specs/commonTests'
import TableCell from 'src/collections/Table/TableCell'
import TableHeaderCell from 'src/collections/Table/TableHeaderCell'

describe('TableHeaderCell', () => {
  common.isConformant(TableHeaderCell)
  common.propKeyAndValueToClassName(TableHeaderCell, 'sorted', ['ascending', 'descending'])

  describe('as', () => {
    it('is "th" by default', () => {
      const wrapper = shallow(<TableHeaderCell />)

      expect(wrapper.type()).toBe(TableCell)
      expect(wrapper.find(TableCell).prop('as')).toBe('th')
    })
  })
})
