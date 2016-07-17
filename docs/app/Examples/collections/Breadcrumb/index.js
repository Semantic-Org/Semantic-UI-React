import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class BreadcrumbExamples extends Component {
  render() {
    return (
      <div>
        <ExampleSection title='Types'>
          <ComponentExample
            title='Breadcrumb'
            description='A standard breadcrumb'
            examplePath='collections/Breadcrumb/Types/BreadcrumbExample'
          />
          <ComponentExample examplePath='collections/Breadcrumb/Types/BreadcrumbDividerExample' />
          <ComponentExample examplePath='collections/Breadcrumb/Types/BreadcrumbPropExample' />
        </ExampleSection>

        <ExampleSection title='Content'>
          <ComponentExample
            title='Divider'
            description={[
              'A breadcrumb can contain a divider to show the relationship between sections,',
              'this can be formatted as an icon or text.',
            ].join(' ')}
            examplePath='collections/Breadcrumb/Content/BreadcrumbDividerExample'
          />
          <ComponentExample examplePath='collections/Breadcrumb/Content/BreadcrumbDividerPropExample' />
          <ComponentExample examplePath='collections/Breadcrumb/Content/BreadcrumbIconDividerExample' />
          <ComponentExample examplePath='collections/Breadcrumb/Content/BreadcrumbIconDividerPropExample' />

          <ComponentExample
            title='Section'
            description='A breadcrumb can contain sections that can either be formatted as a link or text'
            examplePath='collections/Breadcrumb/Content/BreadcrumbSectionExample'
          />
          <ComponentExample examplePath='collections/Breadcrumb/Content/BreadcrumbSectionPropExample' />

          <ComponentExample
            title='Link'
            description='A section may be linkable or contain a link'
            examplePath='collections/Breadcrumb/Content/BreadcrumbLinkExample'
          />
        </ExampleSection>

        <ExampleSection title='Variations'>
          <ComponentExample
            title='Size'
            description='A breadcrumb can vary in size'
            examplePath='collections/Breadcrumb/Variations/BreadcrumbMiniSizeExample'
          />
          <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbTinySizeExample' />
          <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbSmallSizeExample' />
          <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbLargeSizeExample' />
          <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbBigSizeExample' />
          <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbHugeSizeExample' />
          <ComponentExample examplePath='collections/Breadcrumb/Variations/BreadcrumbMassiveSizeExample' />
        </ExampleSection>
      </div>
    )
  }
}
