import React from 'react'

import * as common from 'test/specs/commonTests'
import TableHeaderCell from 'src/collections/Table/TableHeaderCell'

describe('TableHeaderCell', () => {
  common.isConformant(TableHeaderCell)

  it('renders as a th by default', () => {
    shallow(<TableHeaderCell />)
      .should.have.tagName('th')
  })
})
