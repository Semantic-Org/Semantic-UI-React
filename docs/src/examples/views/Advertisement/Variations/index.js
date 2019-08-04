import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Centered'
      description='An advertisement can appear centered.'
      examplePath='views/Advertisement/Variations/AdvertisementExampleCentered'
    />
    <ComponentExample
      title='Test'
      description='A advertisement can be formatted to help verify placement.'
      examplePath='views/Advertisement/Variations/AdvertisementExampleTest'
    >
      <Message info>
        You can adjust the text displayed for your test ad placement by changing
        the value of the <code>test</code> prop.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default Variations
