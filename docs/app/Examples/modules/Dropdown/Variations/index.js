import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ContributionPrompt from 'docs/app/Components/ComponentDoc/ContributionPrompt'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'


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
      <ContributionPrompt>
        The example below shows the desired markup but is not functional.
        Needs to be defined via shorthand, which is not yet possible.
      </ContributionPrompt>
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
      <ContributionPrompt>
        The example below shows (roughly) the desired markup but is not functional
        since we don't currently support nested dropdowns.
      </ContributionPrompt>
    </ComponentExample>
    <ComponentExample
      examplePath='modules/Dropdown/Variations/DropdownExampleMenuDirectionLeft'
    >
      <ContributionPrompt>
        The example below shows (roughly) the desired markup but is not functional
        since we don't currently support nested dropdowns.
      </ContributionPrompt>
    </ComponentExample>
  </ExampleSection>
)

export default DropdownVariationsExamples
