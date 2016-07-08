import React, { Component } from 'react'
import { Breadcrumb } from 'stardust'

export default class BreadcrumbLinkExample extends Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Store</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle' />
        <Breadcrumb.Section active>Search for: <a href='#'>paper towels</a></Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}
