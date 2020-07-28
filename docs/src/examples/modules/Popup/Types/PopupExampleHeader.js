import React from 'react'
import { Image, Popup } from 'semantic-ui-react'

const users = [
  {
    name: 'Elliot Fu',
    bio: 'Elliot has been a member since July 2012',
    avatar: '/images/avatar/small/elliot.jpg',
  },
  {
    name: 'Stevie Feliciano',
    bio: 'Stevie has been a member since August 2013',
    avatar: '/images/avatar/small/stevie.jpg',
  },
  {
    name: 'Matt',
    bio: 'Matt has been a member since July 2014',
    avatar: '/images/avatar/small/matt.jpg',
  },
]

const PopupExampleHeader = () => (
  <>
    {users.map((user) => (
      <Popup
        content={user.bio}
        key={user.name}
        header={user.name}
        trigger={<Image src={user.avatar} avatar />}
      />
    ))}
  </>
)

export default PopupExampleHeader
