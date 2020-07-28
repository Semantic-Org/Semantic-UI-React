import PropTypes from 'prop-types'
import React, { Component, createElement } from 'react'

import { Grid } from 'semantic-ui-react'
import ContributionPrompt from './ContributionPrompt'

export default class ComponentExamples extends Component {
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
    const { examplesExist } = this.props

    return examplesExist ? this.renderExamples() : this.renderMissingExamples()
  }
}

ComponentExamples.propTypes = {
  displayName: PropTypes.string.isRequired,
  examplesExist: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
}
