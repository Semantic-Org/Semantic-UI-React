import PropTypes from 'prop-types'
import React from 'react'
import { Label } from 'semantic-ui-react'

import SearchExampleCategory from './SearchExampleCategory'

const categoryRenderer = ({ name }) => <Label as={'span'} content={name} />

categoryRenderer.propTypes = {
  name: PropTypes.string,
}

const resultRenderer = ({ title }) => <Label content={title} />

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const SearchExampleCategoryCustom = () => (
  <SearchExampleCategory
    categoryRenderer={categoryRenderer}
    resultRenderer={resultRenderer}
  />
)

export default SearchExampleCategoryCustom
