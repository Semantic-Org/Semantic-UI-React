import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'
import FeedContent from './FeedContent'
import FeedLabel from './FeedLabel'

function FeedEvent(props) {
  const { content, children, className, image, icon } = props
  const classes = cx(className, 'event')
  const rest = getUnhandledProps(FeedEvent, props)

  return (<div {...rest} className={classes}>
    {icon && <FeedLabel icon={icon} />}
    {image && <FeedLabel image={image} />}
    {content && <FeedContent {...{ content }} />}
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
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedEvent className. */
  className: PropTypes.string,

  /** An event can contain icon label. */
  icon: PropTypes.node,

  /** An event can contain image label. */
  image: PropTypes.node,

  /** Shorthand for FeedContent. */
  content: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default FeedEvent
