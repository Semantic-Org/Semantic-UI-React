import React from 'react'

import * as common from 'test/specs/commonTests'
import TableCell from 'src/collections/Table/TableCell'

describe('TableCell', () => {
  common.isConformant(TableCell)
  common.rendersChildren(TableCell)

  common.implementsTextAlignProp(TableCell)
  common.implementsVerticalAlignProp(TableCell)
  common.implementsWidthProp(TableCell, { propKey: 'width', widthClass: 'wide', canEqual: false })

  common.propKeyOnlyToClassName(TableCell, 'active')
  common.propKeyOnlyToClassName(TableCell, 'collapsing')
  common.propKeyOnlyToClassName(TableCell, 'disabled')
  common.propKeyOnlyToClassName(TableCell, 'error')
  common.propKeyOnlyToClassName(TableCell, 'negative')
  common.propKeyOnlyToClassName(TableCell, 'positive')
  common.propKeyOnlyToClassName(TableCell, 'singleLine', {
    className: 'single line',
  })
  common.propKeyOnlyToClassName(TableCell, 'warning')

  it('renders as a thead by default', () => {
    shallow(<TableCell />)
      .should.have.tagName('td')
  })
})
