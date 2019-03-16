import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const CheckboxStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Read Only'
      description='A checkbox can be read-only and unable to change states.'
      examplePath='modules/Checkbox/States/CheckboxExampleReadOnly'
    />
    <ComponentExample
      title='Checked'
      description='A checkbox can be checked.'
      examplePath='modules/Checkbox/States/CheckboxExampleChecked'
    >
      <Message>
        Use{' '}
        <a
          href='https://facebook.github.io/react/docs/forms.html#default-value'
          rel='noopener noreferrer'
          target='_blank'
        >
          <code>defaultChecked</code>
        </a>{' '}
        as you normally would to set default form values.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Indeterminate'
      description='A checkbox can be indeterminate.'
      examplePath='modules/Checkbox/States/CheckboxExampleIndeterminate'
    />
    <ComponentExample
      title='Disabled'
      description='A checkbox can be read-only and unable to change states.'
      examplePath='modules/Checkbox/States/CheckboxExampleDisabled'
    />
  </ExampleSection>
)

export default CheckboxStatesExamples
