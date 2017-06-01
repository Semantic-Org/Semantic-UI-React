import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const sections = [
  { key: 'home', content: 'Home', link: true },
  { key: 'search', content: 'Search', active: true },
]

const BreadcrumbExampleSectionProps = () => (
  <Breadcrumb sections={sections} />
)

export default BreadcrumbExampleSectionProps
