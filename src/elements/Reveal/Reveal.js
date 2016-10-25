import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
} from '../../lib'

/**
 * A reveal displays additional content in place of previous content when activated.
 */
function Reveal(props) {
  const {
    children,
    className,
  } = props

  const classes = cx(
    'ui',
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
}

Reveal.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default Reveal
