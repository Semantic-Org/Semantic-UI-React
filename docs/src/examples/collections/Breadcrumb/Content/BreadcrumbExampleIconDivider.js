import React from 'react'
import {
  BreadcrumbSection,
  BreadcrumbDivider,
  Breadcrumb,
} from 'semantic-ui-react'

const BreadcrumbExampleIconDivider = () => (
  <Breadcrumb>
    <BreadcrumbSection link>Home</BreadcrumbSection>
    <BreadcrumbDivider icon='right chevron' />
    <BreadcrumbSection link>Registration</BreadcrumbSection>
    <BreadcrumbDivider icon='right arrow' />
    <BreadcrumbSection active>Personal Information</BreadcrumbSection>
  </Breadcrumb>
)

export default BreadcrumbExampleIconDivider
