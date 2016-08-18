import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import CardDescription from './CardDescription'
import CardHeader from './CardHeader'
import CardMeta from './CardMeta'

function CardContent(props) {
  const { className, children, description, extra, header, meta } = props
  const classes = cx(
    className,
    useKeyOnly(extra, 'extra'),
    'content',
  )
  const rest = getUnhandledProps(CardContent, props)

  if (children) {
    return <div {...rest} className={classes}>{children}</div>
  }

  return (
    <div {...rest} className={classes}>
      {header && <CardHeader content={header} />}
      {meta && <CardMeta content={meta} />}
      {description && <CardDescription content={description} />}
    </div>
  )
}

CardContent._meta = {
  name: 'CardContent',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardContent.propTypes = {
  /** Primary content of the CardContent. Mutually exclusive with all shorthand props. */
  children: customPropTypes.every([
    customPropTypes.disallow(['description', 'header', 'meta']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the CardContent className */
  className: PropTypes.string,

  /** Shorthand prop for CardDescription. Mutually exclusive with children. */
  description: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),

  /** A card can contain extra content meant to be formatted separately from the main content */
  extra: PropTypes.bool,

  /** Shorthand prop for CardHeader. Mutually exclusive with children. */
  header: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),

  /** Shorthand prop for CardMeta. Mutually exclusive with children. */
  meta: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

export default CardContent
