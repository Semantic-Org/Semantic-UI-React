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
  /** Primary content of the CardMeta. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the CardMeta className */
  className: PropTypes.string,

  /** Primary content of the CardMeta. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

export default CardMeta
