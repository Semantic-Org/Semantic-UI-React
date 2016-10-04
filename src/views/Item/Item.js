import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import ItemContent from './ItemContent'
import ItemDescription from './ItemDescription'
import ItemExtra from './ItemExtra'
import ItemGroup from './ItemGroup'
import ItemHeader from './ItemHeader'
import ItemImage from './ItemImage'
import ItemMeta from './ItemMeta'

/**
 * An item view presents large collections of site content for display
 * */
function Item(props) {
  const { children, className, content, description, extra, header, image, meta } = props
  const classes = cx(className, 'item')
  const rest = getUnhandledProps(Item, props)
  const ElementType = getElementType(Item, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {createShorthand(ItemImage, val => ({ src: val }), image)}

      <ItemContent
        content={content}
        description={description}
        extra={extra}
        header={header}
        meta={meta}
      />
    </ElementType>
  )
}

Item._meta = {
  name: 'Item',
  type: META.TYPES.VIEW,
}

Item.Content = ItemContent
Item.Description = ItemDescription
Item.Extra = ItemExtra
Item.Group = ItemGroup
Item.Header = ItemHeader
Item.Image = ItemImage
Item.Meta = ItemMeta

Item.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the Item. Mutually exclusive with all shorthand props. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'description', 'extra', 'image', 'header', 'meta']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the Item className. */
  className: PropTypes.string,

  /** Shorthand for ItemContent component. Mutually exclusive with content. */
  content: ItemContent.propTypes.content,

  /** Shorthand for ItemDescription component. Mutually exclusive with content. */
  description: ItemContent.propTypes.description,

  /** Shorthand for ItemExtra component. Mutually exclusive with content. */
  extra: ItemContent.propTypes.extra,

  /** Shorthand for ItemImage component. Mutually exclusive with content. */
  image: customPropTypes.image,

  /** Shorthand for ItemHeader component. Mutually exclusive with content. */
  header: ItemContent.propTypes.header,

  /** Shorthand for ItemMeta component. Mutually exclusive with content. */
  meta: ItemContent.propTypes.meta,
}

export default Item
