import _ from 'lodash'
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
 */
function ItemContent(props) {
  const { children, className, content, description, extra, header, meta, verticalAlign } = props
  const classes = cx(
    className,
    useVerticalAlignProp(verticalAlign),
    'content',
  )
  const rest = getUnhandledProps(ItemContent, props)
  const ElementType = getElementType(ItemContent, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {createShorthand(ItemHeader, val => ({ content: val }), header)}
      {createShorthand(ItemMeta, val => ({ content: val }), meta)}
      {createShorthand(ItemDescription, val => ({ content: val }), description)}
      {createShorthand(ItemExtra, val => ({ content: val }), extra)}
      {content}
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

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for ItemDescription component. */
  description: customPropTypes.itemShorthand,

  /** Shorthand for ItemExtra component. */
  extra: customPropTypes.itemShorthand,

  /** Shorthand for ItemHeader component. */
  header: customPropTypes.itemShorthand,

  /** Shorthand for ItemMeta component. */
  meta: customPropTypes.itemShorthand,

  /** Content can specify its vertical alignment */
  verticalAlign: PropTypes.oneOf(ItemContent._meta.props.verticalAlign),
}

export default ItemContent
