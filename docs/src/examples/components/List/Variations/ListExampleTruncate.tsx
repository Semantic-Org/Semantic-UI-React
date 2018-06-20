import React from 'react'
import { List } from 'stardust'
import faker from 'faker'

const imgStyle = { display: 'block', width: '2rem', borderRadius: '999rem' }
const getAvatar = () => <img src={faker.internet.avatar()} style={imgStyle} />

const ListExample = ({ knobs }) => (
  <div style={{ width: knobs.width }}>
    <List
      debug={knobs.debug}
      truncateHeader={knobs.truncateHeader}
      truncateContent={knobs.truncateContent}
      items={[
        {
          media: getAvatar(),
          header: 'Irving Kuhic - Super long title here',
          headerMedia: '7:26:56 AM',
          content:
            'If we program the sensor, we can get to the SAS alarm through the haptic SQL card!',
          contentMedia: '!!',
        },
        {
          media: getAvatar(),
          header: 'Skyler Parks - Super long title here',
          headerMedia: '11:30:17 PM',
          content: 'Use the online FTP application, then you can input the multi-byte application!',
          contentMedia: '!!',
        },
        {
          media: getAvatar(),
          header: 'Dante Schneider - Super long title here',
          headerMedia: '5:22:40 PM',
          content: 'The GB pixel is down, navigate the virtual interface!',
          contentMedia: '!!',
        },
      ]}
    />
  </div>
)

export default ListExample
