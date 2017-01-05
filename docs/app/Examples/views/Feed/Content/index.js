import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const FeedContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Image Label'
      description='An event can contain an image label'
      examplePath='views/Feed/Content/FeedExampleImageLabel'
    />
    <ComponentExample
      description='You can also configure an image label via props'
      examplePath='views/Feed/Content/FeedExampleImageLabelShorthand'
    />
    <ComponentExample
      title='Icon Label'
      description='An event can contain an icon label'
      examplePath='views/Feed/Content/FeedExampleIconLabel'
    />
    <ComponentExample
      description='You can also configure an icon label via props'
      examplePath='views/Feed/Content/FeedExampleIconLabelShorthand'
    />

    <ComponentExample
      title='Content Date'
      description='Event content can contain a date'
      examplePath='views/Feed/Content/FeedExampleContentDate'
    />
    <ComponentExample
      description='You can also configure a content date via props'
      examplePath='views/Feed/Content/FeedExampleContentDateShorthand'
    />
    <ComponentExample
      title='Summary Date'
      description='An event summary can contain a date'
      examplePath='views/Feed/Content/FeedExampleSummaryDate'
    />
    <ComponentExample
      description='You can also configure a summary date via props'
      examplePath='views/Feed/Content/FeedExampleSummaryDateShorthand'
    />
    <ComponentExample
      title='Extra Images'
      description='An event can contain extra images'
      examplePath='views/Feed/Content/FeedExampleExtraImages'
    />
    <ComponentExample
      description='You can also configure extra images via props'
      examplePath='views/Feed/Content/FeedExampleExtraImagesShorthand'
    />
    <ComponentExample
      title='Extra Text'
      description='An event can contain extra text'
      examplePath='views/Feed/Content/FeedExampleExtraText'
    />
    <ComponentExample
      description='You can also configure extra text via props'
      examplePath='views/Feed/Content/FeedExampleExtraTextShorthand'
    />
  </ExampleSection>
)

export default FeedContentExamples
