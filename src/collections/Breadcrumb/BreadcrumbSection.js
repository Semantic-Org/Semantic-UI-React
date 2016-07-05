import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'
import { customPropTypes, useKeyOnly } from '../../utils/propUtils'

/**
 * A section sub-component for Breadcrumb component.
 *
 * @see Breadcrumb
 */
function BreadcrumbSection(props) {
  const {
    active, children, className, link, href, onClick, ...rest,
  } = props

  /**
   * Handles onClick event. If onClick is not defined, does nothing.
   * */
  const handleClick = (e) => {
    if (onClick) onClick(e)
  }

  const classes = cx(
    useKeyOnly(active, 'active'),
    className,
    'section',
  )

  // Handle link and onClick props.
  //
  // <Breadcrumb.Section link>Home</Breadcrumb.Section>
  // <Breadcrumb.Section onClick={this.handleClick}>Home</Breadcrumb.Section>

  if (link || onClick) {
    return (
      <a {...rest} className={classes} href='javascript:void(0)' onClick={handleClick}>
        {children}
      </a>
    )
  }

  // Handle href prop.
  //
  // <Breadcrumb.Section href='http://google.com'>Home</Breadcrumb.Section>

  if (href) {
    return (
      <a {...rest} className={classes} href={href} onClick={handleClick}>
        {children}
      </a>
    )
  }

  // Default variant.
  //
  // <Breadcrumb.Section>Home</Breadcrumb.Section>

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
  /** Optional props that adds class active */
  active: PropTypes.bool,

  /** Primary content of the Breadcrumb.Section */
  children: PropTypes.node,

  /** Additional classes added to the element. */
  className: PropTypes.string,

  /** Makes element link (<a>) instead of text (<div>) */
  link: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['href']),
    PropTypes.bool,
  ]),

  /** Makes element link (<a>) instead of text (<div>) and adds href attribute. */
  href: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['link']),
    PropTypes.string,
  ]),

  /** Makes element link (<a>) instead of text (<div>) and adds onClick event. */
  onClick: PropTypes.func,
}

export default BreadcrumbSection
