import React, { PropTypes } from 'react'
import cx from 'classnames'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'
import StepDescription from './StepDescription'
import StepTitle from './StepTitle'

function StepContent(props) {
  const { className, children, description, title } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(StepContent, props)

  if (children) {
    return <div {...rest} className={classes}>{ children }</div>
  }

  return (
    <div {...rest} className={classes}>
      { title && <StepTitle title={title} /> }
      { description && <StepDescription description={description} /> }
    </div>
  )
}

StepContent._meta = {
  name: 'StepContent',
  parent: 'Step',
  type: META.type.element,
}

StepContent.propTypes = {
  /** Classes that will be added to the StepContent className. */
  className: PropTypes.string,

  /** Primary content of StepContent. Mutually exclusive with description and title props. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description', 'title']),
    PropTypes.node,
  ]),

  /** Primary content of the StepDescription. Mutually exclusive with children. */
  description: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),

  /** Primary content of the StepTitle. Mutually exclusive with children. */
  title: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default StepContent
