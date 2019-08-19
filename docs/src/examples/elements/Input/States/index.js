import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const InputStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Focus'
      description='An input field can show a user is currently interacting with it.'
      examplePath='elements/Input/States/InputExampleFocus'
    />
    <ComponentExample
      title='Loading'
      description='An icon input field can show that it is currently loading data.'
      examplePath='elements/Input/States/InputExampleLoading'
    >
      <Message>
        Loading inputs automatically modify the input's icon on loading state to
        show loading indication.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Input/States/InputExampleLeftLoading' />
    <ComponentExample
      description='An input field can show that it is currently loading data without an icon, too.'
      examplePath='elements/Input/States/InputExampleLoadingWithoutIcon'
    />
    <ComponentExample
      title='Disabled'
      description='An input field can show that it is disabled.'
      examplePath='elements/Input/States/InputExampleDisabled'
    />
    <ComponentExample
      title='Error'
      description='An input field can show that the data contains errors.'
      examplePath='elements/Input/States/InputExampleError'
    />
  </ExampleSection>
)

export default InputStatesExamples
