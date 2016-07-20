import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, iconPropRenderer, getUnhandledProps } from '../../utils/propUtils'

/**
 * A divider sub-component for Breadcrumb component.
 */
function BreadcrumbDivider(props) {
  const {
    children, icon, className,
  } = props
  const classes = cx(
    className,
    'divider',
  )
  const rest = getUnhandledProps(BreadcrumbDivider, props)

  if (icon) {
    return iconPropRenderer(icon, { ...rest, className: classes })
  }

  return <div {...rest} className={classes}>{children}</div>
}

BreadcrumbDivider._meta = {
  library: META.library.semanticUI,
  name: 'BreadcrumbDivider',
  type: META.type.collection,
  parent: 'Breadcrumb',
}

BreadcrumbDivider.defaultProps = {
  children: '/',
}

BreadcrumbDivider.propTypes = {
  /** Primary content of the Breadcrumb.Divider. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['icon']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the BreadcrumbDivider className. */
  className: PropTypes.string,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default BreadcrumbDivider
