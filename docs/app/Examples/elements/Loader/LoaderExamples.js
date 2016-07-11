import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

// TODO: Update dimmers after implement <Dimmer>
// TODO: Update messages after convert <Message> to v1 API
// TODO: Update segments after convert <Segment> to v1 API

export default class LoaderExamples extends Component {
  render() {
    return (
      <div>
        <ExampleSection title='Types'>
          <ComponentExample
            title='Loader'
            description='A loader'
            examplePath='elements/Loader/Types/LoaderExample'
          >
            <Message>
              Loaders are hidden unless has prop "active" or inside an "dimmer" with active prop.
            </Message>
          </ComponentExample>

          <ComponentExample
            title='Text Loader'
            description='A loader can contain text'
            examplePath='elements/Loader/Types/TextLoaderExamples'
          />
        </ExampleSection>

        <ExampleSection title='States'>
          <ComponentExample
            title='Indeterminate'
            description="A loader can show it's unsure of how long a task will take"
            examplePath='elements/Loader/States/IndeterminateLoaderExample'
          />

          <ComponentExample
            title='Active'
            description='A loader can contain text'
            examplePath='elements/Loader/States/ActiveLoaderExample'
          >
            <Message>
              An active dimmer may not be clearly visible without using a "ui dimmer".
            </Message>
          </ComponentExample>

          <ComponentExample
            title='Disabled'
            description='A loader can be disabled or hidden'
            examplePath='elements/Loader/States/DisabledLoaderExample'
          />
        </ExampleSection>

        <ExampleSection title='Variations'>
          <ComponentExample
            title='Inline'
            description='Loaders can appear inline with content'
            examplePath='elements/Loader/Variations/InlineLoaderExample'
          />

          <ComponentExample
            title='Inline Center'
            description='Loaders can appear inline centered with content'
            examplePath='elements/Loader/Variations/InlineCenterLoaderExample'
          >
            <Message>
              An active dimmer may not be clearly visible without using a "ui dimmer".
            </Message>
          </ComponentExample>

          <ComponentExample
            title='Size'
            description='Loaders can have different sizes'
            examplePath='elements/Loader/Variations/SizeLoaderExamples'
          />

          <ComponentExample
            title='Inverted'
            description='Loaders can have their colors inverted.'
            examplePath='elements/Loader/Variations/InvertedLoaderExample'
          />

          <ComponentExample
            title='Inverted'
            description='Loaders can have their colors inverted.'
            examplePath='elements/Loader/Variations/InvertedSizeLoaderExamples'
          >
            <Message>
              Loaders will automatically be inverted inside "inverted dimmer".
            </Message>
          </ComponentExample>
        </ExampleSection>
      </div>
    )
  }
}
