import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Title(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'title'
  )
  const rest = getUnhandledProps(Title, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Title._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Title'
}

Title.propTypes = {
  /** Primary content of the Title. */
  children: PropTypes.node,

  /** Classes to add to the Title className. */
  className: PropTypes.string,
}

export default Title
