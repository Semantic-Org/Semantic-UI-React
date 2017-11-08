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
 * A list item can contain a header.
 */
const InnerListHeader = (props) => {
  const { children, className, content } = props
  const classes = cx('header', className)
  const rest = getUnhandledProps(InnerListHeader, props, { passAs: true })

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

InnerListHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

const ListHeader = withComputedType()(InnerListHeader)

ListHeader._meta = {
  name: 'ListHeader',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListHeader.create = createShorthandFactory(ListHeader, content => ({ content }))

export default ListHeader
