import React, { Component, createElement, PropTypes } from 'react'

import { exampleContext } from 'docs/app/utils'
import { Grid } from 'src'
import ContributionPrompt from './ContributionPrompt'

export default class ComponentExamples extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  renderExample = () => {
    const { name } = this.props

    const examplePath = exampleContext.keys()
      .find(path => new RegExp(`${name}/index.js$`).test(path))

    return examplePath && createElement(exampleContext(examplePath).default)
  }

  renderMissingExamples = () => {
    const { name } = this.props
    return (
      <Grid padded>
        <Grid.Column>
          <ContributionPrompt>
            Looks like we're missing <code>{`<${name} />`}</code> examples.
          </ContributionPrompt>
        </Grid.Column>
      </Grid>
    )
  }

  render() {
    return this.renderExample() || this.renderMissingExamples()
  }
}
