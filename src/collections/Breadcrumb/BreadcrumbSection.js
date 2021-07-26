import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getUnhandledProps,
  getElementType,
  useKeyOnly,
  useEventCallback,
} from '../../lib'

/**
 * A section sub-component for Breadcrumb component.
 */
const BreadcrumbSection = React.forwardRef(function (props, ref) {
  const { active, children, className, content, href, link, onClick } = props

  const classes = cx(useKeyOnly(active, 'active'), 'section', className)
  const rest = getUnhandledProps(BreadcrumbSection, props)
  const ElementType = getElementType(BreadcrumbSection, props, () => {
    if (link || onClick) return 'a'
  })

  const handleClick = useEventCallback((e) => _.invoke(props, 'onClick', e, props))

  return (
    <ElementType {...rest} className={classes} href={href} onClick={handleClick} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

BreadcrumbSection.displayName = 'BreadcrumbSection'
BreadcrumbSection.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Style as the currently active section. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: customPropTypes.every([customPropTypes.disallow(['link']), PropTypes.string]),

  /** Render as an `a` tag instead of a `div`. */
  link: customPropTypes.every([customPropTypes.disallow(['href']), PropTypes.bool]),

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,
}

BreadcrumbSection.create = createShorthandFactory(BreadcrumbSection, (content) => ({
  content,
  link: true,
}))

export default BreadcrumbSection
