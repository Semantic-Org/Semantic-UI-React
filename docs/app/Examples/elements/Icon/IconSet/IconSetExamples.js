import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class IconSetExamples extends Component {
  render() {
    return (
      <ExampleSection title='Icon Set'>
        <ComponentExample
          title='Web Content'
          description='Button groups can contain conditionals'
          examplePath='elements/Icon/IconSet/IconWebContentExample'
        />
      </ExampleSection>
    )
  }
}
