import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Simulate } from 'react-addons-test-utils'
import { Table } from 'stardust'
import sandbox from 'test/utils/Sandbox-util'

describe('Table', () => {
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
    randomDataKey = _.sample(_.keys(_.first(tableData)))
  })

  describe('defaultProps', () => {
    it('should have empty defaultSelectedRows', () => {
      deprecatedRender(<Table />)
        .first()
        .props.sort
        .should.deep.equal({ key: null, direction: 'descending' })
    })
  })

  describe('initial state', () => {
    it('selectedRows should default to an empty array', () => {
      deprecatedRender(<Table />)
        .first()
        .state.selectedRows
        .should.deep.equal([])
    })

    it('selectedRows should match defined defaultSelectedRows prop', () => {
      const defaultSelectedRows = _.times(_.random(1, 20))
      deprecatedRender(<Table defaultSelectedRows={defaultSelectedRows} />)
        .first()
        .state.selectedRows
        .should.equal(defaultSelectedRows)
    })
  })

  describe('props', () => {
    describe('onSelectRow', () => {
      it('is called with the rowItem and index onClick', () => {
        const spy = sandbox.spy()
        const rowItem = { name: 'bob' }
        const row = deprecatedRender(
          <Table className='selectable' onSelectRow={spy} data={[rowItem]}>
            <Table.Column dataKey='name' />
          </Table>
        )
          .scryClass('sd-table-row')[0]

        spy.called.should.equal(false)
        Simulate.click(row)
        spy.calledWith(rowItem, 0).should.equal(true)
      })
    })
  })

  describe('header', () => {
    it('uses Start Cased column dataKey as the default content', () => {
      deprecatedRender(
        <Table data={tableData}>
          <Table.Column dataKey='firstName' />
        </Table>
      )
        .findClass('sd-table-header')
        .textContent.should.equal('First Name')
    })

    it('renders contents with headerRenderer', () => {
      deprecatedRender(
        <Table data={tableData}>
          <Table.Column dataKey={randomDataKey} headerRenderer={() => 'YO!'} />
        </Table>
      )
        .findClass('sd-table-header')
        .textContent.should.equal('YO!')
    })
  })

  describe('cell', () => {
    it('uses object values as default contents', () => {
      deprecatedRender(
        <Table data={tableData}>
          <Table.Column dataKey={randomDataKey} />
        </Table>
      )
        .scryClass('sd-table-cell')
        .forEach((tableCell, i) => {
          const originalItem = tableData[i][randomDataKey]
          const originalValue = Table.getSafeCellContents(originalItem)
          tableCell.textContent.should.equal(originalValue)
        })
    })

    it('renders contents with the cellRenderer', () => {
      deprecatedRender(
        <Table data={tableData}>
          <Table.Column dataKey={randomDataKey} cellRenderer={() => 'REDACTED'} />
        </Table>
      )
        .scryClass('sd-table-cell')
        .forEach((tableCell) => {
          tableCell.textContent.should.equal('REDACTED')
        })
    })

    it('stringifies contents if they are objects', () => {
      // use the permissions key here as it is an object
      deprecatedRender(
        <Table data={tableData}>
          <Table.Column dataKey='permissions' />
        </Table>
      )
        .scryClass('sd-table-cell')
        .forEach((tableCell) => {
          tableCell.textContent.should.be.a('string')
        })
    })
  })

  describe('row', () => {
    it('only contains cells that were defined in TableColumns', () => {
      deprecatedRender(
        <Table data={tableData}>
          <Table.Column dataKey={randomDataKey} />
        </Table>
      )
        .scryClass('sd-table-cell')
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
      rows = deprecatedRender(
        <Table className='selectable' data={[{ row: 1 }, { row: 2 }]}>
          <Table.Column dataKey='row' />
        </Table>
      )
        .scryClass('sd-table-row')
    })

    it('applies class "active" only to the clicked row', () => {
      rows[0].getAttribute('class').should.not.include('active')
      rows[1].getAttribute('class').should.not.include('active')

      Simulate.click(rows[0])

      rows[0].getAttribute('class').should.include('active')
      rows[1].getAttribute('class').should.not.include('active')
    })

    it('toggles class "active" on repeat clicks', () => {
      const row = rows[0]
      // ensure not active
      row.getAttribute('class').should.not.include('active')

      // make active
      Simulate.click(row)
      row.getAttribute('class').should.include('active')

      // toggle, not active
      Simulate.click(row)
      row.getAttribute('class').should.not.include('active')
    })
  })

  describe('sort', () => {
    it('unselects all rows', () => {
      const tree = deprecatedRender(
        <Table className='selectable' data={tableData} onSortChange={_.noop}>
          <Table.Column dataKey={randomDataKey} />
        </Table>
      )

      const table = tree.first()
      const headers = tree.scryClass('sd-table-header')
      const rows = tree.scryClass('sd-table-row')

      // select a row
      Simulate.click(rows[0])
      table._isRowSelected(0).should.equal(true)

      // sort, assert row unselected
      Simulate.click(headers[0])
      table._isRowSelected(0).should.equal(false)
    })
  })

  describe('"sortable" class', () => {
    it('is auto applied when "onSortChange" prop is present', () => {
      deprecatedRender(<Table onSortChange={_.noop} />)
        .findClass('sortable')
    })

    it('is not auto applied by default', () => {
      it('does not have class "sortable"', () => {
        deprecatedRender(<Table />)
          .findClass('sd-table')
          .props.className
          .should.not.include('sortable')
      })
    })
  })

  describe('"selectable" class', () => {
    it('is auto applied when "onSelectRow" prop is present', () => {
      deprecatedRender(<Table onSelectRow={_.noop} />)
        .findClass('selectable')
    })

    it('is auto applied when "defaultSelectedRows" prop is present', () => {
      deprecatedRender(<Table defaultSelectedRows={[]} />)
        .findClass('selectable')
    })

    it('is not auto applied by default', () => {
      deprecatedRender(<Table />)
        .findClass('sd-table')
        .getAttribute('class')
        .should.not.include('selectable')
    })
  })
})
