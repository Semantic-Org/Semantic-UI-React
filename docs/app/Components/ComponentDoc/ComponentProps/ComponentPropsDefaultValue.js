import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { pure } from 'docs/app/HOC'

const ComponentPropsDefaultValue = ({ value }) => (_.isNil(value) ? null : <code>{value}</code>)

ComponentPropsDefaultValue.propTypes = {
  value: PropTypes.node,
}

export default pure(ComponentPropsDefaultValue)
