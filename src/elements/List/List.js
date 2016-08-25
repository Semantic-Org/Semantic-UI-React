import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import { getElementType, META } from '../../lib'
import ListItem from './ListItem'

export default class List extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    name: 'List',
    type: META.TYPES.ELEMENT,
  }

  static Item = ListItem

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'list'
    )
    const ElementType = getElementType(List, this.props)
    return (
      <ElementType {...this.props} className={classes}>
        {this.props.children}
      </ElementType>
    )
  }
}
