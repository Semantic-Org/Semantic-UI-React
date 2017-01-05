import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

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
