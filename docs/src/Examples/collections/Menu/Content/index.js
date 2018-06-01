import React from 'react'

import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

// TODO: Add example with <Popup> after it will be added
// TODO: Add example with <Search> after it will be added

const Content = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Header'
      description='A menu item may include a header or may itself be a header.'
      examplePath='collections/Menu/Content/MenuExampleHeader'
    />
    <ComponentExample examplePath='collections/Menu/Content/MenuExampleHeaderVertical' />

    <ComponentExample
      title='Text'
      description='A vertical menu item can include any type of text content.'
      examplePath='collections/Menu/Content/MenuExampleText'
    />

    <ComponentExample
      title='Input'
      description='A menu item can contain an input inside of it.'
      examplePath='collections/Menu/Content/MenuExampleInputs'
    />

    <ComponentExample
      title='Button'
      description='A menu item can contain a button inside of it.'
      examplePath='collections/Menu/Content/MenuExampleButtons'
    />

    <ComponentExample
      title='Link Item'
      description='A menu may contain a link item, or an item formatted as if it is a link.'
      examplePath='collections/Menu/Content/MenuExampleLinkItem'
    />

    <ComponentExample
      title='Dropdown Item'
      description='An item may contain a nested menu in a dropdown.'
      examplePath='collections/Menu/Content/MenuExampleDropdownItem'
    />

    {/* <ComponentExample */}
    {/* title='Popup Menu' */}
    {/* description='A menu item may show a large menu, or additional content using a popup' */}
    {/* examplePath='collections/Menu/Content/Popups' */}
    {/* /> */}

    {/* <ComponentExample */}
    {/* title='Search' */}
    {/* description='A menu can contain a search input' */}
    {/* examplePath='collections/Menu/Content/Search' */}
    {/* /> */}

    <ComponentExample
      title='Menu'
      description='A menu may contain another menu group in the same level as menu items.'
      examplePath='collections/Menu/Content/MenuExampleMenus'
    />

    <ComponentExample
      title='Sub Menu'
      description='A menu item may contain another menu nested inside that acts as a grouped sub-menu.'
      examplePath='collections/Menu/Content/MenuExampleSubMenu'
    />
  </ExampleSection>
)

export default Content
