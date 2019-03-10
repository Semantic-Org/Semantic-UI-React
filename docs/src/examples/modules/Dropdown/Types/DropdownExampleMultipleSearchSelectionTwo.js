import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const addressDefinitions = faker.definitions.address
const countryOptions = _.map(addressDefinitions.country, (state, index) => ({
  flag: addressDefinitions.country_code[index],
  key: addressDefinitions.country_code[index],
  text: state,
  value: addressDefinitions.country_code[index],
}))

const DropdownExampleMultipleSearchSelectionTwo = () => (
  <Dropdown
    placeholder='Select Country'
    fluid
    multiple
    search
    selection
    options={countryOptions}
  />
)

export default DropdownExampleMultipleSearchSelectionTwo
