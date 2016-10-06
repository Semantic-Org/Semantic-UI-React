import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'

function Loader(props) {
  const { children, className, active, disabled, indeterminate, inline, inverted, size, text } = props
  const classes = cx(
    'ui',
    useKeyOnly(active, 'active'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(indeterminate, 'indeterminate'),
    useKeyOrValueAndKey(inline, 'inline'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(text, 'text') || useKeyOnly(children, 'text'),
    size,
    className,
    'loader',
  )
  const rest = getUnhandledProps(Loader, props)
  const ElementType = getElementType(Loader, props)

  return <ElementType {...rest} className={classes}>{children || text}</ElementType>
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

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** A loader can be disabled or hidden. */
  disabled: PropTypes.bool,

  /** A loader can show it's unsure of how long a task will take. */
  indeterminate: PropTypes.bool,

  /** Loaders can have their colors inverted. */
  inverted: PropTypes.bool,

  /** Loaders can appear inline with content. */
  inline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Loader._meta.props.inline),
  ]),

  /** Loaders can have different sizes. */
  size: PropTypes.oneOf(Loader._meta.props.size),

  /** Shorthand for primary content. */
  text: customPropTypes.contentShorthand,
}

export default Loader
