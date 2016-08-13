import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'

function StepTitle(props) {
  const { className, children, title } = props
  const classes = cx(className, 'title')
  const rest = getUnhandledProps(StepTitle, props)

  return <div {...rest} className={classes}>{ children || title }</div>
}

StepTitle._meta = {
  name: 'StepTitle',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepTitle.propTypes = {
  /** Classes that will be added to the StepTitle className. */
  className: PropTypes.string,

  /** Primary content of the StepTitle. Mutually exclusive with title prop. */
  children: customPropTypes.every([
    customPropTypes.disallow(['title']),
    PropTypes.node,
  ]),

  /** Primary content of the StepTitle. Mutually exclusive with children. */
  title: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),
}

export default StepTitle
