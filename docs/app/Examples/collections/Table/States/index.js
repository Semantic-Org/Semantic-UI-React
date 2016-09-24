import React from 'react'

import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const States = () => {
  return (
    <ExampleSection title='States'>
      <ComponentExample
        title='Positive / Negative'
        description='A cell or row may let a user know whether a value is good or bad'
        examplePath='collections/Table/States/TablePositiveNegative'
      />
    </ExampleSection>
  )
}

export default States
