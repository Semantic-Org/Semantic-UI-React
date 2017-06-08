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
  useKeyOnly,
} from '../../lib'

function ShapeSide(props) {
  const {
    active,
    children,
    className,
    content,
    header,
  } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOnly(header, 'header'),
    'side',
    className
  )
  const rest = getUnhandledProps(ShapeSide, props)
  const ElementType = getElementType(ShapeSide, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? content : children}
    </ElementType>
  )
}

ShapeSide._meta = {
  name: 'ShapeSide',
  parent: 'Shape',
  type: META.TYPES.MODULE,
}

ShapeSide.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** The item currently selected by keyboard shortcut. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A side can be a header. */
  header: PropTypes.bool,
}

ShapeSide.create = createShorthandFactory(ShapeSide, content => ({ content }))

export default ShapeSide
