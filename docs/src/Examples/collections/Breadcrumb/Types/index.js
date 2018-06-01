import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const BreadcrumbTypesExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Breadcrumb'
        description='A standard breadcrumb.'
        examplePath='collections/Breadcrumb/Types/BreadcrumbExampleStandard'
      />
      <ComponentExample examplePath='collections/Breadcrumb/Types/BreadcrumbExampleDivider' />
      <ComponentExample examplePath='collections/Breadcrumb/Types/BreadcrumbExampleProps' />
    </ExampleSection>
  </div>
)

export default BreadcrumbTypesExamples
