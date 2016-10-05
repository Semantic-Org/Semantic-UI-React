import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  getElementType,
  META,
} from '../../lib'
import Icon from '../../elements/Icon'

/**
 * A divider sub-component for Breadcrumb component.
 */
function BreadcrumbDivider(props) {
  const { children, icon, className } = props
  const classes = cx(className, 'divider')
  const rest = getUnhandledProps(BreadcrumbDivider, props)
  const ElementType = getElementType(BreadcrumbDivider, props)

  if (icon) return Icon.create(icon, { ...rest, className: classes })

  return <ElementType {...rest} className={classes}>{children || '/'}</ElementType>
}

BreadcrumbDivider._meta = {
  name: 'BreadcrumbDivider',
  type: META.TYPES.COLLECTION,
  parent: 'Breadcrumb',
}

BreadcrumbDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: customPropTypes.itemShorthand,
}

export default BreadcrumbDivider
