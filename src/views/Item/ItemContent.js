import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useVerticalAlignProp,
} from '../../lib'
import ItemHeader from './ItemHeader'
import ItemDescription from './ItemDescription'
import ItemExtra from './ItemExtra'
import ItemMeta from './ItemMeta'

/**
 * An item can contain content
 * */
function ItemContent(props) {
  const { children, className, content, description, extra, header, meta, verticalAlign } = props
  const classes = cx(
    className,
    useVerticalAlignProp(verticalAlign),
    'content',
  )

  const rest = getUnhandledProps(ItemContent, props)
  const ElementType = getElementType(ItemContent, props)

  return (
    <ElementType {...rest} className={classes}>
      {createShorthand(ItemHeader, val => ({ content: val }), header)}
      {createShorthand(ItemMeta, val => ({ content: val }), meta)}
      {createShorthand(ItemDescription, val => ({ content: val }), description)}
      {createShorthand(ItemExtra, val => ({ content: val }), extra)}
      {children || content}
    </ElementType>
  )
}

ItemContent._meta = {
  name: 'ItemContent',
  parent: 'Item',
  type: META.TYPES.VIEW,
  props: {
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
  },
}

ItemContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the ItemContent. Mutually exclusive with all shorthand props. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'description', 'extra', 'header', 'meta']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the ItemContent className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the ItemContent. Mutually exclusive with the children. */
  content: customPropTypes.shorthand,

  /** Shorthand for of the ItemDescription. Mutually exclusive with the children. */
  description: ItemDescription.propTypes.content,

  /** Shorthand for ItemExtra component. Mutually exclusive with the children. */
  extra: ItemExtra.propTypes.content,

  /** Shorthand for ItemHeader component. Mutually exclusive with the children. */
  header: ItemHeader.propTypes.content,

  /** Shorthand for the ItemMeta component. Mutually exclusive with the children. */
  meta: ItemMeta.propTypes.content,

  /** Content can specify its vertical alignment. */
  verticalAlign: PropTypes.oneOf(ItemContent._meta.props.verticalAlign),
}

export default ItemContent
