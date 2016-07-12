import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Meta(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'meta'
  )
  const rest = getUnhandledProps(Meta, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Meta._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Meta'
}

Meta.propTypes = {
  /** Primary content of the Meta. */
  children: PropTypes.node,

  /** Classes to add to the Meta className. */
  className: PropTypes.string,
}

export default Meta
