import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const AccordionAdvancedExamples = () => (
  <ExampleSection title='Advanced'>
    <ComponentExample
      title='Nested Accordions'
      description='An accordion can have multiple levels of nested content.'
      examplePath='modules/Accordion/Advanced/AccordionExampleNested'
    />
    <ComponentExample
      title='Form Fields'
      description={[
        'An accordion can be used anywhere where content can be shown or hidden. For example, to show optional form',
        'fields.',
      ].join(' ')}
      examplePath='modules/Accordion/Advanced/AccordionExampleForm'
    />
    <ComponentExample
      title='Accordion Menu'
      description='An accordion can be used to create content drawers inside a menu.'
      examplePath='modules/Accordion/Advanced/AccordionExampleMenu'
    />
    <ComponentExample
      title='Shorthand'
      description='Panels of Accordion can be rendered via shorthand prop.'
      examplePath='modules/Accordion/Advanced/AccordionExampleShorthand'
    />
    <ComponentExample
      title='Icon shorthand'
      description='An accordion title can have a customizable icon.'
      examplePath='modules/Accordion/Advanced/AccordionExampleIconShorthand'
    />
  </ExampleSection>
)

export default AccordionAdvancedExamples
