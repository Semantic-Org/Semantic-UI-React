import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendOptions } from '../common'
// friendOptions = [
//   {
//     text: 'Jenny Hess',
//     value: 'Jenny Hess',
//     image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
//   },
//   ...
// ]

const DropdownExampleInline = () => (
  <span>
    Show me posts by
    {' '}
    <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
  </span>
)

export default DropdownExampleInline
