import cx from 'classnames'
import React, { PropTypes } from 'react'
import META from '../../utils/Meta'
import {
  getUnhandledProps,
  iconPropRenderer,
  imagePropRenderer,
  useValueAndKey,
  useKeyOrValueAndKey,
  useKeyOnly,
} from '../../utils/propUtils'

function _Header(props) {
  const {
    _sdClass, _headerElement,
    aligned, dividing, block, attached, floating,
    icon, image, children, className,
  } = props

  const classes = cx(
    _sdClass, 'ui',
    aligned === 'justified' ? 'justified' : useValueAndKey(aligned, 'aligned'),
    useKeyOnly(dividing, 'dividing'),
    useKeyOnly(block, 'block'),
    useKeyOrValueAndKey(attached, 'attached'),
    useValueAndKey(floating, 'floating'),
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
    aligned: ['left', 'center', 'right', 'justified'],
  },
}

_Header.propTypes = {
  _headerElement: PropTypes.string,
  _sdClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,

  /** Add an icon by icon className or pass an <Icon /.>*/
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),

  /** Add an image by img src or pass an <Image />. */
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),

  /** Align header content */
  aligned: PropTypes.oneOf(_Header._meta.props.aligned),

  /** Divide header from the content below it */
  dividing: PropTypes.bool,

  /** Format header to appear inside a content block */
  block: PropTypes.bool,

  /** Attach header  to other content, like a segment */
  attached: PropTypes.bool,

  /** Header can sit to the left or right of other content */
  floating: PropTypes.bool,
}

_Header.defaultProps = {
  _headerElement: 'div',
  _sdClass: 'sd-header',
}

export default _Header
