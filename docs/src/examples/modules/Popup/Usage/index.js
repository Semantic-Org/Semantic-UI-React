import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PopupUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Hover'
      description='A popup can be triggered on hover.'
      examplePath='modules/Popup/Usage/PopupExampleHover'
    />
    <ComponentExample
      title='Click'
      description='A popup can be triggered on click.'
      examplePath='modules/Popup/Usage/PopupExampleClick'
    />
    <ComponentExample
      title='Focus'
      description='A popup can be triggered on focus.'
      examplePath='modules/Popup/Usage/PopupExampleFocus'
    />
    <ComponentExample
      title='Nesting'
      description='A popup can be nested inside another.'
      examplePath='modules/Popup/Usage/PopupExampleNested'
    />
    <ComponentExample
      title='Multiple'
      description='A popup can be triggered on multiple events.'
      examplePath='modules/Popup/Usage/PopupExampleMultiple'
    />
    <ComponentExample
      title='Controlled'
      description='A popup can have its visibility controlled from outside.'
      examplePath='modules/Popup/Usage/PopupExampleControlled'
    />
    <ComponentExample
      title='Context'
      description='A popup can open over a DOM node when using a trigger.'
      examplePath='modules/Popup/Usage/PopupExampleContext'
    />
    <ComponentExample
      description='A popup can open over a DOM node when controlled.'
      examplePath='modules/Popup/Usage/PopupExampleContextControlled'
    />
  </ExampleSection>
)

export default PopupUsageExamples
