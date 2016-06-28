import React from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

function HeaderH3(props) {
  return (
    <_Header {...props} _headerElement='h3' />
  )
}

HeaderH3._meta = {
  library: META.library.semanticUI,
  name: 'HeaderH3',
  parent: 'Header',
  type: META.type.element,
}

export default HeaderH3
