import _ from 'lodash'
import classNames from 'classnames'
import React, { Component, PropTypes } from 'react'
import numberToWord from '../../utils/numberToWord'
import META from '../../utils/Meta.js'

export default class GridColumn extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.oneOf(_.range(1, 17)),
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'GridColumn',
    type: META.type.collection,
    parent: 'Grid',
  }

  render() {
    const classes = classNames(
      this.props.className,
      this.props.width && `${numberToWord(this.props.width)} wide`,
      'column'
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
