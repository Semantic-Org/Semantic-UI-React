import React from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

function HeaderH2(props) {
  return (
    <_Header {...props} _headerElement='h2' />
  )
}

HeaderH2._meta = {
  library: META.library.semanticUI,
  name: 'HeaderH2',
  parent: 'Header',
  type: META.type.element,
}

export default HeaderH2
