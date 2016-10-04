import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbLargeSizeExample = () => (
  <Breadcrumb size='large'>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section link>Registration</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbLargeSizeExample
