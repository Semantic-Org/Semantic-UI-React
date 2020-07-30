import React from 'react'
import { Icon, Message } from 'semantic-ui-react'

import Types from './Types'
import Usage from './Usage'

const ResponsiveExamples = () => (
  <div>
    <Message icon warning>
      <Icon name='warning sign' />

      <Message.Content>
        <Message.Header>Deprecation notice</Message.Header>
        <p>
          <code>Responsive</code> component is deprecated and will be removed in
          the next major release. Please follow our{' '}
          <a href='https://github.com/Semantic-Org/Semantic-UI-React/pull/4008'>
            upgrade guide
          </a>
          .
        </p>
      </Message.Content>
    </Message>
    <Types />
    <Usage />
  </div>
)

export default ResponsiveExamples
