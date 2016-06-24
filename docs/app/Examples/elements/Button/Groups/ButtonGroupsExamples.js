import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class ButtonGroupsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Groups'>
        <ComponentExample
          title='Buttons'
          description='Buttons can exist together as a group'
          examplePath='elements/Button/Groups/ButtonButtonsExample'
        />
        <ComponentExample
          title='Vertical Buttons'
          description='Groups can be formatted to appear vertically'
          examplePath='elements/Button/Groups/ButtonVerticalButtonsExample'
        />
        <ComponentExample
          title='Icon Buttons'
          description='Button groups can show groups of icons'
          examplePath='elements/Button/Groups/ButtonIconButtonsExample'
        />
        <ComponentExample
          title='Labeled Icon Buttons'
          description='Groups can be formatted as labeled icons'
          examplePath='elements/Button/Groups/ButtonLabeledIconButtonsExample'
        />
        <ComponentExample
          title='Equal Widths'
          description='Groups can have their widths divided evenly'
          examplePath='elements/Button/Groups/ButtonEqualWidthsButtonsExample'
        />
        <ComponentExample
          title='Colored Buttons'
          description='Groups can have a shared color'
          examplePath='elements/Button/Groups/ButtonColoredButtonsExample'
        />
      </ExampleSection>
    )
  }
}
