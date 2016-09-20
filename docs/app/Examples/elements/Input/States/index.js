import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const InputStates = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Focus'
      description='An input field can show a user is currently interacting with it'
      examplePath='elements/Input/States/InputFocus'
    />
    <ComponentExample
      title='Loading'
      description='An icon input field can show that it is currently loading data'
      warning='Loading inputs automatically modify the inputs icon on loading state to show loading indication'
      examplePath='elements/Input/States/InputLoading'
    />
    <ComponentExample
      title='Disabled'
      description='An input field can show that it is disabled'
      examplePath='elements/Input/States/InputDisabled'
    />
    <ComponentExample
      title='Error'
      description='An input field can show that the data contains errors'
      examplePath='elements/Input/States/InputError'
    />
  </ExampleSection>
)

export default InputStates
