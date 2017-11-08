import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  ElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
  withComputedType,
} from '../../lib'

/**
 * A list can contain a sub list.
 */
const InnerListList = (props) => {
  const { as, children, className, content } = props

  const rest = getUnhandledProps(InnerListList, props)
  const classes = cx(
    useKeyOnly(as !== 'ul' && as !== 'ol', 'list'),
    className,
  )

  return (
    <ElementType {...rest} as={as} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

InnerListList.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

const ListList = withComputedType()(InnerListList)

ListList._meta = {
  name: 'ListList',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

export default ListList
