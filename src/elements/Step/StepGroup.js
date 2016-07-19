import React, { PropTypes } from 'react'
import cx from 'classnames'

import { getUnhandledProps } from '../../utils/propUtils'
import META from '../../utils/Meta'

function StepGroup(props) {
  const { className, children } = props
  const classes = cx(
    'ui',
    className,
    'steps',
  )
  const rest = getUnhandledProps(StepGroup, props)

  return <div {...rest} className={classes}>{ children }</div>
}

StepGroup._meta = {
  library: META.library.semanticUI,
  name: 'StepGroup',
  parent: 'Step',
  type: META.type.element,
}

StepGroup.propTypes = {
  /** Classes that will be added to the StepGroup className. */
  className: PropTypes.string,

  /** Primary content of the StepGroup. */
  children: PropTypes.node,
}

export default StepGroup
