import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useTextAlignProp,
} from '../../lib'

/**
 * A container limits content to a maximum width.
 */
function Container(props) {
  const {
    children,
    className,
    fluid,
    text,
    textAlign,
  } = props
  const classes = cx(
    'ui',
    useKeyOnly(text, 'text'),
    useKeyOnly(fluid, 'fluid'),
    useTextAlignProp(textAlign),
    'container',
    className
  )
  const rest = getUnhandledProps(Container, props)
  const ElementType = getElementType(Container, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Container._meta = {
  name: 'Container',
  type: META.TYPES.ELEMENT,
}

Container.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Container has no maximum with. */
  fluid: PropTypes.bool,

  /** Reduce maximum width to more naturally accommodate text. */
  text: PropTypes.bool,

  /** Align container text. */
  textAlign: PropTypes.oneOf(SUI.TEXT_ALIGNMENTS),
}

export default Container
