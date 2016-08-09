import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'

function StepDescription(props) {
  const { className, children, description } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(StepDescription, props)

  return <div {...rest} className={classes}>{ children || description }</div>
}

StepDescription._meta = {
  name: 'StepDescription',
  parent: 'Step',
  type: META.type.element,
}

StepDescription.propTypes = {
  /** Classes that will be added to the StepDescription className. */
  className: PropTypes.string,

  /** Primary content of the StepDescription. Mutually exclusive with description prop. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description']),
    PropTypes.node,
  ]),

  /** Primary content of the StepDescription. Mutually exclusive with children. */
  description: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default StepDescription
