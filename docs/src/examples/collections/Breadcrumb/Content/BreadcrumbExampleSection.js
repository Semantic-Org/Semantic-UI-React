import React from 'react'
import {
  BreadcrumbSection,
  BreadcrumbDivider,
  Breadcrumb,
} from 'semantic-ui-react'

const BreadcrumbExampleSection = () => (
  <Breadcrumb>
    <BreadcrumbSection link>Home</BreadcrumbSection>
    <BreadcrumbDivider />
    <BreadcrumbSection active>Search</BreadcrumbSection>
  </Breadcrumb>
)

export default BreadcrumbExampleSection
