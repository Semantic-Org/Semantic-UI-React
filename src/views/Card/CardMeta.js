import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'

function CardMeta(props) {
  const { className, children, content } = props
  const classes = cx(className, 'meta')
  const rest = getUnhandledProps(CardMeta, props)

  return <div {...rest} className={classes}>{children || content}</div>
}

CardMeta._meta = {
  name: 'CardMeta',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardMeta.propTypes = {
  className: PropTypes.string,
  children: customPropTypes.every([
    customPropTypes.disallow(['meta']),
    PropTypes.node,
  ]),
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

export default CardMeta
