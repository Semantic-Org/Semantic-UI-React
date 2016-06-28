import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'
import META from '../../utils/Meta'
import GridColumn from './GridColumn'
import GridRow from './GridRow'

export default class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Grid',
    type: META.type.collection,
  }

  static Column = GridColumn
  static Row = GridRow

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'grid'
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
