import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import ListItem from './ListItem'

export default class List extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'List',
    type: META.type.element,
  }

  static Item = ListItem

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'list'
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
