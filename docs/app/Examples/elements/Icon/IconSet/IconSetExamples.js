import _ from 'lodash'
import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { iconCategories as categories } from 'src/utils/semanticUtils'

const template = (content) => (`
  import React, { Component } from \'react\'
  import { Icon } from \'stardust\'
  
  export default class IconCategoryExample extends Component
    render() {
      return(
        <div>
${content}
        </div>
      )
    }
  }`
)

const categorySrc = (icons) => (
  template(_.map(icons, icon => (`          <Icon name='${icon}' />`).join('\n')))
)

export default class IconSetExamples extends Component {
  render() {
    return (
      <ExampleSection title='Icon Set'>
        {_.map(categories, category => (
          <ComponentExample
            title={category.name}
            description='Icons can represent types of content found on websites'
            examplePath='elements/Icon/IconSet/IconCategoryExample'
            exampleSrc={categorySrc(category.icons)}
            category={category}
          />
        ))}
      </ExampleSection>
    )
  }
}
