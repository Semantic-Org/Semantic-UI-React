import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function StepDescription(props) {
  const { children, className, description } = props
  const classes = cx('description', className)
  const rest = getUnhandledProps(StepDescription, props)
  const ElementType = getElementType(StepDescription, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? description : children}
    </ElementType>
  )
}

StepDescription._meta = {
  name: 'StepDescription',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  description: customPropTypes.contentShorthand,
}

export default StepDescription
