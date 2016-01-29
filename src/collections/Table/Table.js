import _ from 'lodash';
import React, {Children, Component, PropTypes} from 'react';
import classNames from 'classnames';
import {ofComponentTypes} from '../../utils/customPropTypes';
import META from '../../utils/Meta';

export default class Table extends Component {
  static propTypes = {
    basic: PropTypes.bool,
    children: ofComponentTypes(['TableColumn']),
    className: PropTypes.string,
    data: PropTypes.array,
    onSelectRow: PropTypes.func,
    onSortChange: PropTypes.func,
    selectedRows: PropTypes.arrayOf(PropTypes.number),
    sort: PropTypes.shape({
      key: PropTypes.string,
      direction: PropTypes.string, // descending|ascending, defaults to descending
    }),
  };

  static defaultProps = {
    selectedRows: []
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedRows: this.props.selectedRows,
    };
  }

  static getSafeCellContents(content) {
    // React cannot render objects, stringify them instead
    return _.isObject(content) ? JSON.stringify(content) : content;
  }

  _isRowSelected(index) {
    return _.includes(this.state.selectedRows, index);
  }

  _isSelectable = () => {
    return _.includes(this.props.className, 'selectable');
  };

  _unselectRow(index) {
    if (!this._isSelectable()) return;
    this.setState({
      selectedRows: _.without(this.state.selectedRows, index)
    });
  }

  _selectRow(index) {
    if (!this._isSelectable()) return;
    this.setState({selectedRows: [index]});
  }

  _unselectAllRows() {
    this.setState({selectedRows: []});
  }

  _toggleSelectRow(index) {
    if (this._isRowSelected(index)) {
      this._unselectRow(index);
    } else {
      this._selectRow(index);
    }
  }

  _handleSelectRow(rowItem, rowIndex) {
    this._toggleSelectRow(rowIndex);
    if (this.props.onSelectRow) this.props.onSelectRow(rowItem, rowIndex);
  }

  _handleSortHeaderChange(key, direction) {
    const {onSortChange} = this.props;
    if (onSortChange) {
      this._unselectAllRows();
      onSortChange(key, direction);
    }
  }

  _getHeaders() {
    return Children.map(this.props.children, (column) => {
      const key = column.props.dataKey;
      const content = column.props.headerRenderer
        ? column.props.headerRenderer(this.props.data[0])
        : _.startCase(column.props.dataKey);
      const sorted = _.get(this, 'props.sort.key') === key;
      const direction = _.get(this, 'props.sort.direction', 'descending');
      const onClick = () => this._handleSortHeaderChange(
        key, direction === 'ascending' ? 'descending' : 'ascending'
      );
      const classes = classNames('sd-table-header', {
        sorted,
        ascending: sorted && direction === 'ascending',
        descending: sorted && direction === 'descending',
      });

      return <th className={classes} key={key} onClick={onClick}>{content}</th>;
    });
  }

  _getCells(dataItem, rowIndex) {
    return Children.map(this.props.children, (column) => {
      let content;
      if (column.props.cellRenderer) {
        content = column.props.cellRenderer(dataItem);
      } else {
        const itemContents = dataItem[column.props.dataKey];
        content = Table.getSafeCellContents(itemContents);
      }

      return <td key={rowIndex + column.props.dataKey} className={'sd-table-cell'}>{content}</td>;
    });
  }

  _getRows() {
    return _.map(this.props.data, (dataItem, rowIndex) => {
      const cells = this._getCells(dataItem, rowIndex);
      const classes = classNames('sd-table-row', {
        active: this._isRowSelected(rowIndex),
      });
      const onClick = () => this._handleSelectRow(dataItem, rowIndex);

      return <tr className={classes} key={rowIndex} onClick={onClick}>{cells}</tr>;
    });
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Table',
    type: META.type.collection,
  };

  render() {
    const classes = classNames(
      'sd-table',
      'ui',
      {sortable: !!this.props.onSortChange},
      this.props.className,
      'table'
    );
    return (
      <table {...this.props} className={classes}>
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
