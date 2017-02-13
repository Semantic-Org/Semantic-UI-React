import React from 'react'
import { Advertisement, Message } from 'semantic-ui-react'

const AdvertisementExampleMobile = () => (
  <div>
    <Message info>Mobile ads will automatically only appear on mobile browser viewports.</Message>

    <Advertisement unit='mobile banner' test='Mobile Banner' />
    <Advertisement unit='mobile leaderboard' test='Mobile Leaderboard' />
  </div>
)

export default AdvertisementExampleMobile
