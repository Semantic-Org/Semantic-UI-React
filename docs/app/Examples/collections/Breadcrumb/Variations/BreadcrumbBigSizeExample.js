import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbBigSizeExample extends Component {
  render() {
    return (
      <Breadcrumb size='big'>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section link>Registration</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}
