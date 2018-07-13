import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const EventStackTypesExamples = () => (
  <ExampleSection title='Types'>
    <Message info>
      <Message.Header>Generic info</Message.Header>

      <p>
        EventStack provides a declarative way to bind events. It's using the React lifecycle to bind
        and unbind at the right time. The approach is similar to{' '}
        <a
          href='https://github.com/oliviertassinari/react-event-listener'
          rel='noopener noreferrer'
          target='_blank'
        >
          <code>react-event-listener</code>
        </a>, however EventStack also manages events priority,{' '}
        <a
          href='https://github.com/Semantic-Org/Semantic-UI-React/tree/master/src/lib/eventStack'
          rel='noopener noreferrer'
          target='_blank'
        >
          learn more
        </a>.
      </p>

      <p>The component is SSR safe.</p>
    </Message>

    <Message warning>
      <Message.Header>Performance notes</Message.Header>
      <p>
        You should avoid passing inline functions for listeners, because this creates a new{' '}
        <code>Function</code> instance on every render, defeating EventStack's{' '}
        <code>shouldComponentUpdate</code>, and triggering an update cycle where it removes its old
        listeners and adds its new listeners (so that it can stay up-to-date with the props you
        passed in).
      </p>
    </Message>

    <ComponentExample
      title='EventStack'
      description='This component exposes the EventStack API as public and provides a declarative way to manage it.'
      examplePath='addons/EventStack/Types/EventStackExampleEventStack'
    />
  </ExampleSection>
)

export default EventStackTypesExamples
