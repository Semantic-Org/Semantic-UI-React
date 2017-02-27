import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const AccordionUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Active Index'
      description='The `activeIndex` prop controls which panel is open.'
      examplePath='modules/Accordion/Usage/AccordionExampleActiveIndex'
    />
    <ComponentExample
      title='Exclusive'
      description='An accordion can have multiple panels open at the same time.'
      examplePath='modules/Accordion/Usage/AccordionExampleExclusive'
    />
    <ComponentExample
      title='Panels Prop with custom title and content'
      examplePath='modules/Accordion/Usage/AccordionExamplePanelsPropWithCustomTitleAndContent'
    />
  </ExampleSection>
)

export default AccordionUsageExamples
