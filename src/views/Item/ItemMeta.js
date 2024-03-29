import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
} from '../../lib'

/**
 * An item can contain content metadata.
 */
const ItemMeta = React.forwardRef(function (props, ref) {
  const { children, className, content } = props

  const classes = cx('meta', className)
  const rest = getUnhandledProps(ItemMeta, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

ItemMeta.displayName = 'ItemMeta'
ItemMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

ItemMeta.create = createShorthandFactory(ItemMeta, (content) => ({ content }))

export default ItemMeta
