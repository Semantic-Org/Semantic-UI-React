import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  getElementType,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A section sub-component for Breadcrumb component.
 */
function BreadcrumbSection(props) {
  const { active, children, className, href, onClick } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    className,
    'section',
  )
  const rest = getUnhandledProps(BreadcrumbSection, props)
  const ElementType = getElementType(BreadcrumbSection, props, {
    link: 'a',
    onClick: 'a',
  })

  const handleClick = (e) => {
    if (onClick) onClick(e)
  }

  return (
    <ElementType {...rest} className={classes} href={href} onClick={handleClick}>
      {children}
    </ElementType>
  )
}

BreadcrumbSection._meta = {
  name: 'BreadcrumbSection',
  type: META.TYPES.COLLECTION,
  parent: 'Breadcrumb',
}

BreadcrumbSection.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Style as the currently active section. */
  active: PropTypes.bool,

  /** Primary content of the Breadcrumb.Section. */
  children: PropTypes.node,

  /** Classes that will be added to the BreadcrumbSection className. */
  className: PropTypes.string,

  /** Render as an `a` tag instead of a `div`. */
  link: customPropTypes.every([
    customPropTypes.disallow(['href']),
    PropTypes.bool,
  ]),

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: customPropTypes.every([
    customPropTypes.disallow(['link']),
    PropTypes.string,
  ]),

  /** Render as an `a` tag instead of a `div` and called with event on Section click. */
  onClick: PropTypes.func,
}

export default BreadcrumbSection
