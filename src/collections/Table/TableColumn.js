import React, {Component, PropTypes} from 'react';

class TableColumn extends Component {
  static propTypes = {
    cellRenderer: PropTypes.func,
    dataKey: PropTypes.string,
    headerRenderer: PropTypes.func,
  };

  render() {
    return <div className='sd-table-column'></div>;
  }
}

export default TableColumn;
