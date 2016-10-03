import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'semantic-ui-react'

export default class CheckboxTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <Message info>
          All checkbox types use an input with type <code>checkbox</code>, except for type <code>radio</code>.
          {' '}Use <code>inputType</code> if you'd like to mix and match style and behavior.
          {' '}For instance, type <code>slider</code> with <code>inputType</code> radio for exclusive sliders.
        </Message>
        <ComponentExample
          title='Checkbox'
          description='A box for checking.'
          examplePath='modules/Checkbox/Types/Checkbox'
        />
        <ComponentExample
          title='Toggle'
          description='A checkbox can toggle.'
          examplePath='modules/Checkbox/Types/Toggle'
        />
        <ComponentExample
          title='Slider'
          description='A checkbox can look like a slider.'
          examplePath='modules/Checkbox/Types/Slider'
        />
        <ComponentExample
          title='Radio'
          description='A checkbox can be formatted as a radio element. This means it is an exclusive option.'
          examplePath='modules/Checkbox/Types/Radio'
        />
        <ComponentExample
          title='Radio Group'
          examplePath='modules/Checkbox/Types/RadioGroup'
        >
          <Message warning>
            Radios in a group must be
            <a href='https://facebook.github.io/react/docs/forms.html#controlled-components' target='_blank'>
              &nbsp;controlled components.
            </a>
          </Message>
        </ComponentExample>
      </ExampleSection>
    )
  }
}
