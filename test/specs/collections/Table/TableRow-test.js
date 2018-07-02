import React from 'react'

import * as common from 'test/specs/commonTests'
import TableRow from 'src/collections/Table/TableRow'

describe('TableRow', () => {
  common.isConformant(TableRow)
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
    expect(shallow(<TableRow />)).have.tagName('tr')
  })

  describe('shorthand', () => {
    const cells = ['Name', 'Status', 'Notes']

    it('renders empty tr with no shorthand', () => {
      expect(shallow(<TableRow />).find('td')).toHaveLength(0)
    })

    it('renders the cells', () => {
      expect(shallow(<TableRow cells={cells} />).find('TableCell')).toHaveLength(cells.length)
    })

    it('renders the cells using cellAs', () => {
      const cellWrappers = shallow(<TableRow cells={cells} cellAs='th' />).find('TableCell')

      expect(cellWrappers).toHaveLength(cells.length)

      cellWrappers.forEach((wrapper) => {
        expect(wrapper.shallow()).have.tagName('th')
      })
    })
  })
})
