import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import {
  getUnhandledProps,
} from '../../utils/propUtils'
import _Icon from './_Icon'

function IconGroup(props) {
  const {
    children,
  } = props

  const rest = getUnhandledProps(IconGroup, props)

  return (
    <_Icon {...rest} _sdClass='sd-icon-group' _iconClass='icons'>
      {children}
    </_Icon>
  )
}


IconGroup._meta = {
  library: META.library.semanticUI,
  name: 'IconGroup',
  parent: 'Icon',
  type: META.type.element,
}


IconGroup.propTypes = {
  /** Class names for custom styling. */
  className: PropTypes.string,
  children: PropTypes.array,
}

export default IconGroup
