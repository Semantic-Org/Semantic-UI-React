import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import * as sui from '../../utils/semanticUtils'
import { useKeyOnly } from '../../utils/propUtils'
import CardContent from './CardContent'
import CardDescription from './CardDescription'
import CardHeader from './CardHeader'
import CardMeta from './CardMeta'

function Card(props) {
  const {
    centered,
    children,
    className,
    color,
    fluid,
    href,
    onClick,
    raised,
    ...rest,
  } = props

  const classes = cx('ui',
    useKeyOnly(centered, 'centered'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(raised, 'raised'),
    color,
    'card',
    className,
  )

  const handleClick = (e) => {
    if (onClick) onClick(e)
  }
  const CardComponent = href || onClick ? 'a' : 'div'

  return (
    <CardComponent
      {...rest}
      className={classes}
      href={href}
      onClick={handleClick}
    >
      {children}
    </CardComponent>
  )
}

Card._meta = {
  name: 'Card',
  type: META.type.view,
  props: {
    color: sui.colors,
  },
}

Card.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Card._meta.props.color),
  fluid: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  raised: PropTypes.bool,
}

Card.Content = CardContent
Card.Description = CardDescription
Card.Header = CardHeader
Card.Meta = CardMeta

export default Card
