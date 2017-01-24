import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
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
    floated: ['right'],
    icon: ['labeled'],
    fixed: ['left', 'right', 'bottom', 'top'],
    size: _.without(SUI.SIZES, 'medium', 'big'),
    tabular: ['right'],
    widths: SUI.WIDTHS,
  },
}

/**
 * A menu displays grouped navigation actions.
 * @see Dropdown
 */
class Menu extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Index of the currently active item. */
    activeIndex: PropTypes.number,

    /** A menu may be attached to other content segments. */
    attached: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.attached),
    ]),

    /** A menu item or menu can have no borders. */
    borderless: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Additional colors can be specified. */
    color: PropTypes.oneOf(_meta.props.color),

    /** A menu can take up only the space necessary to fit its content. */
    compact: PropTypes.bool,

    /** Initial activeIndex value. */
    defaultActiveIndex: PropTypes.number,

    /** A menu can be fixed to a side of its context. */
    fixed: PropTypes.oneOf(_meta.props.fixed),

    /** A menu can be floated. */
    floated: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.floated),
    ]),

    /** A vertical menu may take the size of its container. */
    fluid: PropTypes.bool,

    /** A menu may have labeled icons. */
    icon: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.icon),
    ]),

    /** A menu may have its colors inverted to show greater contrast. */
    inverted: PropTypes.bool,

    /** Shorthand array of props for Menu. */
    items: customPropTypes.collectionShorthand,

    /**
     * onClick handler for MenuItem. Mutually exclusive with children.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All item props.
     */
    onItemClick: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.func,
    ]),

    /** A pagination menu is specially formatted to present links to pages of content. */
    pagination: PropTypes.bool,

    /** A menu can point to show its relationship to nearby content. */
    pointing: PropTypes.bool,

    /** A menu can adjust its appearance to de-emphasize its contents. */
    secondary: PropTypes.bool,

    /** A menu can stack at mobile resolutions. */
    stackable: PropTypes.bool,

    /** A menu can be formatted to show tabs of information. */
    tabular: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.tabular),
    ]),

    /** A menu can be formatted for text content. */
    text: PropTypes.bool,

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

  handleItemClick = (e, itemProps) => {
    const { index } = itemProps

    this.trySetState({ activeIndex: index })
    const { items, onItemClick } = this.props

    if (_.get(items[index], 'onClick')) items[index].onClick(e, itemProps)
    if (onItemClick) onItemClick(e, itemProps)
  }

  renderItems() {
    const { items } = this.props
    const { activeIndex } = this.state

    return _.map(items, (item, index) => MenuItem.create(item, {
      active: activeIndex === index,
      index,
      onClick: this.handleItemClick,
    }))
  }

  render() {
    const {
      attached, borderless, children, className, color, compact, fixed, floated, fluid, icon, inverted, pagination,
      pointing, secondary, stackable, tabular, text, vertical, size, widths,
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
      useKeyOrValueAndKey(floated, 'floated'),
      useKeyOnly(fluid, 'fluid'),
      useKeyOrValueAndKey(icon, 'icon'),
      useKeyOnly(inverted, 'inverted'),
      useKeyOnly(pagination, 'pagination'),
      useKeyOnly(pointing, 'pointing'),
      useKeyOnly(secondary, 'secondary'),
      useKeyOnly(stackable, 'stackable'),
      useKeyOrValueAndKey(tabular, 'tabular'),
      useKeyOnly(text, 'text'),
      useKeyOnly(vertical, 'vertical'),
      className,
      'menu'
    )
    const rest = getUnhandledProps(Menu, this.props)
    const ElementType = getElementType(Menu, this.props)

    return <ElementType {...rest} className={classes}>{_.isNil(children) ? this.renderItems() : children}</ElementType>
  }
}

export default Menu
