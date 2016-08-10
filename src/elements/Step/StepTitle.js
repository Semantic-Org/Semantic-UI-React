import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'

function StepTitle(props) {
  const { className, children, title } = props
  const classes = cx(className, 'title')
  const rest = getUnhandledProps(StepTitle, props)

  return <div {...rest} className={classes}>{ children || title }</div>
}

StepTitle._meta = {
  name: 'StepTitle',
  parent: 'Step',
  type: META.type.element,
}

StepTitle.propTypes = {
  /** Classes that will be added to the StepTitle className. */
  className: PropTypes.string,

  /** Primary content of the StepTitle. Mutually exclusive with title prop. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['title']),
    PropTypes.node,
  ]),

  /** Primary content of the StepTitle. Mutually exclusive with children. */
  title: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default StepTitle
