import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import * as sui from '../../utils/semanticUtils'
import {
  getUnhandledProps,
  iconPropRenderer,
  imagePropRenderer,
  useValueAndKey,
  useAlignedProp,
  useKeyOrValueAndKey,
  useKeyOnly,
} from '../../utils/propUtils'

function _Header(props) {
  const {
    _headerElement,
    color, aligned, dividing, block, attached, floated, inverted, disabled,
    icon, image, children, className,
  } = props

  const classes = cx(
    'ui',
    icon && 'icon',
    color,
    useAlignedProp(aligned),
    useKeyOnly(dividing, 'dividing'),
    useKeyOnly(block, 'block'),
    useKeyOrValueAndKey(attached, 'attached'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(disabled, 'disabled'),
    className,
    'header',
  )

  const _HeaderComponent = _headerElement
  const rest = getUnhandledProps(_Header, props)

  return (
    <_HeaderComponent className={classes} {...rest}>
      {iconPropRenderer(icon)}
      {imagePropRenderer(image)}
      {children}
    </_HeaderComponent>
  )
}

_Header._meta = {
  library: META.library.semanticUI,
  name: '_Header',
  type: META.type.element,
  props: {
    aligned: sui.textAlignments,
    floated: sui.floats,
    attached: ['top', 'bottom'],
    color: sui.colors,
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

  /** Align header content */
  aligned: PropTypes.oneOf(_Header._meta.props.aligned),

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
}

_Header.defaultProps = {
  _headerElement: 'div',
}

export default _Header
