import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import Item from './Item'

/**
 * A group of items
 * */
function ItemGroup(props) {
  const { className, children, divided, items, link, relaxed } = props
  const classes = cx(
    'ui',
    className,
    useKeyOnly(divided, 'divided'),
    useKeyOnly(link, 'link'),
    useKeyOrValueAndKey(relaxed, 'relaxed'),
    'items'
  )

  const rest = getUnhandledProps(ItemGroup, props)
  const ElementType = getElementType(ItemGroup, props)

  if (!items) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const itemsJSX = _.map(items, item => {
    const { childKey, ...itemProps } = item
    const finalKey = childKey || [itemProps.content, itemProps.description, itemProps.header, itemProps.meta].join('-')

    return <Item {...itemProps} key={finalKey} />
  })

  return <ElementType {...rest} className={classes}>{itemsJSX}</ElementType>
}

ItemGroup._meta = {
  name: 'ItemGroup',
  type: META.TYPES.VIEW,
  parent: 'Item',
  props: {
    relaxed: ['very'],
  },
}

ItemGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the ItemGroup. */
  children: PropTypes.node,

  /** Classes that will be added to the ItemGroup className. */
  className: PropTypes.string,

  /** Items can be divided to better distinguish between grouped content. */
  divided: PropTypes.bool,

  /** Array of props for Item. */
  items: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.arrayOf(PropTypes.shape({
      childKey: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      // this object is spread on the Item
      // allow it to validate props instead
    })),
  ]),

  /** An item can be formatted so that the entire contents link to another page. */
  link: PropTypes.bool,

  /** A group of items can relax its padding to provide more negative space. */
  relaxed: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(ItemGroup._meta.props.relaxed),
  ]),
}

export default ItemGroup
