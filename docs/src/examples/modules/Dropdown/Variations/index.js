import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ContributionPrompt from 'docs/src/components/ComponentDoc/ContributionPrompt'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const DropdownVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Scrolling'
      description='A dropdown can have its menu scroll.'
      examplePath='modules/Dropdown/Variations/DropdownExampleScrolling'
    />
    <ComponentExample examplePath='modules/Dropdown/Variations/DropdownExampleSearchInMenuScrolling'>
      <ContributionPrompt>
        Dropdown state is not fully managed when using the subcomponent API. The
        shorthand props API fully manages state but needs to be extended to
        support the markup shown here.
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
    />
    <ComponentExample examplePath='modules/Dropdown/Variations/DropdownExampleMenuDirectionLeft'>
      <ContributionPrompt>
        The example below shows (roughly) the desired markup but is not
        functional since we don't currently support nested dropdowns.
      </ContributionPrompt>
    </ComponentExample>
  </ExampleSection>
)

export default DropdownVariationsExamples
