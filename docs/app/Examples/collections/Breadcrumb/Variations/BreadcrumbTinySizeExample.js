import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbTinySizeExample extends Component {
  render() {
    return (
      <Breadcrumb size='tiny'>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section link>Registration</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}
