import React from 'react'
import { Icon, Message } from 'semantic-ui-react'

import Types from './Types'

const MountNodeExamples = () => (
  <div>
    <Message icon warning>
      <Icon name='warning sign' />

      <Message.Content>
        <Message.Header>Deprecation notice</Message.Header>
        <p>
          <code>MountNode</code> component is deprecated and will be removed in
          the next major release. Please follow our{' '}
          <a href='https://github.com/Semantic-Org/Semantic-UI-React/pull/4027'>
            upgrade guide
          </a>
          .
        </p>
      </Message.Content>
    </Message>

    <Types />
  </div>
)

export default MountNodeExamples
