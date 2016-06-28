import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'
import META from '../../utils/Meta'

export default class GridRow extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'GridRow',
    type: META.type.collection,
    parent: 'Grid',
  }

  render() {
    const classes = classNames(
      this.props.className,
      'row'
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
