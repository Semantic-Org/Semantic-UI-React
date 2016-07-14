import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const RailExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Rail'
        description='A rail can be presented on the left or right side of a container'
        examplePath='elements/Rail/Types/RailExample'
      />

      <ComponentExample
        title='Internal'
        description='A rail can attach itself to the inside of a container'
        examplePath='elements/Rail/Types/RailInternalExample'
      />

      <ComponentExample
        title='Dividing'
        description='A rail can create a division between itself and a container'
        examplePath='elements/Rail/Types/RailDividingExample'
      />
    </ExampleSection>

    <ExampleSection title='Variations'>
      <ComponentExample
        title='Attached'
        description='A rail can appear attached to the main viewport'
        examplePath='elements/Rail/Variations/RailAttachedExample'
      />

      <ComponentExample
        title='Attached'
        examplePath='elements/Rail/Variations/RailAttachedInternalExample'
      />

      <ComponentExample
        title='Close'
        description='A rail can appear closer to the main viewport'
        examplePath='elements/Rail/Variations/RailCloseExample'
      />

      <ComponentExample
        examplePath='elements/Rail/Variations/RailVeryCloseExample'
      />

      <ComponentExample
        title='Size'
        description='A rail can have different sizes'
        examplePath='elements/Rail/Variations/RailSizeExample'
      />
    </ExampleSection>
  </div>
)
export default RailExamples
