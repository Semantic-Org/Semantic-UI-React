import React from 'react'

import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const States = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Positive / Negative'
      description='A cell or row may let a user know whether a value is good or bad.'
      examplePath='collections/Table/States/TableExamplePositiveNegative'
    />
    <ComponentExample
      title='Error'
      description='A cell or row may call attention to an error or a negative value.'
      examplePath='collections/Table/States/TableExampleError'
    />
    <ComponentExample
      title='Warning'
      description='A cell or row may warn a user.'
      examplePath='collections/Table/States/TableExampleWarning'
    />
    <ShorthandExample examplePath='collections/Table/States/TableExampleWarningShorthand' />
    <ComponentExample
      title='Active'
      description='A cell or row can be active or selected by a user.'
      examplePath='collections/Table/States/TableExampleActive'
    />
    <ComponentExample
      title='Disabled'
      description='A cell can be disabled.'
      examplePath='collections/Table/States/TableExampleDisabled'
    />
  </ExampleSection>
)

export default States
