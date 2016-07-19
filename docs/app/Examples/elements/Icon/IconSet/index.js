import _ from 'lodash'
import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { iconsByCategory as categories } from 'docs/app/utils'

const template = (content, name) => (
`import React from 'react'
import { Icon } from 'stardust'

const IconSet${name}Example = (
  <div>
${content}
  </div>
)

export default IconSet${name}Example`
)

const categorySrc = ({ icons, name }) => {
  const iconSrc = _.map(icons, icon => (`    <Icon name='${icon}' />`)).join('\n')
  const categoryName = name.replace(/\s|&/g, '')
  return template(iconSrc, categoryName)
}

export default class IconSetExamples extends Component {
  render() {
    return (
      <ExampleSection title='Icon Set'>
        {_.map(categories, category => (
          <ComponentExample
            key={category.name}
            title={category.name}
            description={category.description}
            examplePath='elements/Icon/IconSet/IconCategoryExample'
            exampleSrc={categorySrc(category)}
            category={category}
          />
        ))}
      </ExampleSection>
    )
  }
}
