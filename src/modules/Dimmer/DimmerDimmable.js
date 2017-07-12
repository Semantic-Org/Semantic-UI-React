import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A dimmable sub-component for Dimmer.
 */
function DimmerDimmable(props) {
  const {
    blurring,
    className,
    children,
    dimmed,
  } = props

  const classes = cx(
    useKeyOnly(blurring, 'blurring'),
    useKeyOnly(dimmed, 'dimmed'),
    'dimmable',
    className,
  )
  const rest = getUnhandledProps(DimmerDimmable, props)
  const ElementType = getElementType(DimmerDimmable, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

DimmerDimmable._meta = {
  name: 'DimmerDimmable',
  type: META.TYPES.MODULE,
  parent: 'Dimmer',
}

DimmerDimmable.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A dimmable element can blur its contents. */
  blurring: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Controls whether or not the dim is displayed. */
  dimmed: PropTypes.bool,
}

export default DimmerDimmable
