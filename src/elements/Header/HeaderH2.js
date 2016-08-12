import React from 'react'
import { META } from '../../lib'
import _Header from './_Header'

function HeaderH2(props) {
  return (
    <_Header {...props} _headerElement='h2' />
  )
}

HeaderH2._meta = {
  name: 'HeaderH2',
  parent: 'Header',
  type: META.TYPES.ELEMENT,
}

export default HeaderH2
