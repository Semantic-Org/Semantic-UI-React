import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const AccordionTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Sticking to Adjacent Context'
      description='Sticky content attaches itself to the viewport when it is passed'
      examplePath='modules/Sticky/Types/StickyAdjacentContextExample'
    />
    <ComponentExample
      title='Sticking to Adjacent Context'
      description='Sticky content attaches itself to the viewport when it is passed'
      examplePath='modules/Sticky/Types/StickyPushingExample'
    />
    <div style={{ height: 1000 }}></div>
  </ExampleSection>
)

export default AccordionTypesExamples
