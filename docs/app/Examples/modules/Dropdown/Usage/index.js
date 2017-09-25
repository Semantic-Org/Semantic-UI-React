import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/app/Components/ComponentDoc/ShorthandExample'

const DropdownUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Open On Focus'
      description='A dropdown that opens when it is focussed on.'
      examplePath='modules/Dropdown/Usage/DropdownExampleOpenOnFocus'
    />

    <ComponentExample
      title='Close On Blur'
      description='A dropdown that closes when it blurs'
      examplePath='modules/Dropdown/Usage/DropdownExampleCloseOnBlur'
    />

    <ComponentExample
      title='Close On Change'
      description='A multiple selection dropdown can close when the user changes its value.'
      examplePath='modules/Dropdown/Usage/DropdownExampleCloseOnChange'
    />

    <ComponentExample
      title='Select On Navigation'
      description='A dropdown can choose whether or not to change the value when navigating the menu with arrow keys.'
      examplePath='modules/Dropdown/Usage/DropdownExampleSelectOnNavigation'
    />

    <ComponentExample
      title='Uncontrolled'
      description='A dropdown can behave like an uncontrolled input.'
      examplePath='modules/Dropdown/Usage/DropdownExampleUncontrolled'
    />
    <ComponentExample
      title='No Results Message'
      description='You can change the no results message.'
      examplePath='modules/Dropdown/Usage/DropdownExampleCustomNoResultsMessage'
    />
    <ComponentExample
      description='You can remove the no results message.'
      examplePath='modules/Dropdown/Usage/DropdownExampleRemoveNoResultsMessage'
    />
    <ComponentExample
      title='Remote'
      description="A dropdown's options can be controlled from outside based on search change."
      examplePath='modules/Dropdown/Usage/DropdownExampleRemote'
    />
    <ComponentExample
      title='Allow Additions'
      description='Using allowAdditions gives users the ability to add their own options.'
      examplePath='modules/Dropdown/Usage/DropdownExampleAllowAdditions'
    />
    <ComponentExample
      description='allowAdditions can be used with multiple.'
      examplePath='modules/Dropdown/Usage/DropdownExampleMultipleAllowAdditions'
    />
    <ComponentExample
      description='You can provide a custom additionLabel as a string.'
      examplePath='modules/Dropdown/Usage/DropdownExampleAdditionLabelString'
    />
    <ComponentExample
      description='Or provide additionLabel as a component.'
      examplePath='modules/Dropdown/Usage/DropdownExampleAdditionLabelComponent'
    />
    <ComponentExample
      title='Trigger'
      description='A dropdown can render a node in place of the text.'
      examplePath='modules/Dropdown/Usage/DropdownExampleTrigger'
    />
    <ComponentExample
      examplePath='modules/Dropdown/Usage/DropdownExampleTriggerImage'
    />
    <ComponentExample
      title='Multiple Custom Label'
      description='A "multiple" dropdown can render customized label for selected items.'
      examplePath='modules/Dropdown/Usage/DropdownExampleMultipleCustomLabel'
    />
    <ComponentExample
      title='Item Content'
      description='A dropdown item can be rendered differently inside the menu.'
      examplePath='modules/Dropdown/Usage/DropdownExampleItemContent'
    />
    <ShorthandExample
      title='Search Input'
      description='A dropdown implements a search input shorthand.'
      examplePath='modules/Dropdown/Usage/DropdownExampleSearchInput'
    />
    <ComponentExample
      title='Search Query'
      description='A dropdown allows to pass you the search query.'
      examplePath='modules/Dropdown/Usage/DropdownExampleSearchQuery'
    >
      <Message info>
        This example also shows how to override default bevahiour of the search query and keep entered value after
        selection.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Upward'
      description='A dropdown can open its menu upward.'
      examplePath='modules/Dropdown/Usage/DropdownExampleUpwardSelection'
    />
    <ComponentExample
      examplePath='modules/Dropdown/Usage/DropdownExampleUpwardInline'
    />
    <ComponentExample
      examplePath='modules/Dropdown/Usage/DropdownExampleUpward'
    />

  </ExampleSection>
)

export default DropdownUsageExamples
