import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'
import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useValueAndKey,
  useTextAlignProp,
  useKeyOrValueAndKey,
  useKeyOnly,
} from '../../lib'
import Icon from '../../elements/Icon'
import Image from '../../elements/Image'

import HeaderSubheader from './HeaderSubheader'
import HeaderContent from './HeaderContent'

/**
 * A header provides a short summary of content
 */
function Header(props) {
  const {
    color, content, dividing, block, attached, floated, inverted, disabled, sub, size, textAlign,
    icon, image, children, className, subheader,
  } = props

  const classes = cx(
    'ui',
    size,
    color,
    useKeyOrValueAndKey(attached, 'attached'),
    useKeyOnly(block, 'block'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(dividing, 'dividing'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(icon === true, 'icon'),
    useKeyOnly(image === true, 'image'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(sub, 'sub'),
    useTextAlignProp(textAlign),
    className,
    'header',
  )
  const rest = getUnhandledProps(Header, props)
  const ElementType = getElementType(Header, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  const iconElement = Icon.create(icon)
  const imageElement = Image.create(image)
  const subheaderElement = HeaderSubheader.create(subheader, { className: 'sub header' })

  if (iconElement || imageElement) {
    return (
      <ElementType {...rest} className={classes}>
        {iconElement || imageElement}
        {(content || subheaderElement) && (
          <HeaderContent>
            {content}
            {subheaderElement}
          </HeaderContent>
        )}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes}>
      {content}
      {subheaderElement}
    </ElementType>
  )
}

Header._meta = {
  name: 'Header',
  type: META.TYPES.ELEMENT,
  props: {
    attached: ['top', 'bottom'],
    color: SUI.COLORS,
    size: _.without(SUI.SIZES, 'big', 'massive'),
    floated: SUI.FLOATS,
    textAlign: SUI.TEXT_ALIGNMENTS,
  },
}

Header.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Add an icon by icon name or pass an <Icon /.> */
  icon: customPropTypes.every([
    customPropTypes.disallow(['image']),
    PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.itemShorthand,
    ]),
  ]),

  /** Add an image by img src or pass an <Image />. */
  image: customPropTypes.every([
    customPropTypes.disallow(['icon']),
    PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.itemShorthand,
    ]),
  ]),

  /** Color of the header. */
  color: PropTypes.oneOf(Header._meta.props.color),

  /** Divide header from the content below it */
  dividing: PropTypes.bool,

  /** Format header to appear inside a content block */
  block: PropTypes.bool,

  /** Attach header  to other content, like a segment */
  attached: PropTypes.oneOfType([
    PropTypes.oneOf(Header._meta.props.attached),
    PropTypes.bool,
  ]),

  /** Header can sit to the left or right of other content */
  floated: PropTypes.oneOf(Header._meta.props.floated),

  /** Inverts the color of the header for dark backgrounds */
  inverted: PropTypes.bool,

  /** Show that the header is inactive */
  disabled: PropTypes.bool,

  /** Headers may be formatted to label smaller or de-emphasized content */
  sub: PropTypes.bool,

  /** Content headings are sized with em and are based on the font-size of their container. */
  size: PropTypes.oneOf(Header._meta.props.size),

  /** Shorthand for Header.Subheader. */
  subheader: customPropTypes.itemShorthand,

  /** Align header content */
  textAlign: PropTypes.oneOf(Header._meta.props.textAlign),
}

Header.Content = HeaderContent
Header.Subheader = HeaderSubheader

export default Header
