import React, { PropTypes } from 'react'
import cx from 'classnames'

import { getUnhandledProps } from '../../utils/propUtils'
import META from '../../utils/Meta'

function StepTitle(props) {
  const { className, children, } = props
  const classes = cx(
    className,
    'title',
  )
  const rest = getUnhandledProps(StepTitle, props)

  return <div className={classes} {...rest}>{ children }</div>
}

StepTitle._meta = {
  library: META.library.semanticUI,
  name: 'StepTitle',
  parent: 'Step',
  type: META.type.element,
}

StepTitle.propTypes = {
  /** Classes that will be added to the Step className. */
  className: PropTypes.string,

  /** Primary content of the Step. */
  children: PropTypes.node,
}

export default StepTitle
