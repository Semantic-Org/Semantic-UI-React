import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Select } from 'semantic-ui-react'

const addressDefinitions = faker.definitions.address
const countryOptions = _.map(addressDefinitions.country, (state, index) => ({
  flag: addressDefinitions.country_code[index],
  key: addressDefinitions.country_code[index],
  text: state,
  value: addressDefinitions.country_code[index],
}))

const SelectExample = () => (
  <Select placeholder='Select your country' options={countryOptions} />
)

export default SelectExample
