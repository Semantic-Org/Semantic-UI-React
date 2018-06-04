import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Ad'
      description='A standard ad.'
      examplePath='views/Advertisement/Types/AdvertisementExampleStandard'
    />
    <ComponentExample
      title='Common Units'
      description='An advertisement can appear in common ad unit sizes.'
      examplePath='views/Advertisement/Types/AdvertisementExampleCommonUnits'
    >
      <Message info>
        These additional examples use the <code>test</code>
        variation to appear on the page. The Ad component is best
        used as a wrapper for third party ad network content
        like <a href='http://www.google.com/adsense/start/'>AdSense </a>
        or <a href='http://www.google.com/doubleclick/publishers/welcome/'>
        DoubleClick</a>.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Mobile'
      description='An ad can use mobile ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleMobile'
    >
      <Message info>Mobile ads will automatically only appear on mobile browser viewports.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Rectangle'
      description='An ad can use a common rectangle ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleRectangle'
    />
    <ComponentExample
      examplePath='views/Advertisement/Types/AdvertisementExampleSmallRectangle'
    />
    <ComponentExample
      examplePath='views/Advertisement/Types/AdvertisementExampleLargeRectangle'
    />
    <ComponentExample
      examplePath='views/Advertisement/Types/AdvertisementExampleVerticalRectangle'
    />
    <ComponentExample
      title='Button'
      description='An ad can use button ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleButton'
    />
    <ComponentExample
      examplePath='views/Advertisement/Types/AdvertisementExampleSmallButton'
    />
    <ComponentExample
      examplePath='views/Advertisement/Types/AdvertisementExampleSquareButton'
    />
    <ComponentExample
      title='Skyscraper'
      description='An ad can use skyscraper ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleSkyscraper'
    />
    <ComponentExample
      examplePath='views/Advertisement/Types/AdvertisementExampleWideSkyscraper'
    />
    <ComponentExample
      title='Banner'
      description='An ad can use banner ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleBanner'
    />
    <ComponentExample examplePath='views/Advertisement/Types/AdvertisementExampleBannerVertical' />
    <ComponentExample examplePath='views/Advertisement/Types/AdvertisementExampleBannerTop' />
    <ComponentExample examplePath='views/Advertisement/Types/AdvertisementExampleBannerHalf' />
    <ComponentExample
      title='Leaderboards'
      description='An ad can use leaderboard ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleLeaderboard'
    />
    <ComponentExample
      examplePath='views/Advertisement/Types/AdvertisementExampleLargeLeaderboard'
    />
    <ComponentExample
      examplePath='views/Advertisement/Types/AdvertisementExampleBillboard'
    />
    <ComponentExample
      title='Panorama'
      description='An ad can use panorama ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExamplePanorama'
    />
    <ComponentExample
      title='Netboard'
      description='An ad can use netboard ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleNetboard'
    />
    <ComponentExample
      title='Square'
      description='An ad can use square ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleSquare'
    />
    <ComponentExample
      examplePath='views/Advertisement/Types/AdvertisementExampleSmallSquare'
    />
  </ExampleSection>
)

export default Types
