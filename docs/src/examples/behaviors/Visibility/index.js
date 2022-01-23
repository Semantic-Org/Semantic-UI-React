import React from 'react'
import { Message, Icon } from 'semantic-ui-react'

import Types from './Types'
import Settings from './Settings'

const VisibilityExamples = () => (
  <>
    <Message icon warning>
      <Icon name='warning sign' />

      <Message.Content>
        <Message.Header>Deprecation notice</Message.Header>
        <p>
          <code>Visibility</code> component is deprecated and will be removed in
          the next major release. Please follow our{' '}
          <a href='https://github.com/Semantic-Org/Semantic-UI-React/pull/4324'>
            upgrade guide
          </a>{' '}
          to avoid breaks during upgrade to v3.
        </p>
      </Message.Content>
    </Message>

    <Types />
    <Settings />
  </>
)

export default VisibilityExamples
