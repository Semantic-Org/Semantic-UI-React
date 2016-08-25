import React, { PropTypes } from 'react'
import cx from 'classnames'
import { getElementType, getUnhandledProps, META } from '../../lib'

function ItemGroup(props) {
  const { className, children } = props
  const classes = cx('ui', className, 'items')
  const rest = getUnhandledProps(ItemGroup, props)
  const ElementType = getElementType(ItemGroup, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

ItemGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  children: PropTypes.node,
  className: PropTypes.string,
}

ItemGroup._meta = {
  name: 'ItemGroup',
  type: META.TYPES.VIEW,
  parent: 'Item',
}

export default ItemGroup
