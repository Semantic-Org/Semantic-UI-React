import React from 'react'
import { META } from '../../lib'
import _Header from './_Header'

function HeaderH5(props) {
  return (
    <_Header {...props} _headerElement='h5' />
  )
}

HeaderH5._meta = {
  name: 'HeaderH5',
  parent: 'Header',
  type: META.TYPES.ELEMENT,
}

export default HeaderH5
