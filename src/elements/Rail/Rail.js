import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'

/**
 * A rail is used to show accompanying content outside the boundaries of the main view of a site.
 */
function Rail(props) {
  const {
    attached,
    children,
    className,
    close,
    dividing,
    internal,
    position,
    size,
  } = props

  const classes = cx(
    'ui',
    position,
    size,
    useKeyOnly(attached, 'attached'),
    useKeyOnly(dividing, 'dividing'),
    useKeyOnly(internal, 'internal'),
    useKeyOrValueAndKey(close, 'close'),
    'rail',
    className,
  )
  const rest = getUnhandledProps(Rail, props)
  const ElementType = getElementType(Rail, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Rail._meta = {
  name: 'Rail',
  type: META.TYPES.ELEMENT,
  props: {
    close: ['very'],
    position: SUI.FLOATS,
    size: _.without(SUI.SIZES, 'medium'),
  },
}

Rail.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A rail can appear attached to the main viewport. */
  attached: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A rail can appear closer to the main viewport. */
  close: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Rail._meta.props.close),
  ]),

  /** A rail can create a division between itself and a container. */
  dividing: PropTypes.bool,

  /** A rail can attach itself to the inside of a container. */
  internal: PropTypes.bool,

  /** A rail can be presented on the left or right side of a container. */
  position: PropTypes.oneOf(Rail._meta.props.position).isRequired,

  /** A rail can have different sizes. */
  size: PropTypes.oneOf(Rail._meta.props.size),
}

export default Rail
