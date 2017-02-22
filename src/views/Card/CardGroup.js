import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useWidthProp,
} from '../../lib'
import Card from './Card'

/**
 * A group of cards.
 */
function CardGroup(props) {
  const {
    children,
    className,
    doubling,
    items,
    itemsPerRow,
    stackable,
  } = props

  const classes = cx('ui',
    useKeyOnly(doubling, 'doubling'),
    useKeyOnly(stackable, 'stackable'),
    useWidthProp(itemsPerRow),
    className,
    'cards',
  )
  const rest = getUnhandledProps(CardGroup, props)
  const ElementType = getElementType(CardGroup, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const content = _.map(items, item => {
    const key = item.key || [item.header, item.description].join('-')
    return <Card key={key} {...item} />
  })

  return <ElementType {...rest} className={classes}>{content}</ElementType>
}

CardGroup._meta = {
  name: 'CardGroup',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A group of cards can double its column width for mobile. */
  doubling: PropTypes.bool,

  /** Shorthand array of props for Card. */
  items: customPropTypes.collectionShorthand,

  /** A group of cards can set how many cards should exist in a row. */
  itemsPerRow: PropTypes.oneOf(SUI.WIDTHS),

  /** A group of cards can automatically stack rows to a single columns on mobile devices. */
  stackable: PropTypes.bool,
}

export default CardGroup
