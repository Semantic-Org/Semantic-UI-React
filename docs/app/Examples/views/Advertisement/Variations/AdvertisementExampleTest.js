import React from 'react'
import { Advertisement, Message } from 'semantic-ui-react'

const AdvertisementExampleTest = () => (
  <div>
    <Message info>
      You can adjust the text displayed for your test ad placement by changing the value of <code>test</code> prop.
    </Message>

    <Advertisement unit='medium rectangle' test='Ad Unit 1' />
    <Advertisement unit='large rectangle' test='Ad Unit 2' />
  </div>
)

export default AdvertisementExampleTest
