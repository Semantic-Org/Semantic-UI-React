import React from 'react'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

import { Message, Icon } from 'src'

const FormTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Form'
      description='A form.'
      examplePath='collections/Form/Types/FormExampleForm'
    >
      <Message info icon>
        <Icon name='pointing right' />
        <Message.Content>
          Forms also have a robust shorthand props API for generating controls wrapped in
          FormFields. See shorthand examples below.
        </Message.Content>
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default FormTypesExamples
