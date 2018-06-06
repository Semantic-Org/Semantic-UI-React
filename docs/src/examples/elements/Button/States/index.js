import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ButtonStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Active'
      description='A button can show it is currently the active user selection.'
      examplePath='elements/Button/States/ButtonExampleActive'
    />
    <ComponentExample
      title='Disabled'
      description='A button can show it is currently unable to be interacted with.'
      examplePath='elements/Button/States/ButtonExampleDisabled'
    />
    <ComponentExample
      title='Loading'
      description='A button can show a loading indicator.'
      examplePath='elements/Button/States/ButtonExampleLoading'
    />
  </ExampleSection>
)

export default ButtonStatesExamples
