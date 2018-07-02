import React from 'react'

import * as common from 'test/specs/commonTests'
import TableHeader from 'src/collections/Table/TableHeader'

describe('TableHeader', () => {
  common.isConformant(TableHeader)
  common.rendersChildren(TableHeader)

  common.propKeyOnlyToClassName(TableHeader, 'fullWidth', {
    className: 'full-width',
  })

  it('renders as a thead by default', () => {
    expect(shallow(<TableHeader />)).have.tagName('thead')
  })
})
