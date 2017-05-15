import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A list item can contain a description.
 */
function ListDescription(props) {
  const { children, className, content } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(ListDescription, props)
  const ElementType = getElementType(ListDescription, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? content : children}
    </ElementType>
  )
}

ListDescription._meta = {
  name: 'ListDescription',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

ListDescription.create = createShorthandFactory(ListDescription, content => ({ content }))

export default ListDescription
