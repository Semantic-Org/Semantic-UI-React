import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class ListContentExamples extends Component {
  render() {
    return (
      <ExampleSection title='Content'>
        <ComponentExample
          title='Item'
          description='A list item can contain a set of items'
          examplePath='elements/List/Content/ListItemExample'
        />
        <ComponentExample
          title='Icon'
          description='A list item can contain an icon'
          examplePath='elements/List/Content/ListIconExample'
        />
        <ComponentExample
          title='Image'
          description='A list can contain an image'
          examplePath='elements/List/Content/ListImageExample'
        />
        <ComponentExample
          title='Link'
          description='A list can contain links'
          examplePath='elements/List/Content/ListLinkExample'
        />
        <ComponentExample
          title='Header'
          description='A list can contain a header'
          examplePath='elements/List/Content/ListHeaderExample'
        />
        <ComponentExample
          title='Description'
          description='A list can contain a description'
          examplePath='elements/List/Content/ListDescriptionExample'
        />
      </ExampleSection>
    )
  }
}
