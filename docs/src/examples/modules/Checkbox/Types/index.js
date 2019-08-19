import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const CheckboxTypesExamples = () => (
  <ExampleSection title='Types'>
    <Message info>
      All checkbox types use an input with type <code>checkbox</code> unless{' '}
      <code>type</code> is provided. Use <code>type</code> if you'd like to mix
      and match style and behavior. For instance, <code>slider</code> with{' '}
      <code>type</code> radio for exclusive sliders.
    </Message>

    <ComponentExample
      title='Checkbox'
      description='A box for checking.'
      examplePath='modules/Checkbox/Types/CheckboxExampleCheckbox'
    />
    <ShorthandExample
      description='You can define a label with a props object.'
      examplePath='modules/Checkbox/Types/CheckboxExampleShorthandObject'
    />
    <ShorthandExample
      description='You can define a label by passing your own element.'
      examplePath='modules/Checkbox/Types/CheckboxExampleShorthandElement'
    />

    <ComponentExample
      title='Toggle'
      description='A checkbox can toggle.'
      examplePath='modules/Checkbox/Types/CheckboxExampleToggle'
    />

    <ComponentExample
      title='Slider'
      description='A checkbox can look like a slider.'
      examplePath='modules/Checkbox/Types/CheckboxExampleSlider'
    />

    <ComponentExample
      title='Radio'
      description='A checkbox can be formatted as a radio element. This means it is an exclusive option.'
      examplePath='modules/Checkbox/Types/CheckboxExampleRadio'
    />

    <ComponentExample
      title='Radio Group'
      examplePath='modules/Checkbox/Types/CheckboxExampleRadioGroup'
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

export default CheckboxTypesExamples
