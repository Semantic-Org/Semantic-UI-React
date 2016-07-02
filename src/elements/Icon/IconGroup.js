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

  const classes = cx('icon-group',
    size,
    className,
    'icons'
  )

  const rest = getUnhandledProps(IconGroup, props)

  return (
    <i className={classes} {...rest}>
      {children}
    </i>
  )
}

IconGroup.Group = IconGroup

IconGroup._meta = {
  library: META.library.semanticUI,
  name: 'IconGroup',
  parent: 'Icon',
  type: META.type.element,
  props: {
    sizes: sui.sizes,
  },
}

IconGroup.propTypes = {
  /** Class names for custom styling. */
  className: PropTypes.string,

  children: PropTypes.array,

  /** Size of the icon group. */
  size: PropTypes.oneOf(IconGroup._meta.props.sizes),
}

export default IconGroup

