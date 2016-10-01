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

  if (children) {
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

  /** Primary content of the FeedExtra. Mutually exclusive with content. */
  children: PropTypes.node,

  /** Shorthand for children. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),

  /** Classes that will be added to the FeedExtra className. */
  className: PropTypes.string,

  /** An event can contain additional information like a set of images. Mutually exclusive with children. */
  images: customPropTypes.every([
    customPropTypes.disallow(['text']),
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    customPropTypes.givenProps(
      { images: PropTypes.arrayOf(PropTypes.string).isRequired },
      customPropTypes.disallow(['children']),
    ),
  ]),

  /** An event can contain additional text information. */
  text: PropTypes.bool,
}

export default FeedExtra
