import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps, useKeyOnly } from '../../utils/propUtils'

/**
 * A section sub-component for Breadcrumb component.
 */
function BreadcrumbSection(props) {
  const {
    active, children, className, link, href, onClick,
  } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    className,
    'section',
  )
  const rest = getUnhandledProps(BreadcrumbSection, props)

  const handleClick = (e) => {
    if (onClick) onClick(e)
  }

  if (link || onClick) {
    return (
      <a {...rest} className={classes} onClick={handleClick}>
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <a {...rest} className={classes} href={href} onClick={handleClick}>
        {children}
      </a>
    )
  }

  return (
    <div {...rest} className={classes} onClick={handleClick}>
      {children}
    </div>
  )
}

BreadcrumbSection._meta = {
  library: META.library.semanticUI,
  name: 'BreadcrumbSection',
  type: META.type.collection,
  parent: 'Breadcrumb',
}

BreadcrumbSection.propTypes = {
  /** Style as the currently active section. */
  active: PropTypes.bool,

  /** Primary content of the Breadcrumb.Section. */
  children: PropTypes.node,

  /** Classes that will be added to the BreadcrumbSection className. */
  className: PropTypes.string,

  /** Render as an `a` tag instead of a `div`. */
  link: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['href']),
    PropTypes.bool,
  ]),

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['link']),
    PropTypes.string,
  ]),

  /** Render as an `a` tag instead of a `div` and called with event on Section click. */
  onClick: PropTypes.func,
}

export default BreadcrumbSection
