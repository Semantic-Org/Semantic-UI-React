import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'
import META from '../../utils/Meta'

export default class Grid extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Grid',
    type: META.type.collection,
  };

  render() {
    const classes = classNames(
      'sd-grid',
      'ui',
      this.props.className,
      'grid',
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
