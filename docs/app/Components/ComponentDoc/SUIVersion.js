import PropTypes from 'prop-types'
import React from 'react'

import { Label } from 'src'

const SUIVersion = ({ version }) => (
  <Label
    as='a'
    color='teal'
    content={version}
    size='tiny'
    title={`Available from Semantic UI ${version}`}
  />
)

SUIVersion.propTypes = {
  version: PropTypes.string.isRequired,
}

export default SUIVersion
