import React from 'react'
import { Advertisement } from 'semantic-ui-react'

const AdvertisementExampleMobile = () => (
  <div>
    <div className='ui info ignored message'>
      Mobile ads will automatically only appear on mobile browser viewports.
    </div>
    <Advertisement unit='mobile banner' test='Mobile Banner' />
    <Advertisement unit='mobile leaderboard' test='Mobile Leaderboard' />
  </div>
)

export default AdvertisementExampleMobile
