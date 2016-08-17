import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'
import MenuMenu from './MenuMenu'

const _meta = {
  name: 'Menu',
  type: META.TYPES.COLLECTION,
  props: {
    widths: SUI.WIDTHS,
  },
}

/**
 * A menu displays grouped navigation actions.
 * */
class Menu extends Component {
  static propTypes = {
    /** Index of the currently active item. */
    activeIndex: PropTypes.number,

    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    /** Primary content of the Menu. */
    children: PropTypes.node,

    /** Classes that will be added to the Menu className. */
    className: PropTypes.string,

    /** A menu can take up only the space necessary to fit its content. */
    compact: PropTypes.bool,

    /** Initial activeIndex value. */
    defaultActiveIndex: PropTypes.number,

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

    /** A vertical menu displays elements vertically. */
    vertical: PropTypes.bool,

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
    const { className, children, compact, inverted, pointing, secondary, stackable, vertical, widths } = this.props
    const classes = cx(
      'ui',
      className,
      useWidthProp(widths),
      useKeyOnly(compact, 'compact'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(pointing, 'pointing'),
      useKeyOnly(secondary, 'secondary'),
      useKeyOnly(stackable, 'stackable'),
      useKeyOnly(vertical, 'vertical'),
      'menu'
    )

    const rest = getUnhandledProps(Menu, this.props)
    const ElementType = getElementType(Menu, this.props)

    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }
}

export default Menu
