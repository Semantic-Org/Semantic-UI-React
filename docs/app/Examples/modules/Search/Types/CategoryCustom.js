import React, { PropTypes } from 'react'
import { Label } from 'semantic-ui-react'

import BaseCategoryExample from './Category'

const categoryRenderer = ({ name }) =>
  <Label as={'span'} content={name} />

categoryRenderer.propTypes = {
  name: PropTypes.string,
}

const resultRenderer = ({ title, description }) => (
  <Label content={title} />
)

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const SearchCategoryCustomExample = () => (
  <BaseCategoryExample
    categoryRenderer={categoryRenderer}
    resultRenderer={resultRenderer}
  />
)

export default SearchCategoryCustomExample
