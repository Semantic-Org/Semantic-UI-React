import React from 'react'
import { Image, Popup } from 'semantic-ui-react'

const users = [
  {
    name: 'Elliot Fu',
    bio: 'Elliot has been a member since July 2012',
    avatar: '/assets/images/avatar/small/elliot.jpg',
  },
  {
    name: 'Stevie Feliciano',
    bio: 'Stevie has been a member since August 2013',
    avatar: '/assets/images/avatar/small/stevie.jpg',
  },
  {
    name: 'Matt',
    bio: 'Matt has been a member since July 2014',
    avatar: '/assets/images/avatar/small/matt.jpg',
  },
]
/* TODO: Remove <div> wrapper after all our components will be classes */
const PopupExampleTitled = () => (
  <div>
    {users.map(user => (
      <Popup
        key={user.name}
        trigger={(
          <div>
            <Image src={user.avatar} avatar />
          </div>
        )}
        header={user.name}
        content={user.bio}
      />
    ))}
  </div>
)

export default PopupExampleTitled
