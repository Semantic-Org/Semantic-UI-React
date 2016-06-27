import React from 'react'
import META from '../../utils/Meta'
import _Header from './_Header'

function HeaderH5(props) {
  return (
    <_Header {...props} _sdClass='sd-header-h5' _headerElement='h5' />
  )
}

HeaderH5._meta = {
  library: META.library.semanticUI,
  name: 'HeaderH5',
  parent: 'Header',
  type: META.type.element,
}

export default HeaderH5
