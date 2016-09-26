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
      <ComponentExample
        title='Error'
        description='A cell or row may call attention to an error or a negative value'
        examplePath='collections/Table/States/TableError'
      />
      <ComponentExample
        title='Warning'
        description='A cell or row may warn a user'
        examplePath='collections/Table/States/TableWarning'
      />
      <ComponentExample
        title='Active'
        description='A cell or row can be active or selected by a user'
        examplePath='collections/Table/States/TableActive'
      />
      <ComponentExample
        title='Disabled'
        description='A cell can be disabled'
        examplePath='collections/Table/States/TableDisabled'
      />
    </ExampleSection>
  )
}

export default States
