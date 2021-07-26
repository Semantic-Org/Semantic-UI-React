import React from 'react'

import * as common from 'test/specs/commonTests'
import TableFooter from 'src/collections/Table/TableFooter'

describe('TableFooter', () => {
  common.isConformant(TableFooter)
  common.forwardsRef(TableFooter, { tagName: 'tfoot' })

  it('renders as a tfoot by default', () => {
    shallow(<TableFooter />).should.have.tagName('tfoot')
  })
})
