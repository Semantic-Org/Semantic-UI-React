import _ from 'lodash';
import faker from 'faker';
import React from 'react';
import Table from 'components/Table/Table.js';
import TableColumn from 'components/Table/TableColumn';

describe('Table', () => {
  let randomDataKey;
  let tableData = _.times(_.random(1, 20), () => {
    return {
      imageUrl: faker.internet.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      posts: _.random(100),
      status: faker.hacker.verb(),
      role: faker.hacker.noun(),
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
        .props.children.should.equal('First Name');
    });

    it('renders contents with headerRenderer', () => {
      render(
        <Table data={tableData}>
          <TableColumn dataKey={randomDataKey} headerRenderer={() => 'YO!'} />
        </Table>
      )
        .findClass('sd-table-header')
        .props.children.should.equal('YO!');
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
          let originalItem = tableData[i][randomDataKey];
          let originalValue = Table.getSafeCellContents(originalItem);
          tableCell.props.children.should.equal(originalValue);
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
          tableCell.props.children.should.equal('REDACTED');
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
          tableCell.props.children.should.be.a('string');
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
          let itemWithoutRandomKey = _.omit(tableData[i], randomDataKey);
          let cellText = tableCell.props.children;

          _.each(itemWithoutRandomKey, (val, key) => {
            Table.getSafeCellContents(val).should.not.equal(cellText);
          });
        });
    });
  });
});
