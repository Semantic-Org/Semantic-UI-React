import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Types = () => ( 
  <ExampleSection title='Types'>
    <ComponentExample
      title='Common Units'
      description='An advertisement can appear in common ad unit sizes.'
      examplePath='views/Advertisement/Types/AdvertisementExampleCommonUnits'
    />
    <ComponentExample
      title='Rectangle'
      description='An ad can use a common rectangle ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleRectangle'
    />
    <ComponentExample
      title='Button'
      description='An ad can use button ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleButton'
    />
    <ComponentExample
      title='Mobile'
      description='An ad can use mobile ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleMobile'
    />
    <ComponentExample
      title='Skyscraper'
      description='An ad can use skyscraper ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleSkyscraper'
    />
    <ComponentExample
      title='Leaderboard'
      description='An ad can use leaderboard ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleLeaderboard'
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
      title='Banner'
      description='An ad can use banner ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleBanner'
    />
    <ComponentExample examplePath='views/Advertisement/Types/AdvertisementExampleBannerVertical' />
    <ComponentExample examplePath='views/Advertisement/Types/AdvertisementExampleBannerTop' />
    <ComponentExample examplePath='views/Advertisement/Types/AdvertisementExampleBannerHalf' />
  
    <ComponentExample
      title='Square'
      description='An ad can use square ad unit size.'
      examplePath='views/Advertisement/Types/AdvertisementExampleSquare'
    />
  </ExampleSection>
)

export default Types
