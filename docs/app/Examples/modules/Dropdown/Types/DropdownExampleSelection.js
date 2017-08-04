import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendOptions } from '../common'
// friendOptions = [
//   {
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
//   },
//  ...
// ]


const DropdownExampleSelection = () => (
  <Dropdown placeholder='Select Friend' fluid selection options={friendOptions} />
)

export default DropdownExampleSelection
