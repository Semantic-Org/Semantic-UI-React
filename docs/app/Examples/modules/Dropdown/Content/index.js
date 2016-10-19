import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ContributionPrompt from 'docs/app/Components/ComponentDoc/ContributionPrompt'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DropdownContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Header'
      description='A dropdown menu can contain a header.'
      examplePath='modules/Dropdown/Content/DropdownExampleHeader'
    />
    <ComponentExample
      title='Divider'
      description='A dropdown menu can contain dividers to separate related content.'
      examplePath='modules/Dropdown/Content/DropdownExampleDivider'
    />
    <ComponentExample
      title='Icon'
      description='A dropdown menu can contain an icon.'
      examplePath='modules/Dropdown/Content/DropdownExampleIcon'
    />
    <ComponentExample
      title='Description'
      description='A dropdown menu can contain a description.'
      examplePath='modules/Dropdown/Content/DropdownExampleDescription'
    />
    <ComponentExample
      title='Label'
      description='A dropdown menu can contain a label.'
      examplePath='modules/Dropdown/Content/DropdownExampleLabel'
    />
    <ComponentExample
      title='Message'
      description='A dropdown menu can contain a message.'
      examplePath='modules/Dropdown/Content/DropdownExampleMessage'
    />
    <ComponentExample
      title='Floated Content'
      description='A dropdown menu can contain floated content.'
      examplePath='modules/Dropdown/Content/DropdownExampleFloatedContent'
    />
    <ComponentExample
      title='Input'
      description='A dropdown menu can contain an input.'
      examplePath='modules/Dropdown/Content/DropdownExampleInput'
    >
      <ContributionPrompt>
        The example below shows the desired markup but is not functional.
        Needs to be defined via shorthand, which is not yet possible.
      </ContributionPrompt>
    </ComponentExample>
    <ComponentExample
      title='Image'
      description='A dropdown menu can contain an image.'
      examplePath='modules/Dropdown/Content/DropdownExampleImage'
    />
  </ExampleSection>
)

export default DropdownContentExamples
