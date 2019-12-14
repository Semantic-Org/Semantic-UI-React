import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const ProgressStatesExamples = () => (
  <ExampleSection title='States'>
    <Message info>
      Semantic UI states <code>success</code>, <code>warning</code>, and{' '}
      <code>error</code> are only retained at 100% completion.
    </Message>
    <ComponentExample
      title='Active'
      description='A progress bar can show activity.'
      examplePath='modules/Progress/States/ProgressExampleActive'
    />
    <ComponentExample
      title='Success'
      description='A progress bar can show a success state.'
      examplePath='modules/Progress/States/ProgressExampleSuccess'
    />
    <ComponentExample
      title='Warning'
      description='A progress bar can show a warning state.'
      examplePath='modules/Progress/States/ProgressExampleWarning'
    />
    <ComponentExample
      title='Error'
      description='A progress bar can show an error state.'
      examplePath='modules/Progress/States/ProgressExampleError'
    />
    <ComponentExample
      title='Disabled'
      description='A progress bar can be disabled.'
      examplePath='modules/Progress/States/ProgressExampleDisabled'
    />
  </ExampleSection>
)

export default ProgressStatesExamples
