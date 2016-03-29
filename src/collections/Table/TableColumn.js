import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'

export default class TableColumn extends Component {
  static propTypes = {
    cellRenderer: PropTypes.func,
    className: PropTypes.string,
    dataKey: PropTypes.string,
    headerRenderer: PropTypes.func,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'TableColumn',
    type: META.type.collection,
    parent: 'Table',
  }

  render() {
    const classes = classNames(
      'sd-table-column',
      this.props.className
    )
    return <div {...this.props} className={classes}></div>
  }
}
