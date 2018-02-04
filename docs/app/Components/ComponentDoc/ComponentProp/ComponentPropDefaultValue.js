import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { pure } from 'docs/app/HOC'

const ComponentPropDefaultValue = ({ value }) => (_.isNil(value) ? null : <code>{value}</code>)

ComponentPropDefaultValue.propTypes = {
  value: PropTypes.node,
}

export default pure(ComponentPropDefaultValue)
