import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Actions(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'actions'
  )
  const rest = getUnhandledProps(Actions, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Actions._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Actions'
}

Actions.propTypes = {
  /** Primary content of the Actions. */
  children: PropTypes.node,

  /** Classes to add to the Actions className. */
  className: PropTypes.string,
}

export default Actions
