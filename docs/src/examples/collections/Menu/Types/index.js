import React from 'react'
import { Link } from 'react-static'
import { Message } from 'semantic-ui-react'

import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

// TODO: Add example with <Popup> after it will be added

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Menu'
      description='A menu.'
      examplePath='collections/Menu/Types/MenuExampleBasic'
    />
    <ShorthandExample examplePath='collections/Menu/Types/MenuExampleProps' />
    <ComponentExample
      description='Menu item text can be defined with the content prop.'
      examplePath='collections/Menu/Types/MenuExampleContentProp'
    />
    <ComponentExample
      description='The name prop will be used for content if neither children nor content props are defined.'
      examplePath='collections/Menu/Types/MenuExampleNameProp'
    />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleAttached' />

    <ComponentExample
      title='Secondary Menu'
      description='A menu can adjust its appearance to de-emphasize its contents.'
      examplePath='collections/Menu/Types/MenuExampleSecondary'
    />

    <ComponentExample
      title='Pointing'
      description='A menu can point to show its relationship to nearby content.'
      examplePath='collections/Menu/Types/MenuExamplePointing'
    />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleSecondaryPointing' />

    <ComponentExample
      title='Tabular'
      description='A menu can be formatted to show tabs of information.'
      examplePath='collections/Menu/Types/MenuExampleTabular'
    />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleTabularOnTop' />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleTabularOnBottom' />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleTabularOnLeft' />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleTabularOnRight' />

    <ComponentExample
      title='Text'
      description='A menu can be formatted for text content.'
      examplePath='collections/Menu/Types/MenuExampleText'
    />

    <ComponentExample
      title='Vertical Menu'
      description='A vertical menu displays elements vertically.'
      examplePath='collections/Menu/Types/MenuExampleVertical'
    />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleVerticalText' />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleVerticalDropdown' />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleVerticalPointing' />
    <ComponentExample examplePath='collections/Menu/Types/MenuExampleVerticalSecondary' />

    <ComponentExample
      title='Pagination'
      description='A pagination menu is specially formatted to present links to pages of content.'
      examplePath='collections/Menu/Types/MenuExamplePagination'
    >
      <Message info>
        For fully featured pagination, see{' '}
        <Link to='/addons/pagination'>Pagination</Link> addon.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default Types
