import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DropdownTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Dropdown'
      description='A dropdown.'
      examplePath='modules/Dropdown/Types/DropdownExampleDropdown'
    />
    <ComponentExample
      title='Selection'
      description='A dropdown can be used to select between choices in a form.'
      examplePath='modules/Dropdown/Types/DropdownExampleSelection'
    />
    <ComponentExample
      title='Search Selection'
      description='A selection dropdown can allow a user to search through a large list of choices.'
      examplePath='modules/Dropdown/Types/DropdownExampleSearchSelection'
    />
    <ComponentExample
      examplePath='modules/Dropdown/Types/DropdownExampleSearchSelectionTwo'
    />
    {/* Possibly add state selection example. */}
    <ComponentExample
      title='Multiple Selection'
      description='A selection dropdown can allow multiple selections.'
      examplePath='modules/Dropdown/Types/DropdownExampleMultipleSelection'
    />
    <ComponentExample
      title='Multiple Search Selection'
      description='A selection dropdown can allow multiple search selections.'
      examplePath='modules/Dropdown/Types/DropdownExampleMultipleSearchSelection'
    />
    <ComponentExample
      examplePath='modules/Dropdown/Types/DropdownExampleMultipleSearchSelectionTwo'
    />
    <ComponentExample
      title='Search Dropdown'
      description='A dropdown can be searchable.'
      examplePath='modules/Dropdown/Types/DropdownExampleSearchDropdown'
    />
    <ComponentExample
      title='Search In-Menu'
      description='A dropdown can include a search prompt inside its menu.'
      examplePath='modules/Dropdown/Types/DropdownExampleSearchInMenu'
    />
    <ComponentExample
      description='A dropdown with multiple selections can include a search prompt inside its menu.'
      examplePath='modules/Dropdown/Types/DropdownExampleMultipleSearchInMenu'
    />
    <ComponentExample
      title='Inline'
      description='A dropdown can be formatted to appear inline in other content.'
      examplePath='modules/Dropdown/Types/DropdownExampleInline'
    />
    <ComponentExample
      examplePath='modules/Dropdown/Types/DropdownExampleInlineTwo'
    />
    <ComponentExample
      title='Pointing'
      description='A dropdown can be formatted so that its menu is pointing.'
      examplePath='modules/Dropdown/Types/DropdownExamplePointing'
    />
    <ComponentExample
      examplePath='modules/Dropdown/Types/DropdownExamplePointingTwo'
    />
    <ComponentExample
      title='Floating'
      description='A dropdown menu can appear to be floating below an element.'
      examplePath='modules/Dropdown/Types/DropdownExampleFloating'
    />
    <ComponentExample
      title='Simple'
      description='A simple dropdown can open without Javascript.'
      examplePath='modules/Dropdown/Types/DropdownExampleSimple'
    />
  </ExampleSection>
)

export default DropdownTypesExamples
