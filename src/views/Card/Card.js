import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
} from '../../lib'
import { Image } from '../../elements'
import CardContent from './CardContent'
import CardDescription from './CardDescription'
import CardGroup from './CardGroup'
import CardHeader from './CardHeader'
import CardMeta from './CardMeta'

/**
 * A card displays site content in a manner similar to a playing card
 */
function Card(props) {
  const {
    centered,
    children,
    className,
    color,
    description,
    extra,
    fluid,
    header,
    href,
    image,
    meta,
    onClick,
    raised,
  } = props

  const classes = cx('ui',
    useKeyOnly(centered, 'centered'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(raised, 'raised'),
    color,
    'card',
    className,
  )
  const rest = getUnhandledProps(Card, props)

  const handleClick = (e) => {
    if (onClick) onClick(e)
  }
  const ElementType = getElementType(Card, props, () => {
    if (onClick) return 'a'
  })

  if (children) {
    return (
      <ElementType {...rest} className={classes} href={href} onClick={handleClick}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} href={href} onClick={handleClick}>
      {Image.create(image)}
      {(description || header || meta) && (
        <CardContent description={description} header={header} meta={meta} />
      )}
      {extra && <CardContent extra>{extra}</CardContent>}
    </ElementType>
  )
}

Card._meta = {
  name: 'Card',
  type: META.TYPES.VIEW,
  props: {
    color: SUI.COLORS,
  },
}

Card.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A Card can center itself inside its container. */
  centered: PropTypes.bool,

  /** Primary content of the Card. Mutually exclusive with all shorthand props. */
  children: customPropTypes.every([
    customPropTypes.disallow(['description', 'header', 'image', 'meta']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the Card className. */
  className: PropTypes.string,

  /** A Card can be formatted to display different colors. */
  color: PropTypes.oneOf(Card._meta.props.color),

  /** Shorthand prop for the CardDescription component. Mutually exclusive with children. */
  description: CardContent.propTypes.description,

  /** Shorthand prop for the CardContent component containing extra prop. Mutually exclusive with children. */
  extra: PropTypes.shorthand,

  /** A Card can be formatted to take up the width of its container. */
  fluid: PropTypes.bool,

  /** Shorthand prop for the CardHeader component. Mutually exclusive with children. */
  header: CardContent.propTypes.header,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** A card can contain an Image component. Mutually exclusive with children. */
  image: customPropTypes.image,

  /** Shorthand prop for the CardMeta component. Mutually exclusive with children. */
  meta: CardContent.propTypes.meta,

  /** Render as an `a` tag instead of a `div` and called with event on Card click. */
  onClick: PropTypes.func,

  /** A Card can be formatted to raise above the page. */
  raised: PropTypes.bool,
}

Card.Content = CardContent
Card.Description = CardDescription
Card.Group = CardGroup
Card.Header = CardHeader
Card.Meta = CardMeta

export default Card
