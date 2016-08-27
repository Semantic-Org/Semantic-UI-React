import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

import ItemDescription from './ItemDescription'
import ItemGroup from './ItemGroup'
import ItemImage from './ItemImage'

function Item(props) {
  const { children, className, image } = props
  const classes = cx(className, 'item')
  const rest = getUnhandledProps(Item, props)
  const ElementType = getElementType(Item, props)

  return (
    <ElementType {...rest} className={classes}>
      {image && <ItemImage src={image} />}
      {children}
    </ElementType>
  )
}

Item._meta = {
  name: 'Item',
  type: META.TYPES.VIEW,
}

Item.Description = ItemDescription
Item.Group = ItemGroup
Item.Image = ItemImage

Item.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the Item. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the Item className. */
  className: PropTypes.string,

  /** Shorthand for ItemImage component. */
  image: PropTypes.string,
}

export default Item
