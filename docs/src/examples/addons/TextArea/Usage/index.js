import React from 'react'
import { Button, Message, Segment } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const TextAreaUsageExamples = () => (
  <ExampleSection title='Usage'>
    <Segment>
      <Message warning>
        <Message.Header>Auto height</Message.Header>
        We don't support `autoHeight` anymore. If you need this feature you can use{' '}
        <a
          href='https://www.npmjs.com/package/react-textarea-autosize'
          rel='noopener noreferrer'
          target='_blank'
        >
          <code>react-textarea-autosize</code>
        </a>{' '}
        with <code>TextArea</code>.
      </Message>
      <Button
        content='Try on CodeSandbox'
        color='black'
        href='https://codesandbox.io/s/1v67906ll4'
        icon='codepen'
        size='small'
        target='_blank'
      />
    </Segment>

    <ComponentExample
      title='Min Height'
      description='A TextArea can have a minimum height.'
      examplePath='addons/TextArea/Usage/TextAreaExampleMinHeight'
    />

    <ComponentExample
      title='Rows'
      description='A TextArea can have a minimum number of rows.'
      examplePath='addons/TextArea/Usage/TextAreaExampleRows'
    />
  </ExampleSection>
)

export default TextAreaUsageExamples
