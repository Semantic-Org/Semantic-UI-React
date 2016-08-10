import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'stardust'

export default class AccordionTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Accordion'
          description='A standard Accordion.'
          examplePath='modules/Accordion/Types/Accordion'
        />
        <ComponentExample
          title='Panels Prop'
          description='Accordion panels can be define using the `panels` prop.'
          examplePath='modules/Accordion/Types/PanelsProp'
        >
          <Message info>
            Panel objects can define an <code>active</code> key to open/close the panel.
            {' '}They can also define an <code>onClick</code> key to be applied to the <code>Accordion.Title</code>.
          </Message>
        </ComponentExample>
        <ComponentExample
          title='Active Index'
          description='The `activeIndex` prop controls which panel is open.'
          examplePath='modules/Accordion/Types/ActiveIndex'
        >
          <Message info>
            An <code>active</code> prop on an
            {' '}<code>&lt;Accordion.Title&gt;</code> or <code>&lt;Accordion.Content&gt;</code>
            {' '}will override the <code>&lt;Accordion&gt;</code> <code>&lt;activeIndex&gt;</code> prop.
          </Message>
        </ComponentExample>
        <ComponentExample
          title='Styled'
          description='A styled accordion adds basic formatting'
          examplePath='modules/Accordion/Types/Styled'
        />
      </ExampleSection>
    )
  }
}
