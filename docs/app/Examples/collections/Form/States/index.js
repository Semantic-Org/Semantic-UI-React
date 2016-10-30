import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const FormStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Loading'
      description='If a form is in loading state, it will automatically show a loading indicator.'
      examplePath='collections/Form/States/FormLoadingExample'
    />
    <ComponentExample
      title='Success'
      description='If a form is in an success state, it will automatically show any success message blocks.'
      examplePath='collections/Form/States/FormSuccessExample'
    />
    <ComponentExample
      title='Error'
      description='If a form is in an error state, it will automatically show any error message blocks.'
      examplePath='collections/Form/States/FormErrorExample'
    />
    <ComponentExample
      title='Warning'
      description='If a form is in warning state, it will automatically show any warning message block.'
      examplePath='collections/Form/States/FormWarningExample'
    />
    <ComponentExample
      title='Field Error'
      description='Individual fields may display an error state'
      examplePath='collections/Form/States/FormFieldErrorExample'
    />
    <ComponentExample
      title='Disabled Field'
      description='Individual fields may be disabled'
      examplePath='collections/Form/States/FormFieldDisabledExample'
    />
    <ComponentExample
      title='Read-Only Field'
      description='Individual fields may be read only'
      examplePath='collections/Form/States/FormFieldReadOnlyExample'
    />
  </ExampleSection>
)

export default FormStatesExamples
