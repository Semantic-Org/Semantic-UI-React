import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  SUI,
  getKeyOnly,
  getKeyOrValueAndKey,
} from '../../lib'

/**
 * A loader alerts a user to wait for an activity to complete.
 * @see Dimmer
 */
const Loader = React.forwardRef(function (props, ref) {
  const {
    active,
    children,
    className,
    content,
    disabled,
    indeterminate,
    inline,
    inverted,
    size,
  } = props

  const classes = cx(
    'ui',
    size,
    getKeyOnly(active, 'active'),
    getKeyOnly(disabled, 'disabled'),
    getKeyOnly(indeterminate, 'indeterminate'),
    getKeyOnly(inverted, 'inverted'),
    getKeyOnly(children || content, 'text'),
    getKeyOrValueAndKey(inline, 'inline'),
    'loader',
    className,
  )
  const rest = getUnhandledProps(Loader, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

Loader.displayName = 'Loader'
Loader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A loader can be active or visible. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A loader can be disabled or hidden. */
  disabled: PropTypes.bool,

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: PropTypes.bool,

  /** Loaders can appear inline with content. */
  inline: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['centered'])]),

  /** Loaders can have their colors inverted. */
  inverted: PropTypes.bool,

  /** Loaders can have different sizes. */
  size: PropTypes.oneOf(SUI.SIZES),
}

export default Loader
