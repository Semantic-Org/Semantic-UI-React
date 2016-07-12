import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../utils/Meta'
import { getUnhandledProps } from '../utils/propUtils'

function Label(props) {
  const { children, className } = props
  const classes = cx(
    className,
    'label'
  )
  const rest = getUnhandledProps(Label, props)
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

Label._meta = {
  library: META.library.semanticUI,
  type: META.type.part,
  name: 'Label'
}

Label.propTypes = {
  /** Primary content of the Label. */
  children: PropTypes.node,

  /** Classes to add to the Label className. */
  className: PropTypes.string,
}

export default Label
