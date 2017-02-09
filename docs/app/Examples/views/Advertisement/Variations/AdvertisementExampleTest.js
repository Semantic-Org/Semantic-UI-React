import React from 'react'
import { Advertisement } from 'semantic-ui-react'

const AdvertisementExampleTest = () => (
  <div>
    <div className='ui info ignored message'>
      You can adjust the text displayed for your test ad placement by changing the value of <code>data-text</code>.
    </div>
    <Advertisement unit='medium rectangle' test='Advertisement Unit 1' />
    <Advertisement unit='large rectangle' test='Advertisement Unit 2' />
    <Advertisement unit='banner' test='Advertisement Unit 3' />
  </div>
)

export default AdvertisementExampleTest
