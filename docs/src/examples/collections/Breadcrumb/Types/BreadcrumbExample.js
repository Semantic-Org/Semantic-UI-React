import React from 'react'
import {
  BreadcrumbSection,
  BreadcrumbDivider,
  Breadcrumb,
} from 'semantic-ui-react'

const BreadcrumbExample = () => (
  <Breadcrumb>
    <BreadcrumbSection link>Home</BreadcrumbSection>
    <BreadcrumbDivider />
    <BreadcrumbSection link>Store</BreadcrumbSection>
    <BreadcrumbDivider />
    <BreadcrumbSection active>T-Shirt</BreadcrumbSection>
  </Breadcrumb>
)

export default BreadcrumbExample
