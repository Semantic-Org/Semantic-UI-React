import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  SUI,
  useVerticalAlignProp,
  useKeyOrValueAndKey,
  useValueAndKey,
  useKeyOnly,
} from '../../lib'
import ImageGroup from './ImageGroup'

/**
 * An image is a graphic representation of something
 */
function Image(props) {
  const {
    verticalAlign, alt, avatar, bordered, centered, className, disabled, floated, fluid,
    hidden, height, href, inline, shape, size, spaced, src, width, wrapped,
  } = props

  const classes = cx(
    'ui',
    size,
    useVerticalAlignProp(verticalAlign, 'aligned'),
    useKeyOnly(avatar, 'avatar'),
    useKeyOnly(bordered, 'bordered'),
    useKeyOnly(centered, 'centered'),
    useKeyOnly(disabled, 'disabled'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(fluid, 'fluid'),
    useKeyOnly(hidden, 'hidden'),
    useKeyOnly(inline, 'inline'),
    useKeyOrValueAndKey(spaced, 'spaced'),
    shape,
    className,
    'image'
  )

  const rest = getUnhandledProps(Image, props)
  const rootProps = { className: classes, ...rest }
  const imgTagProps = { src, alt, width, height }

  if (href) {
    return (
      <a {...rootProps} href={href}>
        <img {...imgTagProps} />
      </a>
    )
  }

  if (wrapped) {
    return (
      <div {...rootProps}>
        <img {...imgTagProps} />
      </div>
    )
  }

  return <img {...rootProps} {...imgTagProps} />
}

Image.Group = ImageGroup

Image._meta = {
  name: 'Image',
  type: META.TYPES.ELEMENT,
  props: {
    verticalAlign: SUI.VERTICAL_ALIGNMENTS,
    floated: SUI.FLOATS,
    shape: ['rounded', 'circular'],
    size: SUI.SIZES,
    spaced: ['left', 'right'],
  },
}

Image.propTypes = {
  /** An image can specify its vertical alignment */
  verticalAlign: PropTypes.oneOf(Image._meta.props.verticalAlign),

  /** Alternate text for the image specified */
  alt: PropTypes.string,

  /** An image may be formatted to appear inline with text as an avatar */
  avatar: PropTypes.bool,

  /** An image may include a border to emphasize the edges of white or transparent content */
  bordered: PropTypes.bool,

  /** An image can appear centered in a content block */
  centered: PropTypes.bool,

  /** Class names for custom styling. */
  className: PropTypes.string,

  /** An image can show that it is disabled and cannot be selected */
  disabled: PropTypes.bool,

  /** An image can sit to the left or right of other content */
  floated: PropTypes.oneOf(Image._meta.props.floated),

  /** An image can take up the width of its container */
  fluid: customPropTypes.every([
    PropTypes.bool,
    customPropTypes.disallow(['size']),
  ]),

  /** An image can be hidden */
  hidden: PropTypes.bool,

  /** The img element height attribute */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /** Renders the Image as an <a> tag with this href */
  href: PropTypes.string,

  /** An image may appear inline */
  inline: PropTypes.bool,

  /** An image may appear rounded or circular */
  shape: PropTypes.oneOf(Image._meta.props.shape),

  /** An image may appear at different sizes */
  size: PropTypes.oneOf(Image._meta.props.size),

  /** An image can specify that it needs an additional spacing to separate it from nearby content */
  spaced: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Image._meta.props.spaced),
  ]),

  /** Specifies the URL of the image */
  src: PropTypes.string,

  /** The img element width attribute */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),

  /** An image can render wrapped in a `div.ui.image` as alternative HTML markup */
  wrapped: customPropTypes.every([
    PropTypes.bool,
    // these props wrap the image in an a tag already
    customPropTypes.disallow(['href']),
  ]),
}

export default Image
