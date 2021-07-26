import React from 'react'

import * as common from 'test/specs/commonTests'
import TableCell from 'src/collections/Table/TableCell'
import { SUI } from 'src/lib'

describe('TableCell', () => {
  common.isConformant(TableCell)
  common.forwardsRef(TableCell, { tagName: 'td' })
  common.forwardsRef(TableCell, { requiredProps: { children: <span /> }, tagName: 'td' })
  common.rendersChildren(TableCell)

  common.implementsCreateMethod(TableCell)
  common.implementsTextAlignProp(TableCell, ['left', 'center', 'right'])
  common.implementsVerticalAlignProp(TableCell)
  common.implementsWidthProp(TableCell, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'width',
    widthClass: 'wide',
  })

  common.propKeyOnlyToClassName(TableCell, 'active')
  common.propKeyOnlyToClassName(TableCell, 'collapsing')
  common.propKeyOnlyToClassName(TableCell, 'disabled')
  common.propKeyOnlyToClassName(TableCell, 'error')
  common.propKeyOnlyToClassName(TableCell, 'negative')
  common.propKeyOnlyToClassName(TableCell, 'positive')
  common.propKeyOnlyToClassName(TableCell, 'selectable')
  common.propKeyOnlyToClassName(TableCell, 'singleLine', {
    className: 'single line',
  })
  common.propKeyOnlyToClassName(TableCell, 'warning')

  it('renders as a td by default', () => {
    shallow(<TableCell />).should.have.tagName('td')
  })
})
