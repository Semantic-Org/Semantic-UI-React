import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class FlagTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Flag'
          description='A flag can use the two digit country code, the full name, or a common alias. Make sure you use lowercase letters.'
          examplePath='elements/Flag/Types/FlagExample'
        >
          <Message className='info'>
            Many flag sets use SVG to render flags at multiple sizes. However svg flags usually appear blurry or render improperly at smaller sizes. Semantic's default theme uses an image sprite solution which provides crisper icons, but without the ability to resize
          </Message>
        </ComponentExample>
        <ComponentExample
          title='Country names, codes and aliases'
          description=''
          examplePath='elements/Flag/Types/FlagTableExample'
        />
      </ExampleSection>
    )
  }
}
