import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class IconGroupsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Groups'>
        <ComponentExample
          title='Icons'
          description='Several icons can be used together as a group'
          examplePath='elements/Icon/Groups/IconIconGroupExample'
        />
        <ComponentExample
          examplePath='elements/Icon/Groups/IconLoadingGroupExample'
        />
        <ComponentExample
          title='Corner Icon'
          description='A group of icons can display a smaller corner icon'
          examplePath='elements/Icon/Groups/IconCornerGroupExample'
        />
        <ComponentExample
          examplePath='elements/Icon/Groups/IconTwitterGroupExample'
        />
      </ExampleSection>
    )
  }
}
