import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getUnhandledProps,
  META,
  useKeyOnly,
  withElementType,
} from '../../lib'

/**
 * A content sub-component for the Reveal.
 */
function RevealContent(props) {
  const {
    as: ElementType,
    children,
    className,
    content,
    hidden,
    visible,
  } = props

  const classes = cx(
    'ui',
    useKeyOnly(hidden, 'hidden'),
    useKeyOnly(visible, 'visible'),
    'content',
    className,
  )
  const rest = getUnhandledProps(RevealContent, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

RevealContent._meta = {
  name: 'RevealContent',
  parent: 'Reveal',
  type: META.TYPES.ELEMENT,
}

RevealContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A reveal may contain content that is visible before interaction. */
  hidden: PropTypes.bool,

  /** A reveal may contain content that is hidden before user interaction. */
  visible: PropTypes.bool,
}

export default withElementType(RevealContent)
