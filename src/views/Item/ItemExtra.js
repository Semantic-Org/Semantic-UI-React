import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * An item can contain extra content meant to be formatted separately from the main content.
 */
function ItemExtra(props) {
  const { children, className, content } = props
  const classes = cx('extra', className)
  const rest = getUnhandledProps(ItemExtra, props)
  const ElementType = getElementType(ItemExtra, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? content : children}
    </ElementType>
  )
}

ItemExtra._meta = {
  name: 'ItemExtra',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemExtra.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

ItemExtra.create = createShorthandFactory(ItemExtra, content => ({ content }))

export default ItemExtra
