import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const RadioTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Radio'
      description='A radio for checking.'
      examplePath='addons/Radio/Types/RadioExampleRadio'
    />
    <ComponentExample
      title='Toggle'
      description='A radio can toggle.'
      examplePath='addons/Radio/Types/RadioExampleToggle'
    />
    <ComponentExample
      title='Slider'
      description='A radio can look like a slider.'
      examplePath='addons/Radio/Types/RadioExampleSlider'
    />
    <ComponentExample
      title='Radio Group'
      description='Radios can be part of a group.'
      examplePath='addons/Radio/Types/RadioExampleRadioGroup'
    >
      <Message warning>
        Radios in a group must be
        <a
          href='https://facebook.github.io/react/docs/forms.html#controlled-components'
          rel='noopener noreferrer'
          target='_blank'
        >
          &nbsp;controlled components.
        </a>
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default RadioTypesExamples
