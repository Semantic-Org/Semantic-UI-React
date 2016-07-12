import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Header(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'header'
  )
  const rest = getUnhandledProps(Header, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Header._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Header'
}

Header.propTypes = {
  /** Primary content of the Header. */
  children: PropTypes.node,

  /** Classes to add to the Header className. */
  className: PropTypes.string,
}

export default Header
