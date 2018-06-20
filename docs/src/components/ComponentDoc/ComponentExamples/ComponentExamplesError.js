import PropTypes from 'prop-types'
import React from 'react'
import { Grid, Message } from 'semantic-ui-react'

import ContributionPrompt from '../ContributionPrompt'

const ERROR_NOT_FOUND = 'MODULE_NOT_FOUND'

const ComponentExamplesError = ({ displayName, error }) =>
  (error.code === ERROR_NOT_FOUND ? (
    <Grid padded>
      <Grid.Column>
        <ContributionPrompt>
          Looks like we're missing <code>{`<${displayName} />`}</code> examples.
        </ContributionPrompt>
      </Grid.Column>
    </Grid>
  ) : (
    <Message icon='error' content={error.message} />
  ))

ComponentExamplesError.propTypes = {
  displayName: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
}

export default ComponentExamplesError
