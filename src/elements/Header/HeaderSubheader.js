import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function HeaderSubheader(props) {
  const { children, className, content } = props
  const classes = cx('sub header', className)
  const rest = getUnhandledProps(HeaderSubheader, props)
  const ElementType = getElementType(HeaderSubheader, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

HeaderSubheader._meta = {
  name: 'HeaderSubheader',
  parent: 'Header',
  type: META.TYPES.ELEMENT,
}

HeaderSubheader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

HeaderSubheader.create = createShorthandFactory(HeaderSubheader, content => ({ content }))

export default HeaderSubheader
