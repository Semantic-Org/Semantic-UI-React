import React, { PropTypes } from 'react'
import { Label } from 'stardust'

import BaseStandardExample from './Standard'

const resultRenderer = ({ title, description }) => (
  <Label content={title} />
)

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const SearchStandardCustomExample = () => (
  <BaseStandardExample
    resultRenderer={resultRenderer}
  />
)

export default SearchStandardCustomExample
