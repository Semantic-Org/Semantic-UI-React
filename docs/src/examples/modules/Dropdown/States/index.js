import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const DropdownStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Loading'
      description='A dropdown can show that it is currently loading data.'
      examplePath='modules/Dropdown/States/DropdownExampleLoading'
    />
    <ComponentExample
      title='Error'
      description='An errored dropdown can alert a user to a problem.'
      examplePath='modules/Dropdown/States/DropdownExampleError'
    />
    <ComponentExample
      title='Active'
      description='An active dropdown has its menu open.'
      examplePath='modules/Dropdown/States/DropdownExampleActive'
    />
    <ComponentExample
      title='Disabled'
      description='A disabled dropdown menu does not allow user interaction.'
      examplePath='modules/Dropdown/States/DropdownExampleDisabled'
    />
    <ComponentExample
      description='A disabled dropdown item does not allow user interaction.'
      examplePath='modules/Dropdown/States/DropdownExampleDisabledItem'
    />
  </ExampleSection>
)

export default DropdownStatesExamples
