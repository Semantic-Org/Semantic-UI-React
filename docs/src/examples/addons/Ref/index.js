import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

import Types from './Types'

const RefExamples = () => (
  <>
    <Message icon warning>
      <Icon name='warning sign' />

      <Message.Content>
        <Message.Header>Deprecation notice</Message.Header>
        <p>
          <code>Ref</code> component is deprecated and will be removed in the
          next major release. Please follow our{' '}
          <a href='https://github.com/Semantic-Org/Semantic-UI-React/pull/4324'>
            upgrade guide
          </a>{' '}
          to avoid breaks during upgrade to v3.
        </p>
        <p>
          It's still recommended to use <code>Ref</code> component with v2 to
          get refs to HTML elements from Semantic UI React components, but as it
          uses deprecated <code>ReactDOM.findDOMNode()</code> you may receive
          warnings in React's StrictMode. We are working on it in{' '}
          <a href='https://github.com/Semantic-Org/Semantic-UI-React/issues/3819'>
            Semantic-Org/Semantic-UI-React#3819
          </a>
          .
        </p>
      </Message.Content>
    </Message>

    <Types />
  </>
)

export default RefExamples
