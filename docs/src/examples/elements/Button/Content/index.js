import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ButtonContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Conditionals'
      description='Button groups can contain conditionals.'
      examplePath='elements/Button/Content/ButtonExampleConditionals'
    />
    <ComponentExample examplePath='elements/Button/Content/ButtonExampleConditionalsCustom'>
      <Message info>
        Or buttons can have their text localized, or adjusted by using the{' '}
        <code>text</code> prop.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Button/Content/ButtonExampleMultipleConditionals' />
  </ExampleSection>
)

export default ButtonContentExamples
