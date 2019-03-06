import React from 'react'
import { Message } from 'semantic-ui-react'

import Types from './Types'
import Variations from './Variations'
import Usage from './Usage'

const StickyExamples = () => (
  <div>
    <Message warning>
      <code>Sticky</code> behavior is erratic inside{' '}
      <code>Sidebar.Pushable</code>. To avoid issues, place <code>Sticky</code>{' '}
      outside of any <code>Sidebar.Pushable</code> element. See{' '}
      <a href='https://github.com/Semantic-Org/Semantic-UI-React/issues/2897'>
        Semantic-Org/Semantic-UI-React#2897
      </a>{' '}
      for more details.
    </Message>
    <Types />
    <Variations />
    <Usage />
  </div>
)

export default StickyExamples
