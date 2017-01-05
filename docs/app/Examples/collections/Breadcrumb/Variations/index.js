import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const BreadcrumbVariationsExamples = () => (
  <div>
    <ExampleSection title='Variations'>
      <ComponentExample
        title='Size'
        description='A breadcrumb can vary in size.'
        examplePath='collections/Breadcrumb/Variations/BreadcrumbExampleMiniSize'
      />
      <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbExampleTinySize' />
      <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbExampleSmallSize' />
      <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbExampleLargeSize' />
      <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbExampleBigSize' />
      <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbExampleHugeSize' />
      <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbExampleMassiveSize' />
    </ExampleSection>
  </div>
)

export default BreadcrumbVariationsExamples
