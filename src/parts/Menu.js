import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Menu(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'menu'
  )
  const rest = getUnhandledProps(Menu, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Menu._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Menu'
}

Menu.propTypes = {
  /** Primary content of the Menu. */
  children: PropTypes.node,

  /** Classes to add to the Menu className. */
  className: PropTypes.string,
}

export default Menu
