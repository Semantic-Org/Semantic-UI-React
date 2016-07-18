import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class ProgressVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Inverted'
          description='A progress bar can have its colors inverted'
          examplePath='modules/Progress/Variations/Inverted'
        />
        <ComponentExample
          title='Attached'
          description='A progress bar can show progress of an element'
          examplePath='modules/Progress/Variations/Attached'
        />
        <ComponentExample
          title='Size'
          description='A progress bar can vary in size'
          examplePath='modules/Progress/Variations/Size'
        />
        <ComponentExample
          title='Color'
          description='A progress bar can have different colors'
          examplePath='modules/Progress/Variations/Color'
        />
        <ComponentExample
          title='Inverted Color'
          description='These colors can also be inverted for improved contrast on dark backgrounds'
          examplePath='modules/Progress/Variations/InvertedColor'
        />
      </ExampleSection>
    )
  }
}
