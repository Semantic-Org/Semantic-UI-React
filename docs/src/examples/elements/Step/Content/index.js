import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const StepContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Description'
      description='A step can contain a description.'
      examplePath='elements/Step/Content/StepExampleDescription'
    />
    <ShorthandExample examplePath='elements/Step/Content/StepExampleDescriptionShorthand' />

    <ComponentExample
      title='Icon'
      description='A step can contain an icon.'
      examplePath='elements/Step/Content/StepExampleIcon'
    />
    <ShorthandExample examplePath='elements/Step/Content/StepExampleIconShorthand' />

    <ComponentExample
      title='Link'
      description='A step can link.'
      examplePath='elements/Step/Content/StepExampleLink'
    />
    <ComponentExample examplePath='elements/Step/Content/StepExampleLinkHref' />
    <ComponentExample examplePath='elements/Step/Content/StepExampleLinkClickable' />
  </ExampleSection>
)

export default StepContentExamples
