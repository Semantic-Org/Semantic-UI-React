/* eslint-disable max-len */

import _ from 'lodash'
import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { iconsByCategory as categories } from '../../../../utils/icons'
import { Message } from 'stardust'

const template = (content, name) => (
`import React, { Component } from \'react\'
import { Icon } from \'stardust\'

export default class IconSet${name}Example extends Component
  render() {
    return(
      <div>
${content}
      </div>
    )
  }
}`
)

const categorySrc = ({ icons, name }) => {
  const iconSrc = _.map(icons, icon => (`          <Icon name='${icon}' />`)).join('\n')
  const categoryName = name.replace(/\s|&/g, '')
  return template(iconSrc, categoryName)
}

export default class IconSetExamples extends Component {
  render() {
    return (
      <ExampleSection title='Icon Set'>
        An icon set contains an arbitrary number of glyphs
        <Message className='warning'>
          Icons serve a very similar function to text in a page. In Semantic icons receive a special tag &lt;i&gt; which allow for an abbreviated markup when sitting along-side text.
        </Message>
        <Message>
          Semantic includes a complete port of <a href='http://fortawesome.github.io/Font-Awesome/' target='_blank'>Font Awesome 4.5.6</a> designed by <a href='http://www.twitter.com/davegandy' target='_blank'>Dave Gandy</a> for its standard icon set.
        </Message>
        <br />
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
