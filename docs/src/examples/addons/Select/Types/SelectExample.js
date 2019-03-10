import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = _.map(faker.definitions.address.country, country => ({
  key: country,
  text: country,
  value: country,
}))

const SelectExample = () => (
  <Select placeholder='Select your country' options={countryOptions} />
)

export default SelectExample
