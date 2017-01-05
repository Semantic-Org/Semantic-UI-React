import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const BreadcrumbContentExamples = () => (
  <div>
    <ExampleSection title='Content'>
      <ComponentExample
        title='Divider'
        description={[
          'A breadcrumb can contain a divider to show the relationship between sections,',
          'this can be formatted as an icon or text.',
        ].join(' ')}
        examplePath='collections/Breadcrumb/Content/BreadcrumbExampleDivider'
      />
      <ComponentExample examplePath='collections/Breadcrumb/Content/BreadcrumbExampleDividerProps' />
      <ComponentExample examplePath='collections/Breadcrumb/Content/BreadcrumbExampleIconDivider' />
      <ComponentExample examplePath='collections/Breadcrumb/Content/BreadcrumbExampleIconDividerProps' />

      <ComponentExample
        title='Section'
        description='A breadcrumb can contain sections that can either be formatted as a link or text.'
        examplePath='collections/Breadcrumb/Content/BreadcrumbExampleSection'
      />
      <ComponentExample examplePath='collections/Breadcrumb/Content/BreadcrumbExampleSectionProps' />

      <ComponentExample
        title='Link'
        description='A section may be linkable or contain a link.'
        examplePath='collections/Breadcrumb/Content/BreadcrumbExampleLink'
      />
    </ExampleSection>
  </div>
)

export default BreadcrumbContentExamples
