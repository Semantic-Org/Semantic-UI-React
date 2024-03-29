import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getUnhandledProps,
  getComponentType,
} from '../../lib'
import Icon from '../../elements/Icon'

/**
 * A divider sub-component for Breadcrumb component.
 */
const BreadcrumbDivider = React.forwardRef(function (props, ref) {
  const { children, className, content, icon } = props

  const classes = cx('divider', className)
  const rest = getUnhandledProps(BreadcrumbDivider, props)
  const ElementType = getComponentType(props)

  if (!_.isNil(icon)) {
    return Icon.create(icon, {
      defaultProps: { ...rest, className: classes },
      autoGenerateKey: false,
      ref,
    })
  }

  if (!_.isNil(content)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {content}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? '/' : children}
    </ElementType>
  )
})

BreadcrumbDivider.displayName = 'BreadcrumbDivider'
BreadcrumbDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Render as an `Icon` component with `divider` class instead of a `div`. */
  icon: customPropTypes.itemShorthand,
}

BreadcrumbDivider.create = createShorthandFactory(BreadcrumbDivider, (icon) => ({ icon }))

export default BreadcrumbDivider
