import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * Context which sticky element should stick to.
 */
function StickyContext(props) {
  const { children, className } = props
  const classes = cx('ui context', className)
  const rest = getUnhandledProps(StickyContext, props)
  const ElementType = getElementType(StickyContext, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

StickyContext._meta = {
  name: 'StickyContext',
  type: META.TYPES.MODULE,
  parent: 'Sticky',
}

StickyContext.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default StickyContext
