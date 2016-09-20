import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const HeaderContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Image'
      description='A header may contain an image'
      examplePath='elements/Header/Content/HeaderImageExample'
    />
    <ComponentExample
      description='You can also define an image with props'
      examplePath='elements/Header/Content/HeaderImagePropExample'
    />
    <ComponentExample
      title='Icon'
      description='A header may contain an icon'
      examplePath='elements/Header/Content/HeaderPlugIconExample'
    />
    <ComponentExample
      examplePath='elements/Header/Content/HeaderSettingsIconExample'
    />
    <ComponentExample
      description='You can also define an icon with props'
      examplePath='elements/Header/Content/HeaderIconPropExample'
    />
    <ComponentExample
      title='Subheader'
      description='Headers may contain subheaders'
      examplePath='elements/Header/Content/HeaderSubheaderExample'
    />
    <ComponentExample
      description='You can pass an Subheader content to the Header subheader prop'
      examplePath='elements/Header/Content/HeaderSubheaderPropExample'
    />
  </ExampleSection>
)

export default HeaderContentExamples
