import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message, Step } from 'stardust'

// TODO: Update <Message> usage after v1 API

const StepExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Step'
        description='A single step'
        examplePath='elements/Step/Types/StepExample'
      />
    </ExampleSection>

    <ExampleSection title='Groups'>
      <ComponentExample
        title='Steps'
        description='A set of steps'
        examplePath='elements/Step/Groups/StepGroupExample'
      >
      <Message className='positive' icon='mobile' header='Responsive Element'>
        Steps will automatically stack on mobile. To make steps automatically stack for tablet use the <b>tablet
        stackable</b> variation.
      </Message>
        </ComponentExample>
    </ExampleSection>
  </div>
)

export default StepExamples
