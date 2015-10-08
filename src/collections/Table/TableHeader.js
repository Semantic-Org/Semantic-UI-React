import React, {Component, PropTypes} from 'react';

class TableHeader extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <th className='sd-table-header'>
        {this.props.children}
      </th>
    );
  }
}

export default TableHeader;
