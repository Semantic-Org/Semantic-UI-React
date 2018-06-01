import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createElement } from 'react'

import { exampleContext } from 'docs/src/utils'
import { Grid } from 'semantic-ui-react'
import ContributionPrompt from './ContributionPrompt'

export default class ComponentExamples extends Component {
  static propTypes = {
    displayName: PropTypes.string.isRequired,
  }

  renderExamples = () => {
    const { displayName } = this.props

    const examplePath = _.find(exampleContext.keys(), path =>
      new RegExp(`${displayName}/index.js$`).test(path),
    )

    return examplePath && createElement(exampleContext(examplePath).default)
  }

  renderMissingExamples = () => {
    const { displayName } = this.props
    return (
      <Grid padded>
        <Grid.Column>
          <ContributionPrompt>
            Looks like we're missing <code>{`<${displayName} />`}</code> examples.
          </ContributionPrompt>
        </Grid.Column>
      </Grid>
    )
  }

  render() {
    return this.renderExamples() || this.renderMissingExamples()
  }
}
