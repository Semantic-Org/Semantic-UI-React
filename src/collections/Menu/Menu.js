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
    icon: ['labeled'],
    fixed: ['bottom', 'top'],
    size: _.without(SUI.SIZES, 'medium', 'big'),
    tabular: ['right'],
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

    /** Primary content of the Menu. Mutually exclusive with items. */
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

    /** Shorthand array of props for Menu. Mutually exclusive with children. */
    items: customPropTypes.every([
      customPropTypes.disallow(['children']),
      PropTypes.arrayOf(PropTypes.shape({
        childKey: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
        // this object is spread on the MenuItem
        // allow it to validate props instead
      })),
    ]),

    /** onClick handler for MenuItem. Mutually exclusive with children. */
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

  componentWillMount() {
    super.componentWillMount()

    const { items } = this.props
    if (items) this.trySetState({ activeIndex: _.findIndex(items, ['active', true]) })
  }

  handleItemClick = (e, { name, index }) => {
    this.trySetState({ activeIndex: index })
    const { items, onItemClick } = this.props

    if (_.get(items[index], 'onClick')) items[index].onClick(e, { name, index })
    if (onItemClick) onItemClick(e, { name, index })
  }

  renderItems() {
    const { items } = this.props
    const { activeIndex } = this.state

    return _.map(items, (item, index) => {
      const { content, childKey, name, itemProps } = item
      const finalKey = childKey || [content, name].join('-')

      return (
        <MenuItem
          {...itemProps}
          active={activeIndex === index}
          content={content}
          index={index}
          key={finalKey}
          name={name}
          onClick={this.handleItemClick}
        />
      )
    })
  }

  render() {
    const {
      attached, borderless, className, children, color, compact, fixed, fluid, icon, inverted, pagination, pointing,
      secondary, stackable, tabular, text, vertical, size, widths,
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

    return <ElementType {...rest} className={classes}>{children || this.renderItems()}</ElementType>
  }
}

export default Menu
