import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Description(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'description'
  )
  const rest = getUnhandledProps(Description, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Description._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Description'
}

Description.propTypes = {
  /** Primary content of the Description. */
  children: PropTypes.node,

  /** Classes to add to the Description className. */
  className: PropTypes.string,
}

export default Description
