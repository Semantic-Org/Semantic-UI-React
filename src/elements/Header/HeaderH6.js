import React from 'react'
import { META } from '../../lib'
import _Header from './_Header'

function HeaderH6(props) {
  return (
    <_Header {...props} _headerElement='h6' />
  )
}

HeaderH6._meta = {
  name: 'HeaderH6',
  parent: 'Header',
  type: META.TYPES.ELEMENT,
}

export default HeaderH6
