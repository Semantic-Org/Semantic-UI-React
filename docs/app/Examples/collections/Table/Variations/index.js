import React from 'react'
import { Message } from 'stardust'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const Variations = () => {
  return (
    <ExampleSection title='Variations'>
      <ComponentExample
        title='Single Line'
        description='A table can specify that its cell contents should remain on a single line, and not wrap'
        examplePath='collections/Table/Variations/TableSingleLine'
      />

      <ComponentExample
        title='Fixed'
        description={
        [
          'A table can use fixed a special faster form of table rendering that does not resize table cells based on',
          'content',
        ].join(' ')
        }
        examplePath='collections/Table/Variations/TableFixed'
      />
      <ComponentExample examplePath='collections/Table/Variations/TableFixedLine'>
        <Message info>
          Fixed "single line" tables will automatically ensure content that does not fit in a single line will receive
          "..." ellipsis
        </Message>
      </ComponentExample>

      <ComponentExample
        title='Stacking'
        description='A table can specify how it stacks table content responsively'
        examplePath='collections/Table/Variations/TableUnstackable'
      />
      <ComponentExample examplePath='collections/Table/Variations/TableStackable' />

      <ComponentExample
        title='Selectable Row'
        description='A table can have its rows appear selectable'
        examplePath='collections/Table/Variations/TableSelectable'
      />
      <ComponentExample examplePath='collections/Table/Variations/TableSelectableInverted' />
    </ExampleSection>
  )
}

export default Variations
