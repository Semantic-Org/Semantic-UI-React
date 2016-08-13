import _ from 'lodash'
import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
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
  const { attached, className, close, children, dividing, internal, position, size } = props
  const classes = cx(
    'ui',
    position,
    useKeyOnly(attached, 'attached'),
    useKeyOrValueAndKey(close, 'close'),
    useKeyOnly(dividing, 'dividing'),
    useKeyOnly(internal, 'internal'),
    size,
    className,
    'rail',
  )
  const rest = getUnhandledProps(Rail, props)

  return <div className={classes} {...rest}>{ children }</div>
}

Rail._meta = {
  name: 'Rail',
  props: {
    close: ['very'],
    position: SUI.FLOATS,
    size: _.without(SUI.SIZES, 'medium'),
  },
  type: META.TYPES.ELEMENT,
}

Rail.propTypes = {
  /** A rail can appear attached to the main viewport. */
  attached: PropTypes.bool,

  /** Classes that will be added to the Rail className. */
  className: PropTypes.string,

  /** A rail can appear closer to the main viewport. */
  close: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Rail._meta.props.close),
  ]),

  /** Primary content of the Rail. */
  children: PropTypes.node,

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
