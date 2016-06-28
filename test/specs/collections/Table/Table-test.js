import _ from 'lodash'
import faker from 'faker'
import React from 'react'

import Table from 'src/collections/Table/Table'
import TableColumn from 'src/collections/Table/TableColumn'
import sandbox from 'test/utils/Sandbox-util'
import * as common from 'test/specs/commonTests'

describe('Table', () => {
  common.isConformant(Table)
  common.hasUIClassName(Table)
  common.hasSubComponents(Table, [TableColumn])

  let randomDataKey
  const tableData = _.times(_.random(1, 20), () => {
    return {
      imageUrl: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      permissions: {
        read: !!_.random(),
        write: !!_.random(),
        delete: !!_.random(),
      },
    }
  })

  beforeEach(() => {
    randomDataKey = _.sample(_.keys(_.head(tableData)))
  })

  describe('defaultProps', () => {
    it('should not have defaultSelectedRows', () => {
      Table.defaultProps
        .should.not.have.any.keys(['defaultSelectedRows'])
    })
    it('sort is { key: null, direction: "descending" }', () => {
      Table.defaultProps.sort
        .should.deep.equal({ key: null, direction: 'descending' })
    })
  })

  describe('initial state', () => {
    it('selectedRows should default to an empty array', () => {
      shallow(<Table />)
        .should.have.state('selectedRows')
        .that.deep.equals([])
    })

    it('selectedRows should match defined defaultSelectedRows prop', () => {
      const defaultSelectedRows = _.times(_.random(1, 20))
      shallow(<Table defaultSelectedRows={defaultSelectedRows} />)
        .should.have.state('selectedRows')
        .that.deep.equals(defaultSelectedRows)
    })
  })

  describe('props', () => {
    describe('onSelectRow', () => {
      it('is called with the rowItem and index onClick', () => {
        const spy = sandbox.spy()
        const rowItem = { name: 'bob' }
        shallow(
          <Table className='selectable' onSelectRow={spy} data={[rowItem]}>
            <Table.Column dataKey='name' />
          </Table>
        )
          .find('tbody')
          .find('tr')
          .first()
          .simulate('click')

        spy.should.have.been.calledOnce()
        spy.should.have.been.calledWith(rowItem, 0)
      })
    })
  })

  describe('header', () => {
    it('uses Start Cased column dataKey as the default content', () => {
      shallow(
        <Table data={tableData}>
          <Table.Column dataKey='firstName' />
        </Table>
      )
        .find('th')
        .should.contain.text('First Name')
    })

    it('renders contents with headerRenderer', () => {
      shallow(
        <Table data={tableData}>
          <Table.Column dataKey={randomDataKey} headerRenderer={() => 'YO!'} />
        </Table>
      )
        .find('th')
        .should.contain.text('YO!')
    })
  })

  describe('cell', () => {
    it('uses object values as default contents', () => {
      shallow(
        <Table data={tableData}>
          <Table.Column dataKey={randomDataKey} />
        </Table>
      )
        .find('td')
        .forEach((tableCell, i) => {
          const originalItem = tableData[i][randomDataKey]
          const originalValue = Table.getSafeCellContents(originalItem)
          tableCell.should.contain.text(originalValue)
        })
    })

    it('renders contents with the cellRenderer', () => {
      shallow(
        <Table data={tableData}>
          <Table.Column dataKey={randomDataKey} cellRenderer={() => 'REDACTED'} />
        </Table>
      )
        .find('td')
        .forEach((tableCell) => {
          tableCell.should.contain.text('REDACTED')
        })
    })

    it('stringifies object children', () => {
      // use the permissions dataKey here as that column contains objects
      shallow(
        <Table data={tableData}>
          <Table.Column dataKey='permissions' />
        </Table>
      )
        .find('td')
        .forEach((tableCell) => {
          const text = tableCell.text()
          text.should.be.a('string')
          text.should.have.length.above(0)
        })
    })
  })

  describe('row', () => {
    it('only contains cells that were defined in TableColumns', () => {
      shallow(
        <Table data={tableData}>
          <Table.Column dataKey={randomDataKey} />
        </Table>
      )
        .find('td')
        .forEach((tableCell, i) => {
          // remove this table's column from the current data object
          // then expect this cell's value to not be found in the object
          const itemWithoutRandomKey = _.omit(tableData[i], randomDataKey)
          const cellText = tableCell.textContent

          _.each(itemWithoutRandomKey, val => {
            Table.getSafeCellContents(val).should.not.equal(cellText)
          })
        })
    })
  })

  describe('row select', () => {
    let rows

    beforeEach(() => {
      rows = mount(
        <Table className='selectable' data={[{ row: 1 }, { row: 2 }]}>
          <Table.Column dataKey='row' />
        </Table>
      )
        .find('tbody')
        .find('tr')
    })

    it('applies class "active" only to the clicked row', () => {
      rows.first().should.not.have.className('active')
      rows.at(1).should.not.have.className('active')

      rows.first().simulate('click')

      rows.first().should.have.className('active')
      rows.at(1).should.not.have.className('active')
    })

    it('toggles class "active" on repeat clicks', () => {
      const row = rows.first()
      // ensure not active
      row.should.not.have.className('active')

      // make active
      row.simulate('click')
      row.should.have.className('active')

      // toggle, not active
      row.simulate('click')
      row.should.not.have.className('active')
    })
  })

  describe('sort', () => {
    it('unselects all rows', () => {
      const wrapper = mount(
        <Table className='selectable' data={tableData} onSortChange={_.noop}>
          <Table.Column dataKey={randomDataKey} />
        </Table>
      )

      const table = wrapper.instance()
      const headers = wrapper.find('th')
      const rows = wrapper.find('tbody').find('tr')

      // select a row
      rows
        .first()
        .simulate('click')

      table._isRowSelected(0)
        .should.equal(true)

      // sort, assert row unselected
      headers
        .first()
        .simulate('click')

      table._isRowSelected(0)
        .should.equal(false)
    })
  })

  describe('"sortable" class', () => {
    it('is auto applied when "onSortChange" prop is present', () => {
      shallow(<Table onSortChange={_.noop} />)
        .should.have.className('sortable')
    })

    it('is not auto applied by default', () => {
      shallow(<Table />)
        .should.not.have.className('sortable')
    })
  })

  describe('"selectable" class', () => {
    it('is auto applied when "onSelectRow" prop is present', () => {
      shallow(<Table onSelectRow={_.noop} />)
        .should.have.className('selectable')
    })

    it('is auto applied when "defaultSelectedRows" prop is present', () => {
      shallow(<Table defaultSelectedRows={[]} />)
        .should.have.className('selectable')
    })

    it('is not auto applied by default', () => {
      shallow(<Table />)
        .should.not.have.className('selectable')
    })
  })
})
