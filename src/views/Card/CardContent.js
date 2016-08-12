import React, { PropTypes } from 'react'
import cx from 'classnames'

import META from '../../utils/Meta'
import { customPropTypes, useKeyOnly } from '../../utils/propUtils'
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
      {header && <CardHeader header={header} />}
      {meta && <CardMeta meta={meta} />}
      {description && <CardDescription description={description} />}
    </div>
  )
}

CardContent._meta = {
  name: 'CardContent',
  parent: 'Card',
  type: META.type.view,
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description', 'header', 'meta']),
    PropTypes.node,
  ]),
  description: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
  extra: PropTypes.bool,
  header: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
  meta: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default CardContent
