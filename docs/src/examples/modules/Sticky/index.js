import React from 'react'
import { Message } from 'semantic-ui-react'

import Types from './Types'
import Variations from './Variations'
import Usage from './Usage'

const StickyExamples = () => (
  <div>
    <Message warning>
      <code>Sticky</code> behavior is erratic when inside <code>Sidebar.Pushable</code>. 
      To avoid issues, place <code>Sticky</code> outside of any <code>Sidebar.Pushable</code> element.
    </Message>
    <Types />
    <Variations />
    <Usage />
  </div>
)

export default StickyExamples
