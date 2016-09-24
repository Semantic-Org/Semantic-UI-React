import React from 'react'
import * as common from 'test/specs/commonTests'

import TableHeader from 'src/collections/Table/TableHeader'

describe('TableHeader', () => {
  common.isConformant(TableHeader)
  common.rendersChildren(TableHeader)

  it('renders as a thead by default', () => {
    shallow(<TableHeader />)
      .should.have.tagName('thead')
  })

  describe('fullWidth', () => {
    it('omits by default', () => {
      shallow(<TableHeader />)
        .should.not.have.className('full-width')
    })

    it('adds className when true', () => {
      shallow(<TableHeader fullWidth />)
        .should.have.className('full-width')
    })
  })
})
