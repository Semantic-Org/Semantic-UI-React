import React from 'react'

import * as common from 'test/specs/commonTests'
import TableBody from 'src/collections/Table/TableBody'

describe('TableBody', () => {
  common.isConformant(TableBody)
  common.rendersChildren(TableBody, {
    rendersContent: false,
  })

  it('renders as a tbody by default', () => {
    expect(shallow(<TableBody />)).have.tagName('tbody')
  })
})
