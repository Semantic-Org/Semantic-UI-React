import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const FormGroupVariationsExamples = () => (
  <ExampleSection title='Group Variations'>
    <ComponentExample
      title='Evenly Divided'
      description='Fields can have their widths divided evenly.'
      examplePath='collections/Form/GroupVariations/FormExampleEvenlyDividedGroup'
    />
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
