import React from 'react'

import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const Types = () => {
  return (
    <ExampleSection title='Types'>
      <ComponentExample
        title='Menu'
        description='A menu'
        examplePath='collections/Menu/Types/Width'
      />
      <ComponentExample examplePath='collections/Menu/Types/Names' />
    </ExampleSection>
  )
}

export default Types
