import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'stardust'

const DropdownExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Dropdown'
        description='A dropdown menu'
        examplePath='modules/Dropdown/Types/Dropdown'
      />
      <ComponentExample
        title='Selection'
        description='A dropdown can be used to select between choices in a form'
        examplePath='modules/Dropdown/Types/Selection'
      >
        <Message info>
          Selection dropdowns must use the <code>options</code> prop, instead of sub component markup.
        </Message>
      </ComponentExample>
    </ExampleSection>
    <ExampleSection title='States'>
      <ComponentExample
        title='Disabled'
        description='A disabled dropdown menu or item does not allow user interaction'
        examplePath='modules/Dropdown/States/Disabled'
      />
    </ExampleSection>
  </div>
)

export default DropdownExamples
