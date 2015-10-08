import React, {Component, PropTypes} from 'react';

class TableRow extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return <tr className='sd-table-row'>{this.props.children}</tr>;
  }
}

export default TableRow;
