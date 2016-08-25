import cx from 'classnames'
import React, { PropTypes } from 'react'
import {
  META,
  SUI,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
  useTextAlignProp,
} from '../../lib'

/**
 * A container limits content to a maximum width
 */
function Container(props) {
  const { text, textAlign, fluid, children, className } = props
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

  return <ElementType className={classes} {...rest}>{children}</ElementType>
}

Container._meta = {
  name: 'Container',
  type: META.TYPES.ELEMENT,
  props: {
    textAlign: SUI.TEXT_ALIGNMENTS,
  },
}

Container.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the Container */
  children: PropTypes.node,

  /** Classes to add to the container className. */
  className: PropTypes.string,

  /** Reduce maximum width to more naturally accommodate text */
  text: PropTypes.bool,

  /** Container has no maximum with */
  fluid: PropTypes.bool,

  /** Align container text */
  textAlign: PropTypes.oneOf(Container._meta.props.textAlign),
}

export default Container
