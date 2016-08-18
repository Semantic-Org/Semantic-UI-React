import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
} from '../../lib'
import { createImage } from '../../factories'
import CardContent from './CardContent'
import CardDescription from './CardDescription'
import CardGroup from './CardGroup'
import CardHeader from './CardHeader'
import CardMeta from './CardMeta'

function Card(props) {
  const {
    centered,
    children,
    className,
    color,
    description,
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
  const CardComponent = href || onClick ? 'a' : 'div'

  return (
    <CardComponent
      {...rest}
      className={classes}
      href={href}
      onClick={handleClick}
    >
      {createImage(image)}
      {children || <CardContent description={description} header={header} meta={meta} />}
    </CardComponent>
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
  /** A Card can center itself inside its container. */
  centered: PropTypes.bool,

  /** Primary content of the Card. */
  children: customPropTypes.every([
    customPropTypes.disallow(['description', 'header', 'image', 'meta']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the Card className. */
  className: PropTypes.string,

  /** A Card can be formatted to display different colors. */
  color: PropTypes.oneOf(Card._meta.props.color),

  /** Shorthand prop for CardDescription. Mutually exclusive with children. */
  description: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),

  /** A Card can be formatted to take up the width of its container. */
  fluid: PropTypes.bool,

  /** Shorthand prop for CardHeader. Mutually exclusive with children. */
  header: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: PropTypes.string,

  /** An card can contain image. */
  image: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),

  /** Shorthand prop for CardMeta. Mutually exclusive with children. */
  meta: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),

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
