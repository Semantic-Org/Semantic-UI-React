import React from 'react'
import { Breadcrumb } from 'stardust'

const sections = [
  { text: 'Home', link: true },
  { text: 'Search', active: true },
]

const BreadcrumbSectionPropExample = () => (
  <Breadcrumb sections={sections} />
)

export default BreadcrumbSectionPropExample
