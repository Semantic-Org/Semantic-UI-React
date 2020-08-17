import React from 'react'
import { Message } from 'semantic-ui-react'

import Types from './Types'

const RefExamples = () => (
  <>
    <Message info>
      <p>
        Currently, it's recommended to use <code>Ref</code> component to get
        refs to HTML elements from Semantic UI React components as not all
        components support native ref forwarding via{' '}
        <code>React.forwardRef()</code>.
      </p>
      <p>
        As it uses deprecated <code>ReactDOM.findDOMNode()</code> you may
        receive warnings in React's StrictMode. We are working on it in{' '}
        <a href='https://github.com/Semantic-Org/Semantic-UI-React/issues/3819'>
          Semantic-Org/Semantic-UI-React#3819
        </a>
        .
      </p>
    </Message>
    <Types />
  </>
)

export default RefExamples
