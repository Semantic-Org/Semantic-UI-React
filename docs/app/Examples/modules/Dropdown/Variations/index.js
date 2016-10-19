import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'semantic-ui-react'

const DropdownVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Scrolling'
      description='A dropdown can have its menu scroll.'
      examplePath='modules/Dropdown/Variations/DropdownExampleScrolling'
    />
    <ComponentExample
      examplePath='modules/Dropdown/Variations/DropdownExampleSearchInMenuScrolling'
    >
      <Message warning>
        The example below shows the desired markup but is not functional.
        Needs to be defined via shorthand, which is not yet possible.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Compact'
      description='A compact dropdown has no minimum width.'
      examplePath='modules/Dropdown/Variations/DropdownExampleCompact'
    />
    <ComponentExample
      title='Fluid'
      description='A dropdown can take the full width of its parent.'
      examplePath='modules/Dropdown/Variations/DropdownExampleFluid'
    />
    <ComponentExample
      title='Menu Direction'
      description='A dropdown menu or sub-menu can specify the direction it should open.'
      examplePath='modules/Dropdown/Variations/DropdownExampleMenuDirection'
    >
      <Message warning>
        The example below shows (roughly) the desired markup but is not functional
        since we don't currently support nested dropdowns.
      </Message>
    </ComponentExample>
    <ComponentExample
      examplePath='modules/Dropdown/Variations/DropdownExampleMenuDirectionLeft'
    >
      <Message warning>
        The example below shows (roughly) the desired markup but is not functional
        since we don't currently support nested dropdowns.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default DropdownVariationsExamples
