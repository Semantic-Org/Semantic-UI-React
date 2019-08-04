import React from 'react'
import { Message } from 'semantic-ui-react'

import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

const FormGroupVariationsExamples = () => (
  <ExampleSection title='Group Variations'>
    <ComponentExample
      title='Evenly Divided'
      description='Fields can have their widths divided evenly.'
      examplePath='collections/Form/GroupVariations/FormExampleEvenlyDividedGroup'
    >
      <Message info>
        When using the <code>widths='equal'</code> prop declaration on a{' '}
        <code>Form.Group</code>, all child <code>Form.Dropdown</code>,{' '}
        <code>Form.Input</code>, <code>Form.Select</code>
        components must be rendered with a <code>fluid</code> prop to work
        correctly.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Inline'
      description='Multiple fields may be inline in a row.'
      examplePath='collections/Form/GroupVariations/FormExampleInlineGroupedFields'
    />
    <ComponentExample
      title='Unstackable'
      description='A form group can prevent itself from stacking on mobile, too.'
      examplePath='collections/Form/GroupVariations/FormExampleUnstackableGroup'
    />
  </ExampleSection>
)

export default FormGroupVariationsExamples
