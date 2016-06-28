import React from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

function HeaderH4(props) {
  return (
    <_Header {...props} _headerElement='h4' />
  )
}

HeaderH4._meta = {
  library: META.library.semanticUI,
  name: 'HeaderH4',
  parent: 'Header',
  type: META.type.element,
}

export default HeaderH4
