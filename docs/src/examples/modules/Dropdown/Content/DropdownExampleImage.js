import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  Dropdown,
} from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
]

const DropdownExampleImage = () => (
  <Dropdown
    text='Add user'
    icon='add user'
    floating
    labeled
    button
    className='icon'
  >
    <DropdownMenu>
      <DropdownHeader content='People You Might Know' />
      {friendOptions.map((option) => (
        <DropdownItem key={option.value} {...option} />
      ))}
    </DropdownMenu>
  </Dropdown>
)

export default DropdownExampleImage
