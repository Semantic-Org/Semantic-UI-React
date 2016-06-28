import React from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

function HeaderH1(props) {
  return (
    <_Header {...props} _headerElement='h1' />
  )
}

HeaderH1._meta = {
  library: META.library.semanticUI,
  name: 'HeaderH1',
  parent: 'Header',
  type: META.type.element,
}

export default HeaderH1
