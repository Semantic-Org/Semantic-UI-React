import _ from 'lodash'
import React, { Children, Component, PropTypes } from 'react'
import cx from 'classnames'
import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'
import TableColumn from './TableColumn'

export default class Table extends Component {
  static propTypes = {
    children: customPropTypes.ofComponentTypes(['TableColumn']),
    className: PropTypes.string,
    data: PropTypes.array,
    defaultSelectedRows: PropTypes.arrayOf(PropTypes.number),
    onSelectRow: PropTypes.func,
    onSortChange: PropTypes.func,
    sort: PropTypes.shape({
      key: PropTypes.string,
      direction: PropTypes.oneOf(['descending', 'ascending']),
    }),
  }

  static defaultProps = {
    sort: {
      key: null,
      direction: 'descending',
    },
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedRows: this.props.defaultSelectedRows || [],
    }
  }

  static getSafeCellContents(content) {
    // React cannot render objects, stringify them instead
    return _.isObject(content) ? JSON.stringify(content) : content
  }

  static Column = TableColumn

  _isRowSelected(index) {
    return _.includes(this.state.selectedRows, index)
  }

  _isSelectable = () => {
    return _.includes(this.props.className, 'selectable')
  }

  _unselectRow(index) {
    if (!this._isSelectable()) return
    this.setState({
      selectedRows: _.without(this.state.selectedRows, index),
    })
  }

  _selectRow(index) {
    if (!this._isSelectable()) return
    this.setState({ selectedRows: [index] })
  }

  _unselectAllRows() {
    if (!this._isSelectable()) return
    this.setState({ selectedRows: [] })
  }

  _toggleSelectRow(index) {
    if (this._isRowSelected(index)) {
      this._unselectRow(index)
    } else {
      this._selectRow(index)
    }
  }

  _handleSelectRow(rowItem, rowIndex) {
    this._toggleSelectRow(rowIndex)
    if (this.props.onSelectRow) this.props.onSelectRow(rowItem, rowIndex)
  }

  _handleSortHeaderChange(key, direction) {
    const { onSortChange } = this.props
    if (onSortChange) {
      this._unselectAllRows()
      onSortChange(key, direction)
    }
  }

  _getHeaders() {
    const { children, data, sort } = this.props

    return Children.map(children, (column) => {
      const { dataKey, headerRenderer } = column.props
      const content = headerRenderer ? headerRenderer(data[0]) : _.startCase(dataKey)
      const isSorted = sort.key === dataKey
      const onClick = () => this._handleSortHeaderChange(
        dataKey, sort.direction === 'ascending' ? 'descending' : 'ascending'
      )
      const classes = cx({
        sorted: isSorted,
        ascending: isSorted && sort.direction === 'ascending',
        descending: isSorted && sort.direction === 'descending',
      })

      return <th className={classes} key={dataKey} onClick={onClick}>{content}</th>
    })
  }

  _getCells(dataItem, rowIndex) {
    return Children.map(this.props.children, (column) => {
      let content
      if (column.props.cellRenderer) {
        content = column.props.cellRenderer(dataItem)
      } else {
        const itemContents = dataItem[column.props.dataKey]
        content = Table.getSafeCellContents(itemContents)
      }

      return <td key={rowIndex + column.props.dataKey}>{content}</td>
    })
  }

  _getRows() {
    return _.map(this.props.data, (dataItem, rowIndex) => {
      const cells = this._getCells(dataItem, rowIndex)
      const classes = cx({
        active: this._isRowSelected(rowIndex),
      })
      const onClick = () => this._handleSelectRow(dataItem, rowIndex)

      return <tr className={classes} key={rowIndex} onClick={onClick}>{cells}</tr>
    })
  }

  static _meta = {
    name: 'Table',
    type: META.TYPES.COLLECTION,
  }

  render() {
    const { onSelectRow, onSortChange, defaultSelectedRows } = this.props
    const classes = cx(
      'ui',
      { selectable: !!onSelectRow || !!defaultSelectedRows },
      { sortable: !!onSortChange },
      this.props.className,
      'table'
    )

    const rest = getUnhandledProps(Table, this.props)

    return (
      <table {...rest} className={classes}>
        <thead>
          <tr>
            {this._getHeaders()}
          </tr>
        </thead>
        <tbody>
          {this._getRows()}
        </tbody>
      </table>
    )
  }
}
