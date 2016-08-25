import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  getElementType,
  META,
} from '../../lib'
import { createIcon } from '../../factories'

/**
 * A divider sub-component for Breadcrumb component.
 */
function BreadcrumbDivider(props) {
  const { children, icon, className } = props
  const rest = getUnhandledProps(BreadcrumbDivider, props)
  const classes = cx(className, 'divider')
  const ElementType = getElementType(BreadcrumbDivider, props)

  if (icon) return createIcon(icon, { ...rest, className: classes })

  return <ElementType {...rest} className={classes}>{children || '/'}</ElementType>
}

BreadcrumbDivider._meta = {
  name: 'BreadcrumbDivider',
  type: META.TYPES.COLLECTION,
  parent: 'Breadcrumb',
}

BreadcrumbDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the Breadcrumb.Divider. */
  children: customPropTypes.every([
    customPropTypes.disallow(['icon']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the BreadcrumbDivider className. */
  className: PropTypes.string,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),
}

export default BreadcrumbDivider
