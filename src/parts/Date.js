import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Date(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'date'
  )
  const rest = getUnhandledProps(Date, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Date._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Date'
}

Date.propTypes = {
  /** Primary content of the Date. */
  children: PropTypes.node,

  /** Classes to add to the Date className. */
  className: PropTypes.string,
}

export default Date
