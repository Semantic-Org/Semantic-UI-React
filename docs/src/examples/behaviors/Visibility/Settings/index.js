import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const VisibilitySettingsExamples = () => (
  <ExampleSection title='Settings'>
    <ComponentExample
      title='Fire on mount'
      description='Fires callbacks immediately after mount.'
      examplePath='behaviors/Visibility/Settings/VisibilityExampleFireOnMount'
    />
    <ComponentExample
      title='Offset'
      description={[
        'Value that context should be adjusted in pixels. Useful for making content appear below content fixed to the ',
        'page.',
      ].join('')}
      examplePath='behaviors/Visibility/Settings/VisibilityExampleOffset'
    />
    <ComponentExample
      title='Callback frequency'
      description='You can change the callback frequency with `once` and `continuous` settings.'
      examplePath='behaviors/Visibility/Settings/VisibilityExampleCallbackFrequency'
    />
    <ComponentExample
      title='Grouped callbacks'
      description='You can specify callbacks that occur after different percentages or pixels of an element are passed.'
      examplePath='behaviors/Visibility/Settings/VisibilityExampleGroupedCallbacks'
    />
    <ComponentExample
      title='Update on'
      description={
        <span>
          You can specify <code>updateOn='repaint'</code>, it will allow to
          update and fire callbacks on browser repaint (animation frames).
        </span>
      }
      examplePath='behaviors/Visibility/Settings/VisibilityExampleUpdateOn'
    >
      <Message warning>
        By default <code>Visibility</code> handles events only on browser
        events. It means that if you will hide a large block an event will not
        be triggered and <code>Visibility</code> will not perform calculations.
        This problem can be easily solved with <code>updateOn='repaint'</code>.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default VisibilitySettingsExamples
