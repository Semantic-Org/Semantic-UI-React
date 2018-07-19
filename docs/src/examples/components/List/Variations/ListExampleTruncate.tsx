import React from 'react'
import { List } from '@stardust-ui/react'

const imgStyle = { display: 'block', width: '2rem', borderRadius: '999rem' }

const ListExample = ({ knobs }) => (
  <div style={{ width: knobs.width }}>
    <List
      debug={knobs.debug}
      truncateHeader={knobs.truncateHeader}
      truncateContent={knobs.truncateContent}
      items={[
        {
          media: <img src="public/images/avatar/small/matt.jpg" style={imgStyle} />,
          header: 'Irving Kuhic - Super long title here',
          headerMedia: '7:26:56 AM',
          content: 'Program the sensor to the SAS alarm through the haptic SQL card!',
          contentMedia: '!!',
        },
        {
          media: <img src="public/images/avatar/small/steve.jpg" style={imgStyle} />,
          header: 'Skyler Parks - Super long title here',
          headerMedia: '11:30:17 PM',
          content: 'Use the online FTP application to input the multi-byte application!',
          contentMedia: '!!',
        },
        {
          media: <img src="public/images/avatar/small/nom.jpg" style={imgStyle} />,
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
