import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbExampleSection = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>Search</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbExampleSection
