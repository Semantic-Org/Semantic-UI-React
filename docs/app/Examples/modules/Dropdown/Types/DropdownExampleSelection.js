import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendItems } from '../common'
// friendItems = [
//   {
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
//   },
//  ...
// ]

const DropdownExampleSelection = () => (
  <Dropdown placeholder='Select Friend' fluid selection items={friendItems} />
)

export default DropdownExampleSelection
