import _ from 'lodash'
import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { iconCats as categories } from 'src/utils/semanticutils'

export default class IconSetExamples extends Component {
  render() {
    return (
      <ExampleSection title='Icon Set'>
        {_.map(categories, category => (
          <ComponentExample
            title={category.name}
            description='Icons can represent types of content found on websites'
            examplePath='elements/Icon/IconSet/IconCategoryExample'
            category={category}
          />
        ))}
      </ExampleSection>
    )
  }
}
