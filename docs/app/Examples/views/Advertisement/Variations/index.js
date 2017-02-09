import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Centered'
      description='An advertisement can appear centered'
      examplePath='views/Advertisement/Variations/AdvertisementExampleCentered'
    />
    <ComponentExample
      title='Test'
      description='A advertisement can be formatted to help verify placement'
      examplePath='views/Advertisement/Variations/AdvertisementExampleTest'
    />
  </ExampleSection>
)

export default Variations
