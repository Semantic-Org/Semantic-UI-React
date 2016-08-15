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
    width: SUI.WIDTHS,
  },
  type: META.TYPES.VIEW,
}

CardGroup.propTypes = {
  className: PropTypes.string,
  children: customPropTypes.every([
    customPropTypes.disallow(['items']),
    PropTypes.node,
  ]),
  doubling: PropTypes.bool,
  items: customPropTypes.every([
    customPropTypes.disallow(['description', 'title']),
    PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.node,
      meta: PropTypes.node,
      key: PropTypes.string,
      header: PropTypes.node,
    })),
  ]),
  itemsPerRow: PropTypes.oneOf(CardGroup._meta.props.width),
  stackable: PropTypes.bool,
  width: PropTypes.oneOf(CardGroup._meta.props.width),
}

export default CardGroup
