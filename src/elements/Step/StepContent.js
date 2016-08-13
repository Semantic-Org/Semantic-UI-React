import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'
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
  type: META.TYPES.ELEMENT,
}

StepContent.propTypes = {
  /** Classes that will be added to the StepContent className. */
  className: PropTypes.string,

  /** Primary content of StepContent. Mutually exclusive with description and title props. */
  children: customPropTypes.every([
    customPropTypes.disallow(['description', 'title']),
    PropTypes.node,
  ]),

  /** Primary content of the StepDescription. Mutually exclusive with children. */
  description: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),

  /** Primary content of the StepTitle. Mutually exclusive with children. */
  title: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),
}

export default StepContent
