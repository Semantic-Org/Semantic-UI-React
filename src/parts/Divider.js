import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Divider(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'divider'
  )
  const rest = getUnhandledProps(Divider, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Divider._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Divider'
}

Divider.propTypes = {
  /** Primary content of the Divider. */
  children: PropTypes.node,

  /** Classes to add to the Divider className. */
  className: PropTypes.string,
}

export default Divider
