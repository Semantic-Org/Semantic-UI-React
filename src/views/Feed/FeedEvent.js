import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'
import FeedLabel from './FeedLabel'

function FeedEvent(props) {
  const { children, className, image, icon } = props
  const classes = cx(className, 'event')
  const rest = getUnhandledProps(FeedEvent, props)

  return (<div {...rest} className={classes}>
    {icon && <FeedLabel icon={icon} />}
    {image && <FeedLabel image={image} />}
    {children}
  </div>)
}

FeedEvent._meta = {
  name: 'FeedEvent',
  parent: 'Feed',
  type: META.type.view,
}

FeedEvent.propTypes = {
  /** Primary content of the FeedEvent. */
  children: PropTypes.node,

  /** Classes that will be added to the FeedEvent className. */
  className: PropTypes.string,

  /** An event can contain icon label. */
  icon: PropTypes.node,

  /** An event can contain image label. */
  image: PropTypes.node,
}

export default FeedEvent
