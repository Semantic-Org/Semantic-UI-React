import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import RevealContent from './RevealContent'

/**
 * A reveal displays additional content in place of previous content when activated.
 */
function Reveal(props) {
  const {
    active,
    animated,
    children,
    className,
    disabled,
    instant,
  } = props

  const classes = cx(
    'ui',
    animated,
    useKeyOnly(active, 'active'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(instant, 'instant'),
    'reveal',
    className,
  )
  const rest = getUnhandledProps(Reveal, props)
  const ElementType = getElementType(Reveal, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Reveal._meta = {
  name: 'Reveal',
  type: META.TYPES.ELEMENT,
  props: {
    animated: [
      'fade', 'small fade',
      'move', 'move right', 'move up', 'move down',
      'rotate', 'rotate left',
    ],
  },
}

Reveal.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** An active reveal displays its hidden content. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A disabled reveal will not animate when hovered. */
  disabled: PropTypes.bool,

  /** An animation name that will be applied to Reveal. */
  animated: PropTypes.oneOf(Reveal._meta.props.animated),

  /** An element can show its content without delay. */
  instant: PropTypes.bool,
}

Reveal.Content = RevealContent

export default Reveal
