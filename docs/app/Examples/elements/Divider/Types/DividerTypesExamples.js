import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class DividerTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Divider'
          description='A standard divider'
          examplePath='elements/Divider/Types/DividerDividerExample'
        />
        <ComponentExample
          title='Vertical Divider'
          description='A divider can segment content vertically'
          examplePath='elements/Divider/Types/DividerVerticalExample'
        />
        <ComponentExample
          title='Horizontal Divider'
          description='A divider can segement content horizontally'
          examplePath='elements/Divider/Types/DividerHorizontalExample'
        />
      </ExampleSection>
    )
  }
}
