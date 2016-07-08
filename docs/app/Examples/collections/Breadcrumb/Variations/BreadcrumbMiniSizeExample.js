import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbMiniSizeExample extends Component {
  render() {
    return (
      <Breadcrumb size='mini'>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section link>Registration</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}
