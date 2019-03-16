import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const BreadcrumbTypesExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Breadcrumb'
        description='A standard breadcrumb.'
        examplePath='collections/Breadcrumb/Types/BreadcrumbExample'
      />
      <ShorthandExample examplePath='collections/Breadcrumb/Types/BreadcrumbExampleShorthand' />
    </ExampleSection>
  </div>
)

export default BreadcrumbTypesExamples
