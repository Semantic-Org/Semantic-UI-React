import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
} from '../../lib'

/**
 * An item can contain a header.
 */
const ItemHeader = React.forwardRef(function (props, ref) {
  const { children, className, content } = props
  const classes = cx('header', className)
  const rest = getUnhandledProps(ItemHeader, props)
  const ElementType = getElementType(ItemHeader, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

ItemHeader.displayName = 'ItemHeader'
ItemHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

ItemHeader.create = createShorthandFactory(ItemHeader, (content) => ({ content }))

export default ItemHeader
