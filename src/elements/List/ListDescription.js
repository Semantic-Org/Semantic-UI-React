import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  ElementType,
  getUnhandledProps,
  META,
  withComputedType,
} from '../../lib'

/**
 * A list item can contain a description.
 */
const InnerListDescription = (props) => {
  const { children, className, content } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(InnerListDescription, props, { passAs: true })

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

InnerListDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

const ListDescription = withComputedType()(InnerListDescription)

ListDescription._meta = {
  name: 'ListDescription',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListDescription.create = createShorthandFactory(ListDescription, content => ({ content }))

export default ListDescription
