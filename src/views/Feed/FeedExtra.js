import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createHTMLImage,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function FeedExtra(props) {
  const { children, className, content, images, text } = props
  const classes = cx(
    className,
    useKeyOnly(images, 'images'),
    useKeyOnly(content || text, 'text'),
    'extra'
  )
  const rest = getUnhandledProps(FeedExtra, props)
  const ElementType = getElementType(FeedExtra, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  // TODO need a "collection factory" to handle creating multiple image elements and their keys
  const imageElements = _.map(images, (image, index) => {
    const key = [index, image].join('-')
    return createHTMLImage(image, { key })
  })

  return (
    <ElementType {...rest} className={classes}>
      {content}
      {imageElements}
    </ElementType>
  )
}

FeedExtra._meta = {
  name: 'FeedExtra',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedExtra.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** An event can contain additional information like a set of images. */
  images: customPropTypes.every([
    customPropTypes.disallow(['text']),
    PropTypes.oneOfType([
      PropTypes.bool,
      customPropTypes.collectionShorthand,
    ]),
  ]),

  /** An event can contain additional text information. */
  text: PropTypes.bool,
}

export default FeedExtra
