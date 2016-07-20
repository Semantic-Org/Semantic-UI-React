import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function StepDescription(props) {
  const { className, children } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(StepDescription, props)

  return <div className={classes} {...rest}>{ children }</div>
}

StepDescription._meta = {
  library: META.library.semanticUI,
  name: 'StepTitle',
  parent: 'Step',
  type: META.type.element,
}

StepDescription.propTypes = {
  /** Classes that will be added to the StepDescription className. */
  className: PropTypes.string,

  /** Primary content of the StepDescription. */
  children: PropTypes.node,
}

export default StepDescription
