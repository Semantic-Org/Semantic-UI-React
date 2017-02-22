import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'semantic-ui-react'

const AccordionUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Active Index'
      description='The `activeIndex` prop controls which panel is open.'
      examplePath='modules/Accordion/Usage/AccordionExampleActiveIndex'
    >
      <Message info>
        An <code>active</code> prop on an
        {' '}<code>&lt;Accordion.Title&gt;</code> or <code>&lt;Accordion.Content&gt;</code>
        {' '}will override the <code>&lt;Accordion&gt;</code> <code>&lt;activeIndex&gt;</code> prop.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Panels Prop with custom title and content'
      examplePath='modules/Accordion/Usage/AccordionExamplePanelsPropWithCustomTitleAndContent'
    />
  </ExampleSection>
)

export default AccordionUsageExamples
