import React from 'react'
import { Select } from 'semantic-ui-react'

import { countryOptions } from '../common'

const SelectExample = () => (
  <Select placeholder='Select your country' options={ countryOptions } />
)

export default SelectExample
