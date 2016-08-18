import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  numberToWord,
  SUI,
  useKeyOnly,
} from '../../lib'
import Card from './Card'

function CardGroup(props) {
  const { className, children, doubling, items, itemsPerRow, stackable } = props
  const classes = cx('ui',
    numberToWord(itemsPerRow),
    useKeyOnly(doubling, 'doubling'),
    useKeyOnly(stackable, 'stackable'),
    className,
    'cards',
  )
  const rest = getUnhandledProps(CardGroup, props)

  const content = !items ? children : items.map(item => {
    const key = item.key || [item.header, item.description].join('-')
    return <Card key={key} {...item} />
  })

  return <div {...rest} className={classes}>{content}</div>
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
      description: PropTypes.node,
      meta: PropTypes.node,
      key: PropTypes.string,
      header: PropTypes.node,
    })),
  ]),

  /** A group of cards can set how many cards should exist in a row */
  itemsPerRow: PropTypes.oneOf(CardGroup._meta.props.itemsPerRow),

  /** A group of cards can automatically stack rows to a single columns on mobile devices */
  stackable: PropTypes.bool,
}

export default CardGroup
