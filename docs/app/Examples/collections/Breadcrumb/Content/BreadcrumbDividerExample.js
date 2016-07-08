import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbDividerExample extends Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
        <Breadcrumb.Section link>Registration</Breadcrumb.Section>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
        <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}
