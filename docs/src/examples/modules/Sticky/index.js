import React from 'react'
import { Message } from 'semantic-ui-react'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

import Types from './Types'
import Variations from './Variations'
import Usage from './Usage'

const StickyExamples = () => (
  <div>
    <ExampleSection>
      <Message warning>
        <code>Sticky</code> behavior is erratic inside <code>Sidebar.Pushable</code>. To avoid
        issues, place <code>Sticky</code> outside of any <code>Sidebar.Pushable</code> element.
      </Message>
    </ExampleSection>
    <Types />
    <Variations />
    <Usage />
  </div>
)

export default StickyExamples
