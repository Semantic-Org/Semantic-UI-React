import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createHTMLImage,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import { Icon } from '../../elements'

function FeedLabel(props) {
  const { children, className, icon, image } = props
  const classes = cx(className, 'label')
  const rest = getUnhandledProps(FeedLabel, props)
  const ElementType = getElementType(FeedLabel, props)

  return (
    <ElementType {...rest} className={classes}>
      {children}
      {Icon.create(icon)}
      {createHTMLImage(image)}
    </ElementType>
  )
}

FeedLabel._meta = {
  name: 'FeedLabel',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedLabel.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the FeedLabel. */
  children: customPropTypes.every([
    customPropTypes.disallow(['icon', 'image']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedLabel className. */
  className: PropTypes.string,

  /** An event can contain icon label. */
  icon: customPropTypes.every([
    customPropTypes.disallow(['children', 'image']),
    PropTypes.node,
  ]),

  /** An event can contain image label. */
  image: customPropTypes.every([
    customPropTypes.disallow(['children', 'icon']),
    PropTypes.node,
  ]),
}

export default FeedLabel
