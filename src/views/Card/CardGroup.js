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
  const { className, children, doubling, items, itemsPerRow, stackable } = props
  const classes = cx('ui',
    useWidthProp(itemsPerRow),
    useKeyOnly(doubling, 'doubling'),
    useKeyOnly(stackable, 'stackable'),
    className,
    'cards',
  )
  const rest = getUnhandledProps(CardGroup, props)
  const ElementType = getElementType(CardGroup, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const itemsJSX = _.map(items, item => {
    const { childKey, itemProps } = item
    const finalKey = childKey || [itemProps.header, itemProps.description].join('-')

    return <Card {...itemProps} key={finalKey} />
  })

  return <ElementType {...rest} className={classes}>{itemsJSX}</ElementType>
}

CardGroup._meta = {
  name: 'CardGroup',
  parent: 'Card',
  props: {
    itemsPerRow: SUI.WIDTHS,
  },
  type: META.TYPES.VIEW,
}

CardGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A group of Card components. Mutually exclusive with items. */
  children: customPropTypes.every([
    customPropTypes.disallow(['items']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the CardGroup className */
  className: PropTypes.string,

  /** A group of cards can double its column width for mobile */
  doubling: PropTypes.bool,

  /** Shorthand prop for children. Mutually exclusive with children. */
  items: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.arrayOf(PropTypes.shape({
      childKey: PropTypes.childKey,
      // do not spread Card propTypes here
      // it will be undefined due to circular imports
      // allow the Card to validate the props it is sent
    })),
  ]),

  /** A group of cards can set how many cards should exist in a row */
  itemsPerRow: PropTypes.oneOf(CardGroup._meta.props.itemsPerRow),

  /** A group of cards can automatically stack rows to a single columns on mobile devices */
  stackable: PropTypes.bool,
}

export default CardGroup
