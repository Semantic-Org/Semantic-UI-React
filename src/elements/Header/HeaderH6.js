import React from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

function HeaderH6(props) {
  return (
    <_Header {...props} _headerElement='h6' />
  )
}

HeaderH6._meta = {
  library: META.library.semanticUI,
  name: 'HeaderH6',
  parent: 'Header',
  type: META.type.element,
}

export default HeaderH6
