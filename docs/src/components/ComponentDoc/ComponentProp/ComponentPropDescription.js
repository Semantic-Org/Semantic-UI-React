import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { pure } from 'docs/src/hoc'

const ComponentPropDescription = ({ description }) =>
  (_.isNil(description) ? null : <p>{_.map(description, line => [line, <br key={line} />])}</p>)

ComponentPropDescription.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
}

export default pure(ComponentPropDescription)
