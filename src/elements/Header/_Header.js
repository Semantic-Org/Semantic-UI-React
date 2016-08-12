import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getUnhandledProps,
  META,
  SUI,
  useValueAndKey,
  useTextAlignProp,
  useKeyOrValueAndKey,
  useKeyOnly,
} from '../../lib'
import { createIcon, createImage } from '../../factories'

function _Header(props) {
  const {
    _headerElement,
    color, dividing, block, attached, floated, inverted, disabled, textAlign,
    icon, image, children, className,
  } = props

  const classes = cx(
    'ui',
    icon && 'icon',
    color,
    useKeyOnly(dividing, 'dividing'),
    useKeyOnly(block, 'block'),
    useKeyOrValueAndKey(attached, 'attached'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(disabled, 'disabled'),
    useTextAlignProp(textAlign),
    className,
    'header',
  )

  const _HeaderComponent = _headerElement
  const rest = getUnhandledProps(_Header, props)

  return (
    <_HeaderComponent className={classes} {...rest}>
      {createIcon(icon)}
      {createImage(image)}
      {children}
    </_HeaderComponent>
  )
}

_Header._meta = {
  name: '_Header',
  type: META.TYPES.ELEMENT,
  props: {
    attached: ['top', 'bottom'],
    color: SUI.COLORS,
    floated: SUI.FLOATS,
    textAlign: SUI.TEXT_ALIGNMENTS,
  },
}

_Header.propTypes = {
  _headerElement: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,

  /** Add an icon by icon name or pass an <Icon /.> */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),

  /** Add an image by img src or pass an <Image />. */
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),

  /** Color of the header. */
  color: PropTypes.oneOf(_Header._meta.props.color),

  /** Divide header from the content below it */
  dividing: PropTypes.bool,

  /** Format header to appear inside a content block */
  block: PropTypes.bool,

  /** Attach header  to other content, like a segment */
  attached: PropTypes.oneOf(_Header._meta.props.attached),

  /** Header can sit to the left or right of other content */
  floated: PropTypes.oneOf(_Header._meta.props.floated),

  /** Inverts the color of the header for dark backgrounds */
  inverted: PropTypes.bool,

  /** Show that the header is inactive */
  disabled: PropTypes.bool,

  /** Align header content */
  textAlign: PropTypes.oneOf(_Header._meta.props.textAlign),
}

_Header.defaultProps = {
  _headerElement: 'div',
}

export default _Header
