import React from 'react'
import { Select } from 'semantic-ui-react'

import { countryItems } from '../common'
// [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, ...{}]

const SelectExample = () => (
  <Select placeholder='Select your country' items={countryItems} />
)

export default SelectExample
