import React from 'react'

import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

const FormFieldVariationsExamples = () => (
  <ExampleSection title='Field Variations'>
    <ComponentExample
      title='Inline'
      description='A field can have its label next to instead of above it.'
      examplePath='collections/Form/FieldVariations/FormExampleInlineField'
    />
    <ComponentExample
      title='Width'
      description='A field can specify its width in grid columns.'
      examplePath='collections/Form/FieldVariations/FormExampleWidthField'
    />
    <ComponentExample
      title='Required'
      description='A field can show that input is mandatory.'
      examplePath='collections/Form/FieldVariations/FormExampleRequiredField'
    />
    <ComponentExample
      description='Form.Field shorthand can also be required.'
      examplePath='collections/Form/FieldVariations/FormExampleRequiredFieldShorthand'
    />
  </ExampleSection>
)

export default FormFieldVariationsExamples
