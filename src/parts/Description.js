import cx from 'classnames'
import React, { PropTypes } from 'react'
import { customPropTypes, getUnhandledProps } from '../utils/propUtils'

function Description(props) {
  const { className, children, description } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(Description, props)

  return <div className={classes} {...rest}>{ children || description }</div>
}

Description.propTypes = {
  /** Classes that will be added to the Description className. */
  className: PropTypes.string,

  /** Primary content of the Description. Mutually exclusive with description prop. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['description']),
    PropTypes.node,
  ]),

  /** Primary content of the Description. Mutually exclusive with children. */
  description: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.node,
  ]),
}

export default Description
