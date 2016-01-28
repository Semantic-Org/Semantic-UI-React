import _ from 'lodash';
import faker from 'faker';
import React from 'react';
import {Simulate} from 'react-addons-test-utils';
import {Table, TableColumn} from 'stardust';
import sandbox from 'test/utils/Sandbox-util';

describe('Table', () => {
  let randomDataKey;
  const tableData = _.times(_.random(1, 20), () => {
    return {
      imageUrl: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      permissions: {
        read: !!_.random(),
        write: !!_.random(),
        delete: !!_.random()
      }
    };
  });

  beforeEach(() => {
    randomDataKey = _.sample(_.keys(_.first(tableData)));
  });

  describe('header', () => {
    it('uses Start Cased column dataKey as the default content', () => {
      render(
        <Table data={tableData}>
          <TableColumn dataKey='firstName' />
        </Table>
      )
        .findClass('sd-table-header')
        .textContent.should.equal('First Name');
    });

    it('renders contents with headerRenderer', () => {
      render(
        <Table data={tableData}>
          <TableColumn dataKey={randomDataKey} headerRenderer={() => 'YO!'} />
        </Table>
      )
        .findClass('sd-table-header')
        .textContent.should.equal('YO!');
    });
  });

  describe('cell', () => {
    it('uses object values as default contents', () => {
      render(
        <Table data={tableData}>
          <TableColumn dataKey={randomDataKey} />
        </Table>
      )
        .scryClass('sd-table-cell')
        .forEach((tableCell, i) => {
          const originalItem = tableData[i][randomDataKey];
          const originalValue = Table.getSafeCellContents(originalItem);
          tableCell.textContent.should.equal(originalValue);
        });
    });

    it('renders contents with the cellRenderer', () => {
      render(
        <Table data={tableData}>
          <TableColumn dataKey={randomDataKey} cellRenderer={() => 'REDACTED'} />
        </Table>
      )
        .scryClass('sd-table-cell')
        .forEach((tableCell) => {
          tableCell.textContent.should.equal('REDACTED');
        });
    });

    it('stringifies contents if they are objects', () => {
      // use the permissions key here as it is an object
      render(
        <Table data={tableData}>
          <TableColumn dataKey='permissions' />
        </Table>
      )
        .scryClass('sd-table-cell')
        .forEach((tableCell) => {
          tableCell.textContent.should.be.a('string');
        });
    });
  });

  describe('row', () => {
    it('only contains cells that were defined in TableColumns', () => {
      render(
        <Table data={tableData}>
          <TableColumn dataKey={randomDataKey} />
        </Table>
      )
        .scryClass('sd-table-cell')
        .forEach((tableCell, i) => {
          // remove this table's column from the current data object
          // then expect this cell's value to not be found in the object
          const itemWithoutRandomKey = _.omit(tableData[i], randomDataKey);
          const cellText = tableCell.textContent;

          _.each(itemWithoutRandomKey, val => {
            Table.getSafeCellContents(val).should.not.equal(cellText);
          });
        });
    });
  });

  describe('_isSelectable', () => {
    it('returns true when "selectable" class and "onSelectRow" prop are present', () => {
      render(<Table className='selectable' onSelectRow={_.noop} data={tableData} />)
        .first()
        ._isSelectable()
        .should.equal(true);
    });

    it('returns false when "selectable" class is omitted', () => {
      render(<Table onSelectRow={_.noop} data={tableData} />)
        .first()
        ._isSelectable()
        .should.equal(false);
    });

    it('returns false when "onSelectRow" prop is omitted', () => {
      render(<Table className='selectable' data={tableData} />)
        .first()
        ._isSelectable()
        .should.equal(false);
    });
  });

  describe('_handleSelectRow', () => {
    let table;
    let spy;

    beforeEach(() => {
      spy = sandbox.spy();
      table = render(<Table className='selectable' onSelectRow={spy} data={tableData} />).first();
    });

    it('calls onSelectRow prop if _isSelectable', () => {
      table._isSelectable = () => true;
      spy.called.should.equal(false);
      table._handleSelectRow();
      spy.called.should.equal(true);
    });

    it('does not call onSelectRow prop if !_isSelectable', () => {
      table._isSelectable = () => false;
      spy.called.should.equal(false);
      table._handleSelectRow();
      spy.called.should.equal(false);
    });
  });

  describe('select row', () => {
    it('is called with the rowItem and index onClick', () => {
      const spy = sandbox.spy();
      const rowItem = {name: 'bob'};
      const row = render(
        <Table className='selectable' onSelectRow={spy} data={[rowItem]}>
          <TableColumn dataKey='name' />
        </Table>
      )
        .scryClass('sd-table-row')[0];

      spy.called.should.equal(false);
      Simulate.click(row);
      spy.calledWith(rowItem, 0).should.equal(true);
    });
  });

  describe('sortable', () => {
    describe('with onSortChange prop', () => {
      it('has class "sortable"', () => {
        render(<Table data={tableData} onSortChange={_.noop} />)
          .findClass('sortable');
      });
    });

    describe('without onSortChange prop', () => {
      it('does not have class "sortable"', () => {
        render(<Table data={tableData} />)
          .findClass('sd-table')
          .props.className
          .should.not.include('sortable');
      });
    });
  });
});
