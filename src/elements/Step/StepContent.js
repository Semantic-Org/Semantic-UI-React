import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import { createShorthand } from '../../factories'
import StepDescription from './StepDescription'
import StepTitle from './StepTitle'

function StepContent(props) {
  const { className, children, description, title } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(StepContent, props)
  const ElementType = getElementType(StepContent, props)

  if (children) {
    return <div {...rest} className={classes}>{ children }</div>
  }

  return (
    <ElementType {...rest} className={classes}>
      {createShorthand(StepTitle, val => ({ title: val }), title)}
      {createShorthand(StepDescription, val => ({ description: val }), description)}
    </ElementType>
  )
}

StepContent._meta = {
  name: 'StepContent',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

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
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ]),
}

export default StepContent
