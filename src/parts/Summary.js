import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Summary(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'summary'
  )
  const rest = getUnhandledProps(Summary, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Summary._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Summary'
}

Summary.propTypes = {
  /** Primary content of the Summary. */
  children: PropTypes.node,

  /** Classes to add to the Summary className. */
  className: PropTypes.string,
}

export default Summary
