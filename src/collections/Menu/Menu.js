import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
  useWidthProp,
} from '../../lib'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'
import MenuMenu from './MenuMenu'

const _meta = {
  name: 'Menu',
  type: META.TYPES.COLLECTION,
  props: {
    attached: ['top', 'bottom'],
    color: SUI.COLORS,
    icon: ['labeled'],
    fixed: ['bottom', 'top'],
    size: _.without(SUI.SIZES, 'medium', 'big'),
    widths: SUI.WIDTHS,
  },
}

/**
 * A menu displays grouped navigation actions.
 * */
class Menu extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    /** Index of the currently active item. */
    activeIndex: PropTypes.number,

    /** A menu may be attached to other content segments. */
    attached: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.attached),
    ]),

    /** A menu item or menu can have no borders. */
    borderless: PropTypes.bool,

    /** Primary content of the Menu. */
    children: PropTypes.node,

    /** Classes that will be added to the Menu className. */
    className: PropTypes.string,

    /** Additional colors can be specified. */
    color: PropTypes.oneOf(_meta.props.color),

    /** A menu can take up only the space necessary to fit its content. */
    compact: PropTypes.bool,

    /** Initial activeIndex value. */
    defaultActiveIndex: PropTypes.number,

    /** A menu can be fixed to a side of its context. */
    fixed: PropTypes.oneOf(_meta.props.fixed),

    /** A vertical menu may take the size of its container. */
    fluid: PropTypes.bool,

    /** A menu may have labeled icons. */
    icon: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.icon),
    ]),

    /** A menu may have its colors inverted to show greater contrast. */
    inverted: PropTypes.bool,

    /** onClick handler for MenuItem. */
    onItemClick: PropTypes.func,

    /** A menu can point to show its relationship to nearby content. */
    pointing: PropTypes.bool,

    /** A menu can adjust its appearance to de-emphasize its contents. */
    secondary: PropTypes.bool,

    /** A menu can stack at mobile resolutions. */
    stackable: PropTypes.bool,

    /** A menu can be formatted to show tabs of information. */
    tabular: PropTypes.bool,

    /** A vertical menu displays elements vertically. */
    vertical: PropTypes.bool,

    /** A menu can vary in size. */
    size: PropTypes.oneOf(_meta.props.size),

    /** A menu can have its items divided evenly. */
    widths: PropTypes.oneOf(_meta.props.widths),
  }

  static _meta = _meta

  static autoControlledProps = [
    'activeIndex',
  ]

  static Header = MenuHeader
  static Item = MenuItem
  static Menu = MenuMenu

  // componentWillMount() {
  //   super.componentWillMount()
  //
  //   const activeIndex = _.findIndex(this.props.children, child => {
  //     return child.type === MenuItem && _.has(child, 'props.active') && child.props.active
  //   })
  //   this.trySetState({ activeIndex: _.isNumber(activeIndex) ? activeIndex : 0 })
  // }
  //
  // handleItemClick = (e, index) => {
  //   const { onItemClick } = this.props
  //
  //   this.trySetState({ activeIndex: index })
  //   if (onItemClick) onItemClick(e, index)
  // }
  //
  // renderChildren = () => {
  //   const { children } = this.props
  //   const { activeIndex } = this.state
  //
  //   return Children.map(children, (child, i) => {
  //     const isItem = child.type === MenuItem
  //     const isLink = _.has(child, 'props.href') || _.has(child, 'props.link') || _.has(child, 'props.onClick')
  //
  //     if (isItem) {
  //       const onClick = (e) => {
  //         if (isLink) this.handleItemClick(e, i)
  //         if (child.props.onClick) child.props.onClick(e, i)
  //       }
  //
  //       return cloneElement(child, { ...child.props, active: activeIndex === i, onClick })
  //     }
  //
  //     return child
  //   })
  // }

  render() {
    const {
      attached, borderless, className, children, color, compact, fixed, fluid, icon, inverted, pointing, secondary,
      stackable, tabular, vertical, size, widths,
    } = this.props
    const classes = cx(
      'ui',
      color,
      size,
      useWidthProp(widths, 'item'),
      useKeyOrValueAndKey(attached, 'attached'),
      useKeyOnly(borderless, 'borderless'),
      useKeyOnly(compact, 'compact'),
      useValueAndKey(fixed, 'fixed'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOrValueAndKey(icon, 'icon'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(pointing, 'pointing'),
      useKeyOnly(secondary, 'secondary'),
      useKeyOnly(stackable, 'stackable'),
      useKeyOnly(tabular, 'tabular'),
      useKeyOnly(vertical, 'vertical'),
      className,
      'menu'
    )

    const rest = getUnhandledProps(Menu, this.props)
    const ElementType = getElementType(Menu, this.props)

    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }
}

export default Menu
