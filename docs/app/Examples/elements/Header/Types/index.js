import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

const HeaderTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Page Headers'
      description='Headers may be oriented to give the hierarchy of a section in the context of the page'
      examplePath='elements/Header/Types/HeaderPageHeadersExample'
    >
      <Message>
        Page headings are sized using rem and are not affected by surrounding content size.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Content Headers'
      description='Headers may be oriented to give the importance of a section'
      examplePath='elements/Header/Types/HeaderContentHeadersExample'
    >
      <Message>
        Content headings are sized with em and are based on the font-size of their container.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Icon Headers'
      description='A header can be formatted to emphasize an icon'
      examplePath='elements/Header/Types/HeaderIconHeadersExample'
    />
    <ComponentExample
      title='Sub Headers'
      description='Headers may be formatted to label smaller or de-emphasized content'
      examplePath='elements/Header/Types/HeaderSubHeadersExample'
    />
  </ExampleSection>
)

export default HeaderTypesExamples
