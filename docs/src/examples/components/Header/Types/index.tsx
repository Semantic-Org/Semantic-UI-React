import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title="Types">
    <ComponentExample
      title="Page Headers"
      description="Headers may be oriented to give the hierarchy of a section in the context of the page."
      examplePath="components/Header/Types/PageHeadersExample"
    />
    <ComponentExample
      title="Subheader"
      description="Headers may contain subheaders."
      examplePath="components/Header/Types/SubheaderExample"
    />
    <ComponentExample
      title="Subheader as prop"
      description="You can pass any Subheader content to the Header subheader prop."
      examplePath="components/Header/Types/HeaderExampleSubheaderProp"
    />
  </ExampleSection>
)

export default Types
