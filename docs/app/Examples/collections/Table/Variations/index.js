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
        title='Attached'
        description='A table can be attached to other content on a page'
        examplePath='collections/Table/Variations/TableExampleAttached'
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

      <ComponentExample
        title='Vertical Alignment'
        description='A table header, row or cell can adjust its vertical alignment'
        examplePath='collections/Table/Variations/TableVerticalAlign'
      />

      <ComponentExample
        title='Text Alignment'
        description='A table header, row, or cell can adjust its text alignment'
        examplePath='collections/Table/Variations/TableTextAlign'
      />

      <ComponentExample
        title='Striped'
        description='A table can stripe alternate rows of content with a darker color to increase contrast'
        examplePath='collections/Table/Variations/TableStriped'
      />

      <ComponentExample
        title='Celled'
        description='A table may be divided each row into separate cells'
        examplePath='collections/Table/Variations/TableCelled'
      />

      <ComponentExample
        title='Basic'
        description='A table can reduce its complexity to increase readability'
        examplePath='collections/Table/Variations/TableBasic'
      />
      <ComponentExample examplePath='collections/Table/Variations/TableVeryBasic' />

      <ComponentExample
        title='Collapsing Cell'
        description='A cell can be collapsing so that it only uses as much space as required'
        examplePath='collections/Table/Variations/TableCollapsingCell'
      />

      <ComponentExample
        title='Column Count'
        description='A table can specify its column count to divide its content evenly'
        examplePath='collections/Table/Variations/TableColumnCount'
      />

      <ComponentExample
        title='Column Width'
        description='A table can specify the width of individual columns independently'
        examplePath='collections/Table/Variations/TableColumnWidth'
      />

      <ComponentExample
        title='Collapsing'
        description='A table can be collapsing, taking up only as much space as its rows'
        examplePath='collections/Table/Variations/TableCollapsing'
      />

      <ComponentExample
        title='Colored'
        description='A table can be given a color to distinguish it from other table'
        examplePath='collections/Table/Variations/TableColors'
      />

      <ComponentExample
        title='Inverted'
        description="A table's colors can be inverted"
        examplePath='collections/Table/Variations/TableInverted'
      />
      <ComponentExample examplePath='collections/Table/Variations/TableInvertedColors' />

      <ComponentExample
        title='Full-Width Header / Footer'
        description={
          'A definition table can have a full width header or footer, filling in the gap left by the first column'
        }
        examplePath='collections/Table/Variations/TableFullWidth'
      />

      <ComponentExample
        title='Padded'
        description='A table may sometimes need to be more padded for legibility'
        examplePath='collections/Table/Variations/TablePadded'
      />
      <ComponentExample examplePath='collections/Table/Variations/TableVeryPadded' />

      <ComponentExample
        title='Compact'
        description='A table may sometimes need to be more compact to make more rows visible at a time'
        examplePath='collections/Table/Variations/TableCompact'
      />
      <ComponentExample examplePath='collections/Table/Variations/TableVeryCompact' />

      <ComponentExample
        title='Size'
        description='A table can also be small or large'
        examplePath='collections/Table/Variations/TableSmall'
      />
      <ComponentExample examplePath='collections/Table/Variations/TableLarge' />
    </ExampleSection>
  )
}

export default Variations
