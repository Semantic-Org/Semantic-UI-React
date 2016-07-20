import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

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

      <ComponentExample
        title='Ordered'
        description='A step can show a ordered sequence of steps'
        examplePath='elements/Step/Groups/StepOrderedExample'
      />

      <ComponentExample
        title='Vertical'
        description='A step can be displayed stacked vertically'
        examplePath='elements/Step/Groups/StepVerticalExample'
      />
    </ExampleSection>

    <ExampleSection title='Content'>
      <ComponentExample
        title='Description'
        description='A step can contain a description'
        examplePath='elements/Step/Content/StepDescriptionExample'
      />

      <ComponentExample
        title='Icon'
        description='A step can contain an icon'
        examplePath='elements/Step/Content/StepIconExample'
      />

      <ComponentExample
        title='Link'
        description='A step can link'
        examplePath='elements/Step/Content/StepLinkExamples'
      />
    </ExampleSection>

    <ExampleSection title='States'>
      <ComponentExample
        title='Active'
        description='A step can be highlighted as active'
        examplePath='elements/Step/States/StepActiveExample'
      />

      <ComponentExample
        title='Completed'
        description='A step can show that a user has completed it'
        examplePath='elements/Step/States/StepCompletedExample'
      />

      <ComponentExample
        title='Disabled'
        description='A step can show that it cannot be selected'
        examplePath='elements/Step/States/StepDisabledExample'
      />
    </ExampleSection>
  </div>
)

export default StepExamples
