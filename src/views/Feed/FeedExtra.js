import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import { createImg } from '../../factories'

function FeedExtra(props) {
  const { children, className, images, text } = props
  const classes = cx(
    className,
    useKeyOnly(images, 'images'),
    useKeyOnly(text, 'text'),
    'extra'
  )
  const rest = getUnhandledProps(FeedExtra, props)
  const ElementType = getElementType(FeedExtra, props)

  if (Array.isArray(images)) {
    const imagesJSX = images.map((image, index) => {
      const key = [index, image].join('-')

      return createImg(image, { key })
    })

    return <ElementType {...rest} className={classes}>{imagesJSX}</ElementType>
  }

  return <ElementType {...rest} className={classes}>{children || text}</ElementType>
}

FeedExtra._meta = {
  name: 'FeedExtra',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedExtra.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the FeedExtra. */
  children: PropTypes.node,

  /** Classes that will be added to the FeedExtra className. */
  className: PropTypes.string,

  /** An event can contain additional information like a set of images. */
  images: customPropTypes.every([
    customPropTypes.disallow(['text']),
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  ]),

  /** An event can contain additional information like a set of images. */
  text: customPropTypes.every([
    customPropTypes.disallow(['images']),
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  ]),
}

export default FeedExtra
