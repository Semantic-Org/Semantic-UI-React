import React, { Component, createElement, PropTypes } from 'react'

import { exampleContext } from 'docs/app/utils'
import { Divider, Header } from 'stardust'

export default class ComponentExamples extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  render() {
    const { name } = this.props

    const examples = exampleContext.keys()
      .filter(path => (
        // TODO only filter index.js files once PRs for old components are merged and
        // the docs are updated to use the new naming scheme
        new RegExp(`(${name}Examples|${name}/index).js$`).test(path)
      ))
      .map((path, i) => createElement(exampleContext(path).default, { key: i }))

    return !examples.length ? null : (
      <div>
        <Header.H2>Examples</Header.H2>
        {examples}
        <Divider className='hidden section' />
      </div>
    )
  }
}
