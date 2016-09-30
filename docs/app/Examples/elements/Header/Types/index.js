import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

const HeaderTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Page Headers'
      description='Headers may be oriented to give the hierarchy of a section in the context of the page'
      examplePath='elements/Header/Types/HeaderExamplePageHeaders'
    >
      <Message info>
        Page headings are sized using <code>rem</code> and are not affected by surrounding content size.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Content Headers'
      description='Headers may be oriented to give the importance of a section'
      examplePath='elements/Header/Types/HeaderExampleContentHeaders'
    >
      <Message info>
        Content headings are sized with <code>em</code> and are based on the font-size of their container.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Icon Headers'
      description='A header can be formatted to emphasize an icon'
      examplePath='elements/Header/Types/HeaderExampleSettingsIconHeader'
    />
    <ComponentExample
      examplePath='elements/Header/Types/HeaderExampleUsersIconHeader'
    />
    <ComponentExample
      title='Subheaders'
      description='Headers may be formatted to label smaller or de-emphasized content'
      examplePath='elements/Header/Types/HeaderExampleSubheaders'
    />
  </ExampleSection>
)

export default HeaderTypesExamples
