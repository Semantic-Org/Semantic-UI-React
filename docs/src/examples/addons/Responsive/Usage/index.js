import React from 'react'
import { Button, Message, Segment } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ResponsiveUsageExamples = () => (
  <ExampleSection title='Usage'>
    <Segment>
      <Message info>
        The <code>Responsive</code> component relies on browser environment
        variables and requires some additions tricks to work correctly with the
        server side rendering. We prepared an example that uses{' '}
        <code>Responsive</code> and NextJS.
      </Message>
      <Button
        content='Try on CodeSandbox'
        color='black'
        href='https://codesandbox.io/s/ly3zpw7yzm'
        icon='codepen'
        size='small'
        target='_blank'
      />
    </Segment>

    <ComponentExample
      title='Predefined breakpoints'
      description='Responsive has predefined breakpoints that mimics SUI default variables.'
      examplePath='addons/Responsive/Usage/ResponsiveExampleBreakpoints'
    />
    <ComponentExample
      title='OnUpdate'
      description='Responsive listens for window resize events and calls event handler.'
      examplePath='addons/Responsive/Usage/ResponsiveExampleOnUpdate'
    />
    <ComponentExample
      title='Fire on mount'
      description='Responsive can fire callbacks immediately after mount.'
      examplePath='addons/Responsive/Usage/ResponsiveExampleFireOnMount'
    />
  </ExampleSection>
)

export default ResponsiveUsageExamples
