import React from 'react'
import { MessageHeader, MessageContent, Message, Icon } from 'semantic-ui-react'

import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

const FormFormUsageExamples = () => (
  <ExampleSection title='Usage'>
    <Message info icon>
      <Icon name='pointing right' />
      <MessageContent>
        <MessageHeader>Tip</MessageHeader>
        <p>
          Our <code>{'<Form />'}</code> handles data just like a vanilla React{' '}
          <code>{'<form />'}</code>. See React's
          <a
            href='https://facebook.github.io/react/docs/forms.html#controlled-components'
            rel='noopener noreferrer'
            target='_blank'
          >
            {' '}
            controlled components{' '}
          </a>
          docs for more.
        </p>
      </MessageContent>
    </Message>
    <ComponentExample
      title='Capture Values'
      description='You can capture form data on change or on submit.'
      examplePath='collections/Form/Usage/FormExampleCaptureValues'
    />
    <ComponentExample
      title='Clear On Submit'
      description='You can clear form values on submit.'
      examplePath='collections/Form/Usage/FormExampleClearOnSubmit'
    />
  </ExampleSection>
)

export default FormFormUsageExamples
