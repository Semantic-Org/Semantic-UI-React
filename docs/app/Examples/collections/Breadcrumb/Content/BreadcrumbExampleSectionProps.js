import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
  { content: 'Home', link: true },
  { content: 'Search', active: true },
]

const BreadcrumbExampleSectionProps = () => (
  <Breadcrumb sections={sections} />
)

export default BreadcrumbExampleSectionProps
