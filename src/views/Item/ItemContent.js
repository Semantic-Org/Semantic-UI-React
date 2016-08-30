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

  /** Primary content of the ItemContent. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the ItemContent className. */
  className: PropTypes.string,

  /** Primary content of the ItemContent. Mutually exclusive with the children prop. */
  content: customPropTypes.shorthand,

  /** Shorthand for of the ItemDescription. Mutually exclusive with the children prop. */
  description: customPropTypes.shorthand,

  /** Shorthand for ItemExtra component. Mutually exclusive with the children prop. */
  extra: customPropTypes.shorthand,

  /** Shorthand for ItemHeader component. Mutually exclusive with the children prop. */
  header: customPropTypes.shorthand,

  /** Shorthand for ItemMeta component. Mutually exclusive with the children prop. */
  meta: customPropTypes.shorthand,

  /** Content can specify its vertical alignment */
  verticalAlign: PropTypes.oneOf(ItemContent._meta.props.verticalAlign),
}

export default ItemContent
