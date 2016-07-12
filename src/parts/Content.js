import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Content(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'content'
  )
  const rest = getUnhandledProps(Content, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Content._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Content'
}

Content.propTypes = {
  /** Primary content of the Content. */
  children: PropTypes.node,

  /** Classes to add to the Content className. */
  className: PropTypes.string,
}

export default Content
