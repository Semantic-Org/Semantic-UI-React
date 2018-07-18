import _ from 'lodash'
import React from 'react'

import Table from 'src/collections/Table/Table'
import TableBody from 'src/collections/Table/TableBody'
import TableCell from 'src/collections/Table/TableCell'
import TableFooter from 'src/collections/Table/TableFooter'
import TableHeader from 'src/collections/Table/TableHeader'
import TableHeaderCell from 'src/collections/Table/TableHeaderCell'
import TableRow from 'src/collections/Table/TableRow'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('Table', () => {
  common.isConformant(Table)
  common.hasSubcomponents(Table, [
    TableBody,
    TableCell,
    TableFooter,
    TableHeader,
    TableHeaderCell,
    TableRow,
  ])
  common.hasUIClassName(Table)
  common.rendersChildren(Table, {
    rendersContent: false,
  })

  common.implementsWidthProp(Table, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'columns',
    widthClass: 'column',
  })

  common.implementsTextAlignProp(Table, ['left', 'center', 'right'])
  common.implementsVerticalAlignProp(Table)

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
  common.propKeyOnlyToClassName(Table, 'sortable')
  common.propKeyOnlyToClassName(Table, 'striped')
  common.propKeyOnlyToClassName(Table, 'structured')
  common.propKeyOnlyToClassName(Table, 'unstackable')

  common.propKeyOrValueAndKeyToClassName(Table, 'attached', ['top', 'bottom'])
  common.propKeyOrValueAndKeyToClassName(Table, 'basic', ['very'])
  common.propKeyOrValueAndKeyToClassName(Table, 'compact', ['very'])
  common.propKeyOrValueAndKeyToClassName(Table, 'padded', ['very'])

  common.propValueOnlyToClassName(Table, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(
    Table,
    'size',
    _.without(SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive'),
  )

  describe('as', () => {
    it('is "table" by default', () => {
      expect(shallow(<Table />).type()).toBe('table')
    })
  })

  describe('shorthand', () => {
    let wrapper
    let thead
    let tbody
    let tfoot

    beforeEach(() => {
      wrapper = undefined
      thead = undefined
      tbody = undefined
      tfoot = undefined
    })

    const headerRow = ['Name', 'Status', 'Notes']

    const renderBodyRow = ({ name, status, notes }, index) => ({
      key: index,
      cells: [name || { key: 0 }, status || { key: 1 }, notes || { key: 2 }],
    })

    const footerRow = [{ colSpan: 3, content: 'Total', key: 'total' }]

    const tableData = [
      { name: undefined, status: undefined, notes: undefined },
      { name: 'Jimmy', status: 'Requires Action', notes: undefined },
      { name: 'Jamie', status: undefined, notes: 'Hostile' },
      { name: 'Jill', status: undefined, notes: undefined },
    ]

    const wrapperMount = (props) => {
      wrapper = mount(<Table {...props} />)

      thead = wrapper.find('thead')
      tbody = wrapper.find('tbody')
      tfoot = wrapper.find('tfoot')
    }

    it('renders empty tbody with no shorthand', () => {
      wrapperMount()

      expect(thead).toHaveLength(0)

      expect(tbody).toHaveLength(1)
      expect(tbody.find('tr')).toHaveLength(0)

      expect(tfoot).toHaveLength(0)
    })

    it('renders the table', () => {
      wrapperMount({ headerRow, renderBodyRow, footerRow, tableData })

      expect(thead).toHaveLength(1)
      expect(thead.find('tr')).toHaveLength(1)
      expect(thead.find('tr').find('th')).toHaveLength(headerRow.length)

      expect(tbody).toHaveLength(1)
      expect(tbody.find('tr')).toHaveLength(tableData.length)
      expect(
        tbody
          .find('tr')
          .first()
          .find('td'),
      ).toHaveLength(3)

      expect(tfoot).toHaveLength(1)
      expect(tfoot.find('tr')).toHaveLength(1)
      expect(tfoot.find('tr').find('td')).toHaveLength(footerRow.length)
    })
  })
})
