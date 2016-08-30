import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'
import {
  createShorthand,
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
import { Icon, Image } from '../../elements'
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

  const ElementType = getElementType(Header, props)
  const rest = getUnhandledProps(Header, props)

  if (children) {
    return (
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    )
  }

  if ((image && typeof image !== 'boolean') || (icon && typeof icon !== 'boolean')) {
    return (
      <ElementType {...rest} className={classes}>
        {Icon.create(icon) || Image.create(image)}
        {(content || subheader) && (
          <HeaderContent>
            {content}
            {createShorthand(HeaderSubheader, val => ({ content: val }), subheader)}
          </HeaderContent>
        )}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes}>
      {content}
      {createShorthand(HeaderSubheader, val => ({ content: val }), subheader)}
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

  /** Additional classes */
  className: PropTypes.string,

  /** Primary content */
  children: PropTypes.node,

  /** Primary content.  Mutually exclusive with children. */
  content: customPropTypes.shorthand,

  /** Add an icon by icon name or pass an <Icon /.> */
  icon: customPropTypes.every([
    customPropTypes.disallow(['image']),
    customPropTypes.givenProps(
      { icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object]).isRequired },
      customPropTypes.disallow(['children']),
    ),
  ]),

  /** Add an image by img src or pass an <Image />. */
  image: customPropTypes.every([
    customPropTypes.disallow(['icon']),
    customPropTypes.givenProps(
      { image: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object]).isRequired },
      customPropTypes.disallow(['children']),
    ),
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

  /** Shorthand for the Header.Subheader component. Mutually exclusive with children */
  subheader: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),

  /** Align header content */
  textAlign: PropTypes.oneOf(Header._meta.props.textAlign),
}

Header.Content = HeaderContent
Header.Subheader = HeaderSubheader

export default Header
