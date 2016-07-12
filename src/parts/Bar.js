import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Bar(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'bar'
  )
  const rest = getUnhandledProps(Bar, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Bar._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Bar'
}

Bar.propTypes = {
  /** Primary content of the Bar. */
  children: PropTypes.node,

  /** Classes to add to the Bar className. */
  className: PropTypes.string,
}

export default Bar
