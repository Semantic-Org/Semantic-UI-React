import React from 'react'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

const FormStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Loading'
      description='If a form is in loading state, it will automatically show a loading indicator.'
      examplePath='collections/Form/States/FormExampleLoading'
    />
    <ComponentExample
      title='Success'
      description='If a form is in an success state, it will automatically show any success message blocks.'
      examplePath='collections/Form/States/FormExampleSuccess'
    />
    <ComponentExample
      title='Error'
      description='If a form is in an error state, it will automatically show any error message blocks.'
      examplePath='collections/Form/States/FormExampleError'
    />
    <ComponentExample
      title='Warning'
      description='If a form is in warning state, it will automatically show any warning message block.'
      examplePath='collections/Form/States/FormExampleWarning'
    />
    <ComponentExample
      title='Field Error'
      description='Individual fields may display an error state.'
      examplePath='collections/Form/States/FormExampleFieldError'
    />
    <ComponentExample examplePath='collections/Form/States/FormExampleFieldErrorLabel' />
    <ComponentExample
      title='Disabled Field'
      description='Individual fields may be disabled.'
      examplePath='collections/Form/States/FormExampleFieldDisabled'
    />
    <ComponentExample
      title='Read-Only Field'
      description='Individual fields may be read only.'
      examplePath='collections/Form/States/FormExampleFieldReadOnly'
    />
  </ExampleSection>
)

export default FormStatesExamples
