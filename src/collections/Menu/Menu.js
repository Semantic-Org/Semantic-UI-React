import React, { Children, Component, cloneElement, PropTypes } from 'react'
import cx from 'classnames'

import MenuItem from './MenuItem'
import META from '../../utils/Meta'
import { findChildType } from '../../utils/childrenUtils'

export default class Menu extends Component {
  static propTypes = {
    activeItem: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)
    const { activeItem, children } = this.props
    const firstMenuItem = findChildType(children, MenuItem)

    this.state = {
      activeItem: activeItem || firstMenuItem && firstMenuItem.props.name,
    }
  }

  handleClickItem = (activeItem) => {
    this.setState({ activeItem })
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Menu',
    type: META.type.collection,
  }

  static Item = MenuItem

  render() {
    const { activeItem, children, className, ...rest } = this.props

    const classes = cx('ui', className, 'menu')

    const _children = Children.map(children, (child) => {
      const { type, props } = child

      return type !== MenuItem ? child : cloneElement(child, {
        active: props.name === this.state.activeItem || props.name === activeItem,
        __onClick: this.handleClickItem,
      })
    })
    return (
      <div {...rest} className={classes}>
        {_children}
      </div>
    )
  }
}
