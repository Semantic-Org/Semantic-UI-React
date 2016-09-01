import React, { Children, Component, cloneElement, PropTypes } from 'react'
import cx from 'classnames'

import MenuItem from './MenuItem'
import { childrenUtils, getElementType, getUnhandledProps, META } from '../../lib'

export default class Menu extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    activeItem: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  constructor(props, context) {
    super(props, context)
    const { activeItem, children } = this.props
    const firstMenuItem = childrenUtils.findByType(children, MenuItem)

    this.state = {
      activeItem: activeItem || firstMenuItem && firstMenuItem.props.name,
    }
  }

  handleClickItem = (activeItem) => {
    this.setState({ activeItem })
  }

  static _meta = {
    name: 'Menu',
    type: META.TYPES.COLLECTION,
  }

  static Item = MenuItem

  render() {
    const { activeItem, children, className } = this.props

    const classes = cx('ui', className, 'menu')

    const _children = Children.map(children, (child) => {
      const { type, props } = child

      return type !== MenuItem ? child : cloneElement(child, {
        active: props.name === this.state.activeItem || props.name === activeItem,
        __onClick: this.handleClickItem,
      })
    })
    const ElementType = getElementType(Menu, this.props)
    const rest = getUnhandledProps(Menu, this.props)
    return (
      <ElementType {...rest} className={classes}>
        {_children}
      </ElementType>
    )
  }
}
