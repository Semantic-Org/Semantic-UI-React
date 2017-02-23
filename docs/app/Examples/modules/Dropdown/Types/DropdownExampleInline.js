import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { friendItems } from '../common'
// friendItems = [
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
    <Dropdown inline items={friendItems} defaultValue={friendItems[0].value} />
  </span>
)

export default DropdownExampleInline
