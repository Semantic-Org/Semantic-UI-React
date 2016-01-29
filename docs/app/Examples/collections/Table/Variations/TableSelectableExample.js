import _ from 'lodash';
import faker from 'faker';
import React, {Component} from 'react';
import {Table, TableColumn, Segment} from 'stardust';

const data = _.times(5, n => ({
  name: faker.name.findName(),
  phone: faker.phone.phoneNumber(),
  state: faker.address.state(),
}));

export default class TableSelectableExample extends Component {
  state = {};

  handleSelectRow = (item, index) => {
    this.setState({
      selectedItem: JSON.stringify(item, null, 2),
      selectedIndex: index,
    });
  };

  render() {
    const {selectedItem, selectedIndex} = this.state;
    return (
      <div>
        <Table className='selectable' data={data} onSelectRow={this.handleSelectRow}>
          <TableColumn dataKey='name' />
          <TableColumn dataKey='phone' />
          <TableColumn dataKey='state' />
        </Table>
        <Segment className='secondary' heading='Selected:'>
          <pre>Index: {selectedIndex}{'\n'}Item: {selectedItem}</pre>
        </Segment>
      </div>
    );
  }
}
