import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbExampleLink = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Store</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right angle' />
    <Breadcrumb.Section active>
      Search for: <a href='#'>paper towels</a>
    </Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbExampleLink
