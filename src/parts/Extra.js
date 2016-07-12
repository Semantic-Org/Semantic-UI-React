import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Extra(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'extra'
  )
  const rest = getUnhandledProps(Extra, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Extra._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Extra'
}

Extra.propTypes = {
  /** Primary content of the Extra. */
  children: PropTypes.node,

  /** Classes to add to the Extra className. */
  className: PropTypes.string,
}

export default Extra
