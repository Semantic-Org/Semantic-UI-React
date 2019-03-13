import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const BreadcrumbContentExamples = () => (
  <div>
    <ExampleSection title='Content'>
      <ComponentExample
        title='Divider'
        description={[
          'A breadcrumb can contain a divider to show the relationship between sections,',
          'this can be formatted as text.',
        ].join(' ')}
        examplePath='collections/Breadcrumb/Content/BreadcrumbExampleDivider'
      />
      <ShorthandExample examplePath='collections/Breadcrumb/Content/BreadcrumbExampleDividerShorthand' />

      <ComponentExample
        title='Divider as icon'
        description='It can be also formatted as icon.'
        examplePath='collections/Breadcrumb/Content/BreadcrumbExampleIconDivider'
      />

      <ComponentExample
        title='Section'
        description='A breadcrumb can contain sections that can either be formatted as a link or text.'
        examplePath='collections/Breadcrumb/Content/BreadcrumbExampleSection'
      />
      <ComponentExample examplePath='collections/Breadcrumb/Content/BreadcrumbExampleSectionShorthand' />

      <ComponentExample
        title='Link'
        description='A section may be linkable or contain a link.'
        examplePath='collections/Breadcrumb/Content/BreadcrumbExampleLink'
      />
    </ExampleSection>
  </div>
)

export default BreadcrumbContentExamples
