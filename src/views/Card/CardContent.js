import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  META,
  useKeyOnly,
} from '../../lib'
import CardDescription from './CardDescription'
import CardHeader from './CardHeader'
import CardMeta from './CardMeta'

function CardContent(props) {
  const { className, children, description, extra, header, meta, ...rest } = props
  const classes = cx(
    className,
    useKeyOnly(extra, 'extra'),
    'content',
  )

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
  className: PropTypes.string,
  children: customPropTypes.every([
    customPropTypes.disallow(['description', 'header', 'meta']),
    PropTypes.node,
  ]),
  description: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
  extra: PropTypes.bool,
  header: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
  meta: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

export default CardContent
