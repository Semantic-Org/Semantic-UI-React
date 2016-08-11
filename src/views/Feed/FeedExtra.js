import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps, useKeyOnly } from '../../utils/propUtils'

function FeedExtra(props) {
  const { children, className, images, text } = props
  const classes = cx(
    className,
    useKeyOnly(images, 'images'),
    useKeyOnly(text, 'text'),
    'extra'
  )
  const rest = getUnhandledProps(FeedExtra, props)

  if (Array.isArray(images)) {
    const imagesJSX = images.map((image, i) => {
      return _.isString(image) ? <img key={i} src={image} /> : image
    })

    return <div {...rest} className={classes}>{imagesJSX}</div>
  }

  return <div {...rest} className={classes}>{children || text}</div>
}

FeedExtra._meta = {
  name: 'FeedExtra',
  parent: 'Feed',
  type: META.type.view,
}

FeedExtra.propTypes = {
  /** Primary content of the FeedExtra. */
  children: PropTypes.node,

  /** Classes that will be added to the FeedExtra className. */
  className: PropTypes.string,

  /** An event can contain additional information like a set of images. */
  images: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['text']),
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  ]),

  /** An event can contain additional information like a set of images. */
  text: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['images']),
    PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  ]),
}

export default FeedExtra
