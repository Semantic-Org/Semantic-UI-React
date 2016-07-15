import React from 'react'
import { Breadcrumb } from 'stardust'

const BreadcrumbDividerExample = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider>/</Breadcrumb.Divider>
    <Breadcrumb.Section link>Registration</Breadcrumb.Section>
    <Breadcrumb.Divider>/</Breadcrumb.Divider>
    <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbDividerExample
