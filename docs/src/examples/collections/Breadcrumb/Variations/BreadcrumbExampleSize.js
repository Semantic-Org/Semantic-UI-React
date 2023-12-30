import React from 'react'
import {
  BreadcrumbSection,
  BreadcrumbDivider,
  Breadcrumb,
  Divider,
} from 'semantic-ui-react'

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const BreadcrumbExampleSize = () => (
  <>
    {sizes.map((size) => (
      <React.Fragment key={size}>
        <Breadcrumb size={size}>
          <BreadcrumbSection link>Home</BreadcrumbSection>
          <BreadcrumbDivider icon='right chevron' />
          <BreadcrumbSection link>Registration</BreadcrumbSection>
          <BreadcrumbDivider icon='right chevron' />
          <BreadcrumbSection active>Personal Information</BreadcrumbSection>
        </Breadcrumb>
        <Divider hidden />
      </React.Fragment>
    ))}
  </>
)

export default BreadcrumbExampleSize
