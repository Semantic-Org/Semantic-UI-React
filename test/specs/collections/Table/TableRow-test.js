import React from 'react'

import * as common from 'test/specs/commonTests'
import TableRow from 'src/collections/Table/TableRow'

describe('TableRow', () => {
  common.isConformant(TableRow)
  common.rendersChildren(TableRow)

  common.implementsTextAlignProp(TableRow)
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
    const items = ['Name', 'Status', 'Notes']

    it('renders empty tr with no shorthand', () => {
      const wrapper = mount(<TableRow />)

      wrapper.find('td').should.have.lengthOf(0)
    })

    it('renders the cells', () => {
      const wrapper = mount(<TableRow items={items} />)

      wrapper.find('td').should.have.lengthOf(items.length)
    })

    it('renders the cells using itemAs', () => {
      const itemAs = 'th'
      const wrapper = mount(<TableRow items={items} itemAs={itemAs} />)

      wrapper.find(itemAs).should.have.lengthOf(items.length)
    })
  })
})
