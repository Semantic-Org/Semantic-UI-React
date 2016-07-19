import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import * as sui from '../../utils/semanticUtils'
import {
  getUnhandledProps,
} from '../../utils/propUtils'

/**
 * Several icons can be used together as a group
 */
function IconGroup(props) {
  const {
    className, children, size,
  } = props

  const classes = cx(
    size,
    'icons',
    className
  )

  const rest = getUnhandledProps(IconGroup, props)

  return (
    <i className={classes} {...rest}>
      {children}
    </i>
  )
}


IconGroup._meta = {
  library: META.library.semanticUI,
  name: 'IconGroup',
  parent: 'Icon',
  type: META.type.element,
  props: {
    size: sui.sizes,
  },
}

IconGroup.propTypes = {
  /** Class names for custom styling. */
  className: PropTypes.string,

  /** Icon children for the Icon group */
  children: PropTypes.any,

  /** Size of the icon group. */
  size: PropTypes.oneOf(IconGroup._meta.props.size),
}

export default IconGroup
