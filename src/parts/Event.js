import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Event(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'event'
  )
  const rest = getUnhandledProps(Event, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Event._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Event'
}

Event.propTypes = {
  /** Primary content of the Event. */
  children: PropTypes.node,

  /** Classes to add to the Event className. */
  className: PropTypes.string,
}

export default Event
