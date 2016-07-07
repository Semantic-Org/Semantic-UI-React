import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'
import { customPropTypes } from '../../utils/propUtils'
import Icon from 'src/elements/Icon/Icon'

/**
 * A divider sub-component for Breadcrumb component.
 */
function BreadcrumbDivider(props) {
  const {
    children, icon, className, ...rest,
  } = props

  const classes = cx(
    className,
    'divider',
  )

  if (icon) {
    return <Icon className={classes} name={icon} {...rest} />
  }

  return <div className={classes} {...rest}>{children}</div>
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

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.string,
  ]),

  /** Additional classes added to the element. */
  className: PropTypes.string,
}

export default BreadcrumbDivider
