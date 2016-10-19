import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function DimmerDimmable(props) {
  const {
    blurring,
    className,
    children,
    Component,
    dimmed,
  } = props

  const classes = cx(
    useKeyOnly(blurring, 'blurring'),
    useKeyOnly(dimmed, 'dimmed'),
    'dimmable',
    className,
  )
  const rest = getUnhandledProps(DimmerDimmable, props)

  return <Component {...rest} className={classes}>{children}</Component>
}

DimmerDimmable._meta = {
  name: 'DimmerDimmable',
  type: META.TYPES.MODULE,
  parent: 'Dimmer',
}

DimmerDimmable.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** A dimmable element can blur its contents. */
  blurring: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** An element type to render as (string or function). */
  Component: customPropTypes.as,

  dimmed: PropTypes.bool,
}

export default DimmerDimmable
