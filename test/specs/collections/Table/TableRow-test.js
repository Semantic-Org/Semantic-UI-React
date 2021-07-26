import React from 'react'

import * as common from 'test/specs/commonTests'
import TableRow from 'src/collections/Table/TableRow'

describe('TableRow', () => {
  common.isConformant(TableRow)
  common.forwardsRef(TableRow, { tagName: 'tr' })
  common.forwardsRef(TableRow, { requiredProps: { children: <span /> }, tagName: 'tr' })
  common.rendersChildren(TableRow, {
    rendersContent: false,
  })

  common.implementsCreateMethod(TableRow)
  common.implementsTextAlignProp(TableRow, ['left', 'center', 'right'])
  common.implementsVerticalAlignProp(TableRow)

  common.propKeyOnlyToClassName(TableRow, 'active')
  common.propKeyOnlyToClassName(TableRow, 'disabled')
  common.propKeyOnlyToClassName(TableRow, 'error')
  common.propKeyOnlyToClassName(TableRow, 'negative')
  common.propKeyOnlyToClassName(TableRow, 'positive')
  common.propKeyOnlyToClassName(TableRow, 'warning')

  it('renders as a tr by default', () => {
    shallow(<TableRow />).should.have.tagName('tr')
  })

  describe('shorthand', () => {
    const cells = ['Name', 'Status', 'Notes']

    it('renders empty tr with no shorthand', () => {
      shallow(<TableRow />)
        .find('td')
        .should.have.lengthOf(0)
    })

    it('renders the cells', () => {
      shallow(<TableRow cells={cells} />)
        .find('TableCell')
        .should.have.lengthOf(cells.length)
    })

    it('renders the cells using cellAs', () => {
      const cellWrappers = shallow(<TableRow cells={cells} cellAs='th' />).find('TableCell')

      cellWrappers.should.have.lengthOf(cells.length)

      cellWrappers.forEach((wrapper) => {
        wrapper.shallow().should.have.tagName('th')
      })
    })
  })
})
