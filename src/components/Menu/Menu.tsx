import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { AutoControlledComponent, childrenExist, customPropTypes } from '../../lib'
import MenuItem from './MenuItem'
import menuRules from './menuRules'

class Menu extends AutoControlledComponent<any, any> {
  static displayName = 'Menu'

  static className = 'ui-menu'

  static create: Function

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Index of the currently active item. */
    activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Initial activeIndex value. */
    defaultActiveIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Shorthand array of props for Menu. */
    items: customPropTypes.collectionShorthand,

    /** A menu can point to show its relationship to nearby content. */
    pointing: PropTypes.bool,

    /** The menu can have primary or secondary type */
    type: PropTypes.oneOf(['primary', 'secondary']),
  }

  static defaultProps = {
    as: 'ul',
    type: 'primary',
  }

  static handledProps = [
    'activeIndex',
    'as',
    'children',
    'className',
    'defaultActiveIndex',
    'items',
    'pointing',
    'type',
  ]

  static autoControlledProps = ['activeIndex']

  static rules = menuRules

  static Item = MenuItem

  handleItemOverrides = predefinedProps => ({
    onClick: (e, itemProps) => {
      const { index } = itemProps

      this.trySetState({ activeIndex: index })

      _.invoke(predefinedProps, 'onClick', e, itemProps)
    },
  })

  renderItems = () => {
    const { items, type, pointing } = this.props
    const { activeIndex } = this.state

    return _.map(items, (item, index) =>
      MenuItem.create(item, {
        defaultProps: {
          type,
          pointing,
          index,
          active: parseInt(activeIndex, 10) === index,
        },
        overrideProps: this.handleItemOverrides,
      }),
    )
  }

  renderComponent({ ElementType, classes, rest }) {
    const { children, content } = this.props
    return (
      <ElementType {...rest} className={classes.root}>
        {childrenExist(children) ? children : this.renderItems()}
      </ElementType>
    )
  }
}

export default Menu
