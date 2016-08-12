import React from 'react'
import { META } from '../../lib'
import _Header from './_Header'

function HeaderH4(props) {
  return (
    <_Header {...props} _headerElement='h4' />
  )
}

HeaderH4._meta = {
  name: 'HeaderH4',
  parent: 'Header',
  type: META.TYPES.ELEMENT,
}

export default HeaderH4
