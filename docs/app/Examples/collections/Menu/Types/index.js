import React from 'react'

import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

// TODO: Add example with <Popup> after it will be added
// TODO: Add example with items shorthand

const Types = () => {
  return (
    <ExampleSection title='Types'>
      <ComponentExample
        title='Menu'
        description='A menu'
        examplePath='collections/Menu/Types/Basic'
      />
      <ComponentExample
        description='Menu item text can be defined with the content prop'
        examplePath='collections/Menu/Types/ContentProp'
      />
      <ComponentExample
        description='The name prop will be used for content if neither children nor content props are defined'
        examplePath='collections/Menu/Types/NameProp'
      />
      <ComponentExample examplePath='collections/Menu/Types/Attached' />

      <ComponentExample
        title='Secondary Menu'
        description='A menu can adjust its appearance to de-emphasize its contents'
        examplePath='collections/Menu/Types/Secondary'
      />

      <ComponentExample
        title='Pointing'
        description='A menu can point to show its relationship to nearby content'
        examplePath='collections/Menu/Types/Pointing'
      />
      <ComponentExample examplePath='collections/Menu/Types/SecondaryPointing' />

      <ComponentExample
        title='Tabular'
        description='A menu can be formatted to show tabs of information'
        examplePath='collections/Menu/Types/Tabular'
      />
      <ComponentExample examplePath='collections/Menu/Types/TabularOnTop' />
      <ComponentExample examplePath='collections/Menu/Types/TabularOnBottom' />
      <ComponentExample examplePath='collections/Menu/Types/TabularOnLeft' />
      <ComponentExample examplePath='collections/Menu/Types/TabularOnRight' />

      <ComponentExample
        title='Text'
        description='A menu can be formatted for text content'
        examplePath='collections/Menu/Types/Text'
      />

      <ComponentExample
        title='Vertical Menu'
        description='A vertical menu displays elements vertically'
        examplePath='collections/Menu/Types/Vertical'
      />
      <ComponentExample examplePath='collections/Menu/Types/VerticalText' />
      <ComponentExample examplePath='collections/Menu/Types/VerticalDropdown' />
      <ComponentExample examplePath='collections/Menu/Types/VerticalPointing' />
      <ComponentExample examplePath='collections/Menu/Types/VerticalSecondary' />

      <ComponentExample
        title='Pagination'
        description='A pagination menu is specially formatted to present links to pages of content'
        examplePath='collections/Menu/Types/Pagination'
      />
    </ExampleSection>
  )
}

export default Types
