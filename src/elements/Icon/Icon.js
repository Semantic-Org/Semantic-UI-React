import React from 'react'
import META from '../../utils/Meta'
import _Icon from './_Icon'
import IconGroup from './IconGroup'

function Icon(props) {
  return (
    <_Icon {...props} />
  )
}


Icon._meta = {
  library: META.library.semanticUI,
  name: 'Icon',
  type: META.type.element,
}

Icon.Group = IconGroup

export default Icon
