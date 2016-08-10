import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class ProgressStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <Message info>
          Semantic UI states <code>success</code>, <code>warning</code>, and <code>error</code>
          {' '}are only retained at 100% completion.
        </Message>
        <ComponentExample
          title='Active'
          description='A progress bar can show activity'
          examplePath='modules/Progress/States/Active'
        />
        <ComponentExample
          title='Success'
          description='A progress bar can show a success state.'
          examplePath='modules/Progress/States/Success'
        />
        <ComponentExample
          title='Warning'
          description='A progress bar can show a warning state.'
          examplePath='modules/Progress/States/Warning'
        />
        <ComponentExample
          title='Error'
          description='A progress bar can show an error state.'
          examplePath='modules/Progress/States/Error'
        />
        <ComponentExample
          title='Disabled'
          description='A progress bar can be disabled.'
          examplePath='modules/Progress/States/Disabled'
        />
      </ExampleSection>
    )
  }
}
