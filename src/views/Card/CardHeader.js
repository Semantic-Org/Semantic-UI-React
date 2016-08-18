import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'

function CardHeader(props) {
  const { className, children, content } = props
  const classes = cx(className, 'header')
  const rest = getUnhandledProps(CardHeader, props)

  return <div {...rest} className={classes}>{children || content}</div>
}

CardHeader._meta = {
  name: 'CardHeader',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardHeader.propTypes = {
  /** Primary content of the CardHeader. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the CardHeader className */
  className: PropTypes.string,

  /** Primary content of the CardHeader. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

export default CardHeader
