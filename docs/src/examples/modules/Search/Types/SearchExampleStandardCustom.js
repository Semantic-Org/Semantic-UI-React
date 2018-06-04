import PropTypes from 'prop-types'
import React from 'react'
import { Label } from 'semantic-ui-react'

import SearchExampleStandard from './SearchExampleStandard'

const resultRenderer = ({ title }) => <Label content={title} />

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const SearchExampleStandardCustom = () => (
  <SearchExampleStandard resultRenderer={resultRenderer} />
)

export default SearchExampleStandardCustom
