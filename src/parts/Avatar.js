import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Avatar(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'avatar'
  )
  const rest = getUnhandledProps(Avatar, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Avatar._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Avatar'
}

Avatar.propTypes = {
  /** Primary content of the Avatar. */
  children: PropTypes.node,

  /** Classes to add to the Avatar className. */
  className: PropTypes.string,
}

export default Avatar
