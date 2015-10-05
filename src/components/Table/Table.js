import _ from 'lodash';
import React, {Children, Component, PropTypes} from 'react';
import SIZES from '../../utils/SIZES';
import classNames from 'classnames';
import TableColumn from './TableColumn';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';

class Table extends Component {
  static propTypes = {
    basic: PropTypes.bool,
    children: function(props, propName, componentName) {
      let isValid = true;
      Children.forEach(props.children, (child) => {
        if (child.type !== TableColumn) {
          isValid = false;
        }
      });
      if (!isValid) {
        return new Error('`Table` must only have `TableColumn` children.');
      }
    },
    compact: PropTypes.bool,
    data: PropTypes.array.isRequired,
    fixed: PropTypes.bool,
    selectable: PropTypes.bool,
    size: PropTypes.oneOf(_.values(SIZES)),
    striped: PropTypes.bool,
    very: PropTypes.bool,
  };

  static getSafeCellContents(content) {
    // React cannot render objects, stringify them instead
    return _.isObject(content) ? JSON.stringify(content) : content;
  }

  _getHeaders() {
    return Children.map(this.props.children, (column) => {
      let content = column.props.headerRenderer
        ? column.props.headerRenderer(this.props.data[0])
        : _.startCase(column.props.dataKey);

      return <TableHeader key={column.props.dataKey}>{content}</TableHeader>;
    });
  }

  _getCells(dataItem, rowIndex) {
    return Children.map(this.props.children, (column) => {
      let content;
      if (column.props.cellRenderer) {
        content = column.props.cellRenderer(dataItem);
      } else {
        let itemContents = dataItem[column.props.dataKey];
        content = Table.getSafeCellContents(itemContents);
      }

      return <TableCell key={rowIndex + column.props.dataKey}>{content}</TableCell>;
    });
  }

  _getRows() {
    return _.map(this.props.data, (dataItem, rowIndex) => {
      let cells = this._getCells(dataItem, rowIndex);

      return <TableRow key={rowIndex}>{cells}</TableRow>;
    });
  }

  render() {
    let classes = classNames(
      'sd-table',
      'ui',
      {very: this.props.very},
      {basic: this.props.basic},
      {selectable: this.props.selectable},
      {fixed: this.props.fixed},
      {compact: this.props.compact},
      {striped: this.props.striped},
      this.props.size,
      'table',
    );
    return (
      <table className={classes}>
        <thead>
          <tr>
            {this._getHeaders()}
          </tr>
        </thead>
        <tbody>
          {this._getRows()}
        </tbody>
      </table>
    );
  }
}

export default Table;
