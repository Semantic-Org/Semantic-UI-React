import React, {Component, PropTypes} from 'react';

class TableCell extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <td className='sd-table-cell'>
        {this.props.children}
      </td>
    );
  }
}

export default TableCell;
