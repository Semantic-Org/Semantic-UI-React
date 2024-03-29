import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import * as React from 'react'

import { childrenUtils, customPropTypes, getUnhandledProps, getComponentType, SUI } from '../../lib'
import BreadcrumbDivider from './BreadcrumbDivider'
import BreadcrumbSection from './BreadcrumbSection'

/**
 * A breadcrumb is used to show hierarchy between content.
 */
const Breadcrumb = React.forwardRef(function (props, ref) {
  const { children, className, divider, icon, sections, size } = props

  const classes = cx('ui', size, 'breadcrumb', className)
  const rest = getUnhandledProps(Breadcrumb, props)
  const ElementType = getComponentType(props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {children}
      </ElementType>
    )
  }

  const childElements = []

  _.each(sections, (section, index) => {
    // section
    const breadcrumbElement = BreadcrumbSection.create(section)
    childElements.push(breadcrumbElement)

    // divider
    if (index !== sections.length - 1) {
      const key = `${breadcrumbElement.key}_divider` || JSON.stringify(section)
      childElements.push(BreadcrumbDivider.create({ content: divider, icon, key }))
    }
  })

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childElements}
    </ElementType>
  )
})

Breadcrumb.displayName = 'Breadcrumb'
Breadcrumb.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content of the Breadcrumb.Divider. */
  divider: customPropTypes.every([
    customPropTypes.disallow(['icon']),
    customPropTypes.contentShorthand,
  ]),

  /** For use with the sections prop. Render as an `Icon` component with `divider` class instead of a `div` in
   *  Breadcrumb.Divider. */
  icon: customPropTypes.every([
    customPropTypes.disallow(['divider']),
    customPropTypes.itemShorthand,
  ]),

  /** Shorthand array of props for Breadcrumb.Section. */
  sections: customPropTypes.collectionShorthand,

  /** Size of Breadcrumb. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium')),
}

Breadcrumb.Divider = BreadcrumbDivider
Breadcrumb.Section = BreadcrumbSection

export default Breadcrumb
