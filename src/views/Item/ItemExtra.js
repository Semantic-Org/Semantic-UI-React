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
 * An item can contain extra content meant to be formatted separately from the main content.
 */
const ItemExtra = React.forwardRef(function (props, ref) {
  const { children, className, content } = props

  const classes = cx('extra', className)
  const rest = getUnhandledProps(ItemExtra, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

ItemExtra.displayName = 'ItemExtra'
ItemExtra.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

ItemExtra.create = createShorthandFactory(ItemExtra, (content) => ({ content }))

export default ItemExtra
