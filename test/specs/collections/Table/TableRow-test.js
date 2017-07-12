import React from 'react'

import * as common from 'test/specs/commonTests'
import TableRow from 'src/collections/Table/TableRow'

describe('TableRow', () => {
  common.isConformant(TableRow)
  common.rendersChildren(TableRow)

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
    shallow(<TableRow />)
      .should.have.tagName('tr')
  })

  describe('shorthand', () => {
    const cells = ['Name', 'Status', 'Notes']

    it('renders empty tr with no shorthand', () => {
      const wrapper = mount(<TableRow />)

      wrapper.find('td').should.have.lengthOf(0)
    })

    it('renders the cells', () => {
      const wrapper = mount(<TableRow cells={cells} />)

      wrapper.find('td').should.have.lengthOf(cells.length)
    })

    it('renders the cells using cellAs', () => {
      const cellAs = 'th'
      const wrapper = mount(<TableRow cells={cells} cellAs={cellAs} />)

      wrapper.find(cellAs).should.have.lengthOf(cells.length)
    })
  })
})
