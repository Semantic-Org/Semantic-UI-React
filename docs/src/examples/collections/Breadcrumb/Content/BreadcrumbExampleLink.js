import React from 'react'
import {
  BreadcrumbSection,
  BreadcrumbDivider,
  Breadcrumb,
} from 'semantic-ui-react'

const BreadcrumbExampleLink = () => (
  <Breadcrumb>
    <BreadcrumbSection link>Home</BreadcrumbSection>
    <BreadcrumbDivider />
    <BreadcrumbSection link>Store</BreadcrumbSection>
    <BreadcrumbDivider icon='right angle' />
    <BreadcrumbSection active>
      Search for: <a href='#'>paper towels</a>
    </BreadcrumbSection>
  </Breadcrumb>
)

export default BreadcrumbExampleLink
