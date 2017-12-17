import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  ElementType,
  getUnhandledProps,
  META,
  partitionHTMLProps,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useValueAndKey,
  useVerticalAlignProp,
  withComputedType,
} from '../../lib'
import Dimmer from '../../modules/Dimmer'
import Label from '../Label/Label'
import ImageGroup from './ImageGroup'

const imageProps = ['alt', 'height', 'src', 'srcSet', 'width']

/**
 * An image is a graphic representation of something.
 * @see Icon
 */
const InnerImage = (props) => {
  const {
    as,
    alt,
    avatar,
    bordered,
    centered,
    children,
    circular,
    className,
    content,
    dimmer,
    disabled,
    floated,
    fluid,
    hidden,
    href,
    inline,
    label,
    rounded,
    size,
    spaced,
    verticalAlign,
    wrapped,
    ui,
  } = props

  const classes = cx(
    useKeyOnly(ui, 'ui'),
    size,
    useKeyOnly(avatar, 'avatar'),
    useKeyOnly(bordered, 'bordered'),
    useKeyOnly(circular, 'circular'),
    useKeyOnly(centered, 'centered'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(hidden, 'hidden'),
    useKeyOnly(inline, 'inline'),
    useKeyOnly(rounded, 'rounded'),
    useKeyOrValueAndKey(spaced, 'spaced'),
    useValueAndKey(floated, 'floated'),
    useVerticalAlignProp(verticalAlign, 'aligned'),
    'image',
    className,
  )
  const rest = getUnhandledProps(InnerImage, props)
  const [imgTagProps, rootProps] = partitionHTMLProps(rest, { htmlProps: imageProps })

  if (!childrenUtils.isNil(children)) {
    return <ElementType {...rest} as={as} className={classes}>{children}</ElementType>
  }
  if (!childrenUtils.isNil(content)) {
    return <ElementType {...rest} as={as} className={classes}>{content}</ElementType>
  }

  if (as === 'img') return <ElementType {...rootProps} {...imgTagProps} className={classes} />
  return (
    <ElementType {...rootProps} className={classes} href={href}>
      {Dimmer.create(dimmer)}
      {Label.create(label)}
      <img {...imgTagProps} />
    </ElementType>
  )
}

InnerImage.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** An image may be formatted to appear inline with text as an avatar. */
  avatar: PropTypes.bool,

  /** An image may include a border to emphasize the edges of white or transparent content. */
  bordered: PropTypes.bool,

  /** An image can appear centered in a content block. */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** An image may appear circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** An image can show that it is disabled and cannot be selected. */
  disabled: PropTypes.bool,

  /** Shorthand for Dimmer. */
  dimmer: customPropTypes.itemShorthand,

  /** An image can sit to the left or right of other content. */
  floated: PropTypes.oneOf(SUI.FLOATS),

  /** An image can take up the width of its container. */
  fluid: customPropTypes.every([
    PropTypes.bool,
    customPropTypes.disallow(['size']),
  ]),

  /** An image can be hidden. */
  hidden: PropTypes.bool,

  /** Renders the Image as an <a> tag with this href. */
  href: PropTypes.string,

  /** An image may appear inline. */
  inline: PropTypes.bool,

  /** Shorthand for Label. */
  label: customPropTypes.itemShorthand,

  /** An image may appear rounded. */
  rounded: PropTypes.bool,

  /** An image may appear at different sizes. */
  size: PropTypes.oneOf(SUI.SIZES),

  /** An image can specify that it needs an additional spacing to separate it from nearby content. */
  spaced: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['left', 'right']),
  ]),

  /** Whether or not to add the ui className. */
  ui: PropTypes.bool,

  /** An image can specify its vertical alignment. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS),

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup. */
  wrapped: PropTypes.bool,
}

InnerImage.defaultProps = {
  as: 'img',
  ui: true,
}

const computeType = ({ children, dimmer, label, wrapped }) => {
  if (!_.isNil(dimmer) || !_.isNil(label) || !_.isNil(wrapped) || !childrenUtils.isNil(children)) return 'div'
}

const Image = withComputedType(computeType)(InnerImage)

Image.Group = ImageGroup

Image._meta = {
  name: 'Image',
  type: META.TYPES.ELEMENT,
}

Image.create = createShorthandFactory(Image, value => ({ src: value }))

export default Image
