import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbExample = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Store</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbExample
