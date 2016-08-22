import React, { Component, createElement, PropTypes } from 'react'

import { exampleContext } from 'docs/app/utils'
import { Divider, Header, Icon, Message } from 'stardust'

export default class ComponentExamples extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  renderExample = () => {
    const { name } = this.props

    // TODO only find index.js files once PRs for old components are merged and
    // the docs are updated to use the new naming scheme
    const examplePath = exampleContext.keys()
      .find(path => new RegExp(`(${name}Examples|${name}/index).js$`).test(path))

    return examplePath && createElement(exampleContext(examplePath).default)
  }

  renderMissingExamples = () => {
    const { name } = this.props
    return (
      <Message info icon>
        <Icon name='book' />
        <Message.Content>
          If there's no
          <a
            href='https://github.com/TechnologyAdvice/stardust/pulls'
          > pull request </a>
          open for <code>&lt;{name} /&gt;</code> examples, you should
          <a
            href='https://github.com/TechnologyAdvice/stardust/blob/master/CONTRIBUTING.md'
          > contribute</a>!
        </Message.Content>
      </Message>
    )
  }

  render() {
    return (
      <div>
        <Header as='h2'>Examples</Header>
        {this.renderExample() || this.renderMissingExamples()}
        <Divider className='hidden section' />
      </div>
    )
  }
}
