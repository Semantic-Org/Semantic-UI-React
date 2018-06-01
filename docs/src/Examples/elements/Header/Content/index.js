import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const HeaderContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Image'
      description='A header may contain an image.'
      examplePath='elements/Header/Content/HeaderExampleImage'
    />
    <ComponentExample
      description='You can also define an image with props.'
      examplePath='elements/Header/Content/HeaderExampleImageProp'
    />
    <ComponentExample
      title='Icon'
      description='A header may contain an icon.'
      examplePath='elements/Header/Content/HeaderExamplePlugIcon'
    />
    <ComponentExample examplePath='elements/Header/Content/HeaderExampleSettingsIcon' />
    <ComponentExample
      description='You can also define an icon with props.'
      examplePath='elements/Header/Content/HeaderExampleIconProp'
    />
    <ComponentExample
      title='Subheader'
      description='Headers may contain subheaders.'
      examplePath='elements/Header/Content/HeaderExampleSubheader'
    />
    <ComponentExample
      description='You can pass any Subheader content to the Header subheader prop.'
      examplePath='elements/Header/Content/HeaderExampleSubheaderProp'
    />
  </ExampleSection>
)

export default HeaderContentExamples
