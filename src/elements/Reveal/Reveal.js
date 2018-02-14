import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
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
    content,
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

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

Reveal._meta = {
  name: 'Reveal',
  type: META.TYPES.ELEMENT,
}

Reveal.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** An active reveal displays its hidden content. */
  active: PropTypes.bool,

  /** An animation name that will be applied to Reveal. */
  animated: PropTypes.oneOf([
    'fade', 'small fade',
    'move', 'move right', 'move up', 'move down',
    'rotate', 'rotate left',
  ]),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A disabled reveal will not animate when hovered. */
  disabled: PropTypes.bool,

  /** An element can show its content without delay. */
  instant: PropTypes.bool,
}

Reveal.Content = RevealContent

export default Reveal
