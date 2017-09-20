import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { pure } from 'docs/app/HOC'

const ComponentPropsDescription = ({ description }) => (_.isNil(description) ? null : (
  <p>
    {_.map(description, line => [line, <br key={line} />])}
  </p>
))

ComponentPropsDescription.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
}

export default pure(ComponentPropsDescription)
