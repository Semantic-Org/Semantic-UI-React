import React from 'react'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

const FormFormVariationsExamples = () => (
  <ExampleSection title='Form Variations'>
    <ComponentExample
      title='Size'
      description='A form can vary in size.'
      examplePath='collections/Form/Variations/FormExampleSize'
    />
    <ComponentExample
      title='Inverted'
      description='A form on a dark background may have to invert its color scheme.'
      examplePath='collections/Form/Variations/FormExampleInverted'
    />
    <ComponentExample
      description='A form can prevent itself from stacking on mobile.'
      examplePath='collections/Form/Variations/FormExampleUnstackable'
    />
  </ExampleSection>
)

export default FormFormVariationsExamples
