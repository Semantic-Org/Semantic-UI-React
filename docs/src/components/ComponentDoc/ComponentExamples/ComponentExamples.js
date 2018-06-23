import PropTypes from 'prop-types'
import React, { Component, createElement } from 'react'

import { Grid } from 'semantic-ui-react'
import ContributionPrompt from '../ContributionPrompt'

export default class ComponentExamples extends Component {
  static propTypes = {
    displayName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  renderExamples = () => {
    const { displayName, type } = this.props

    return createElement(require(`docs/src/examples/${type}s/${displayName}/index.js`).default)
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
