import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

import { Message, Icon } from 'src'

const FormTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Form'
      description='A form.'
      examplePath='collections/Form/Types/FormFormExample'
    >
      <Message info icon>
        <Icon name='pointing right' />
        <Message.Content>
          Forms also have a robust shorthand props API for generating controls wrapped in FormFields.
          See shorthand examples below.
        </Message.Content>
      </Message>
    </ComponentExample>
    <ComponentExample
      title='onSubmit'
      description='A form calls back with the serialized data on submit'
      examplePath='collections/Form/Types/FormOnSubmitExample'
    />
  </ExampleSection>
)

export default FormTypesExamples
