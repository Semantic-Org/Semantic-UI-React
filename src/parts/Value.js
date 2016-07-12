import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Value(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'value'
  )
  const rest = getUnhandledProps(Value, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Value._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Value'
}

Value.propTypes = {
  /** Primary content of the Value. */
  children: PropTypes.node,

  /** Classes to add to the Value className. */
  className: PropTypes.string,
}

export default Value
