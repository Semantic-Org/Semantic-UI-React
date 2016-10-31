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
 * A loader alerts a user to wait for an activity to complete.
 * @see Dimmer
 */
function Loader(props) {
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
    useKeyOnly(active, 'active'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(indeterminate, 'indeterminate'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(children || content, 'text'),
    useKeyOrValueAndKey(inline, 'inline'),
    'loader',
    className,
  )
  const rest = getUnhandledProps(Loader, props)
  const ElementType = getElementType(Loader, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

Loader._meta = {
  name: 'Loader',
  type: META.TYPES.ELEMENT,
  props: {
    inline: ['centered'],
    size: SUI.SIZES,
  },
}

Loader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

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
  inline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Loader._meta.props.inline),
  ]),

  /** Loaders can have their colors inverted. */
  inverted: PropTypes.bool,

  /** Loaders can have different sizes. */
  size: PropTypes.oneOf(Loader._meta.props.size),
}

export default Loader
