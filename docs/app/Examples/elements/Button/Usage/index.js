import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ButtonUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Focus'
      description='A button can be focused.'
      examplePath='elements/Button/Usage/ButtonExampleFocus'
    />
    <ComponentExample
      title='Attached events'
      description='A button can be handle all events.'
      examplePath='elements/Button/Usage/ButtonExampleAttachedEvents'
    >
      <Message warning>
        <p>
          When <code>Button</code> is <code>attached</code> or rendered as non-<code>button</code> element, it losses
          ability to handle keyboard events when it focused.
        </p>
        <p>
          However, <code>button</code> behaviour can be replicated with <code>onKeyPress</code> handler. You can find
          out more details on {' '}
          <a
            href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role'
            rel='noopener noreferrer'
            target='_blank'
          >
            MDN
          </a>.
        </p>
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default ButtonUsageExamples
