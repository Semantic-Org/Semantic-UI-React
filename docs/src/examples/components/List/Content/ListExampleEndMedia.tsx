import React from 'react'
import { List } from 'stardust'

const ellipsis = <span>&hellip;</span>

const items = [
  {
    key: 'sensor',
    endMedia: ellipsis,
    content: 'If we program the sensor, we can get to the SAS alarm through the haptic SQL card!',
  },
  {
    key: 'ftp',
    endMedia: ellipsis,
    content: 'Use the online FTP application, then you can input the multi-byte application!',
  },
  {
    key: 'gb',
    endMedia: ellipsis,
    content: 'The GB pixel is down, navigate the virtual interface!',
  },
]

const ListExample = () => <List items={items} />

export default ListExample
