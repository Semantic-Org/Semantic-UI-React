import React from 'react'

import * as common from 'test/specs/commonTests'
import Table from 'src/collections/Table/Table'
import TableBody from 'src/collections/Table/TableBody'
import TableCell from 'src/collections/Table/TableCell'
import TableFooter from 'src/collections/Table/TableFooter'
import TableHeader from 'src/collections/Table/TableHeader'
import TableHeaderCell from 'src/collections/Table/TableHeaderCell'
import TableRow from 'src/collections/Table/TableRow'

describe('Table', () => {
  common.isConformant(Table)
  common.hasUIClassName(Table)
  common.hasSubComponents(Table, [TableBody, TableCell, TableFooter, TableHeader, TableHeaderCell, TableRow])
  common.rendersChildren(Table)

  common.implementsWidthProp(Table, { propKey: 'columns', widthClass: 'column', canEqual: false })

  common.propKeyOnlyToClassName(Table, 'celled')
  common.propKeyOnlyToClassName(Table, 'collapsing')
  common.propKeyOnlyToClassName(Table, 'definition')
  common.propKeyOnlyToClassName(Table, 'fixed')
  common.propKeyOnlyToClassName(Table, 'inverted')
  common.propKeyOnlyToClassName(Table, 'selectable')
  common.propKeyOnlyToClassName(Table, 'singleLine', {
    className: 'single line',
  })
  common.propKeyOnlyToClassName(Table, 'stackable')
  common.propKeyOnlyToClassName(Table, 'striped')
  common.propKeyOnlyToClassName(Table, 'structured')
  common.propKeyOnlyToClassName(Table, 'unstackable')

  common.propKeyOrValueAndKeyToClassName(Table, 'basic')
  common.propKeyOrValueAndKeyToClassName(Table, 'compact')
  common.propKeyOrValueAndKeyToClassName(Table, 'padded')

  common.propValueOnlyToClassName(Table, 'color')
  common.propValueOnlyToClassName(Table, 'size')

  it('renders as a thead by default', () => {
    shallow(<Table />)
        .should.have.tagName('table')
  })
})
