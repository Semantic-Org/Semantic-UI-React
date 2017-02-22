import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  getElementType,
  META,
  SUI,
} from '../../lib'
import BreadcrumbDivider from './BreadcrumbDivider'
import BreadcrumbSection from './BreadcrumbSection'

/**
 * A breadcrumb is used to show hierarchy between content.
 */
function Breadcrumb(props) {
  const {
    children,
    className,
    divider,
    icon,
    sections,
    size,
  } = props

  const classes = cx(
    'ui',
    size,
    'breadcrumb',
    className,
  )
  const rest = getUnhandledProps(Breadcrumb, props)
  const ElementType = getElementType(Breadcrumb, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const childElements = []

  _.each(sections, (section, index) => {
    // section
    const breadcrumbSection = BreadcrumbSection.create(section)
    childElements.push(breadcrumbSection)

    // divider
    if (index !== sections.length - 1) {
      // TODO generate a key from breadcrumbSection.props once this is merged:
      // https://github.com/Semantic-Org/Semantic-UI-React/pull/645
      //
      // Stringify the props of the section as the divider key.
      //
      // Section:     { content: 'Home', link: true, onClick: handleClick }
      // Divider key: content=Home|link=true|onClick=handleClick
      let key
      if (section.key) {
        key = `${section.key}_divider`
      } else {
        key = _.map(breadcrumbSection.props, (v, k) => {
          return `${k}=${typeof v === 'function' ? v.name || 'func' : v}`
        }).join('|')
      }
      childElements.push(BreadcrumbDivider.create({ content: divider, icon, key }))
    }
  })

  return <ElementType {...rest} className={classes}>{childElements}</ElementType>
}

Breadcrumb._meta = {
  name: 'Breadcrumb',
  type: META.TYPES.COLLECTION,
}

Breadcrumb.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

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
