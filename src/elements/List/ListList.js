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
} from '../../lib'

/**
 * A list can contain a sub list.
 */
function ListList(props) {
  const { children, className, content } = props
  const classes = cx(
    useKeyOnly(ElementType.original !== 'ul' && ElementType.original !== 'ol', 'list'),
    className,
  )
  const rest = getUnhandledProps(ListList, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

ListList._meta = {
  name: 'ListList',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListList.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default ListList
