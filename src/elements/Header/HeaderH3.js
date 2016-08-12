import React from 'react'
import { META } from '../../lib'
import _Header from './_Header'

function HeaderH3(props) {
  return (
    <_Header {...props} _headerElement='h3' />
  )
}

HeaderH3._meta = {
  name: 'HeaderH3',
  parent: 'Header',
  type: META.TYPES.ELEMENT,
}

export default HeaderH3
