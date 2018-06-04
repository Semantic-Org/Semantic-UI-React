import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/app/Components/ComponentDoc/ShorthandExample'

const FeedContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Image Label'
      description='An event can contain an image label.'
      examplePath='views/Feed/Content/FeedExampleImageLabel'
    />
    <ShorthandExample examplePath='views/Feed/Content/FeedExampleImageLabelShorthand' />

    <ComponentExample
      title='Icon Label'
      description='An event can contain an icon label.'
      examplePath='views/Feed/Content/FeedExampleIconLabel'
    />
    <ShorthandExample examplePath='views/Feed/Content/FeedExampleIconLabelShorthand' />

    <ComponentExample
      title='Content Date'
      description='Event content can contain a date.'
      examplePath='views/Feed/Content/FeedExampleContentDate'
    />
    <ShorthandExample examplePath='views/Feed/Content/FeedExampleContentDateShorthand' />

    <ComponentExample
      title='Summary Date'
      description='An event summary can contain a date.'
      examplePath='views/Feed/Content/FeedExampleSummaryDate'
    />
    <ShorthandExample examplePath='views/Feed/Content/FeedExampleSummaryDateShorthand' />

    <ComponentExample
      title='Extra Images'
      description='An event can contain extra images.'
      examplePath='views/Feed/Content/FeedExampleExtraImages'
    />
    <ShorthandExample examplePath='views/Feed/Content/FeedExampleExtraImagesShorthand' />

    <ShorthandExample
      title='Extra Text'
      description='An event can contain extra text.'
      examplePath='views/Feed/Content/FeedExampleExtraText'
    />
    <ShorthandExample examplePath='views/Feed/Content/FeedExampleExtraTextShorthand' />
  </ExampleSection>
)

export default FeedContentExamples
