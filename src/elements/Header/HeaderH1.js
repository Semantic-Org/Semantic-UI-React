import React from 'react'
import { META } from '../../lib'
import _Header from './_Header'

function HeaderH1(props) {
  return (
    <_Header {...props} _headerElement='h1' />
  )
}

HeaderH1._meta = {
  name: 'HeaderH1',
  parent: 'Header',
  type: META.TYPES.ELEMENT,
}

export default HeaderH1
