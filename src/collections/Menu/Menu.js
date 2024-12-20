import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  customPropTypes,
  createShorthandFactory,
  getComponentType,
  getUnhandledProps,
  SUI,
  getKeyOnly,
  getKeyOrValueAndKey,
  getValueAndKey,
  getWidthProp,
  useAutoControlledValue,
} from '../../lib'
import MenuHeader from './MenuHeader'
import MenuItem from './MenuItem'
import MenuMenu from './MenuMenu'

/**
 * A menu displays grouped navigation actions.
 * @see Dropdown
 */
const Menu = React.forwardRef(function (props, ref) {
  const {
    attached,
    borderless,
    children,
    className,
    color,
    compact,
    fixed,
    floated,
    fluid,
    icon,
    inverted,
    items,
    pagination,
    pointing,
    secondary,
    size,
    stackable,
    tabular,
    text,
    vertical,
    widths,
  } = props
  const [activeIndex, setActiveIndex] = useAutoControlledValue({
    state: props.activeIndex,
    defaultState: props.defaultActiveIndex,
    initialState: -1,
  })

  const classes = cx(
    'ui',
    color,
    size,
    getKeyOnly(borderless, 'borderless'),
    getKeyOnly(compact, 'compact'),
    getKeyOnly(fluid, 'fluid'),
    getKeyOnly(inverted, 'inverted'),
    getKeyOnly(pagination, 'pagination'),
    getKeyOnly(pointing, 'pointing'),
    getKeyOnly(secondary, 'secondary'),
    getKeyOnly(stackable, 'stackable'),
    getKeyOnly(text, 'text'),
    getKeyOnly(vertical, 'vertical'),
    getKeyOrValueAndKey(attached, 'attached'),
    getKeyOrValueAndKey(floated, 'floated'),
    getKeyOrValueAndKey(icon, 'icon'),
    getKeyOrValueAndKey(tabular, 'tabular'),
    getValueAndKey(fixed, 'fixed'),
    getWidthProp(widths, 'item'),
    className,
    'menu',
  )
  const rest = getUnhandledProps(Menu, props)
  const ElementType = getComponentType(props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {_.map(items, (item, index) =>
        MenuItem.create(item, {
          defaultProps: {
            active: parseInt(activeIndex, 10) === index,
            index,
          },
          overrideProps: (predefinedProps) => ({
            onClick: (e, itemProps) => {
              const itemIndex = itemProps.index

              setActiveIndex(itemIndex)

              _.invoke(predefinedProps, 'onClick', e, itemProps)
              _.invoke(props, 'onItemClick', e, itemProps)
            },
          }),
        }),
      )}
    </ElementType>
  )
})

Menu.displayName = 'Menu'
Menu.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Index of the currently active item. */
  activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A menu may be attached to other content segments. */
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top', 'bottom'])]),

  /** A menu item or menu can have no borders. */
  borderless: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Additional colors can be specified. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** A menu can take up only the space necessary to fit its content. */
  compact: PropTypes.bool,

  /** Initial activeIndex value. */
  defaultActiveIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A menu can be fixed to a side of its context. */
  fixed: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),

  /** A menu can be floated. */
  floated: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['right'])]),

  /** A vertical menu may take the size of its container. */
  fluid: PropTypes.bool,

  /** A menu may have just icons (bool) or labeled icons. */
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['labeled'])]),

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
  onItemClick: customPropTypes.every([customPropTypes.disallow(['children']), PropTypes.func]),

  /** A pagination menu is specially formatted to present links to pages of content. */
  pagination: PropTypes.bool,

  /** A menu can point to show its relationship to nearby content. */
  pointing: PropTypes.bool,

  /** A menu can adjust its appearance to de-emphasize its contents. */
  secondary: PropTypes.bool,

  /** A menu can vary in size. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium', 'big')),

  /** A menu can stack at mobile resolutions. */
  stackable: PropTypes.bool,

  /** A menu can be formatted to show tabs of information. */
  tabular: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['right'])]),

  /** A menu can be formatted for text content. */
  text: PropTypes.bool,

  /** A vertical menu displays elements vertically. */
  vertical: PropTypes.bool,

  /** A menu can have its items divided evenly. */
  widths: PropTypes.oneOf(SUI.WIDTHS),
}

Menu.Header = MenuHeader
Menu.Item = MenuItem
Menu.Menu = MenuMenu

Menu.create = createShorthandFactory(Menu, (items) => ({ items }))

export default Menu
