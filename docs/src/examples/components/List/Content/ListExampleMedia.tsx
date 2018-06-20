import React from 'react'
import { List } from 'stardust'
import faker from 'faker'

const imgStyle = { display: 'block', width: '2rem', borderRadius: '999rem' }
const getAvatar = () => <img src={faker.internet.avatar()} style={imgStyle} />

const items = [
  {
    key: 'irving',
    media: getAvatar(),
    header: 'Irving Kuhic',
    headerMedia: '7:26:56 AM',
    content: 'If we program the sensor, we can get to the SAS alarm through the haptic SQL card!',
  },
  {
    key: 'skyler',
    media: getAvatar(),
    header: 'Skyler Parks',
    headerMedia: '11:30:17 PM',
    content: 'Use the online FTP application, then you can input the multi-byte application!',
  },
  {
    key: 'dante',
    media: getAvatar(),
    header: 'Dante Schneider',
    headerMedia: '5:22:40 PM',
    content: 'The GB pixel is down, navigate the virtual interface!',
  },
]

const ListExample = () => <List items={items} />

export default ListExample
