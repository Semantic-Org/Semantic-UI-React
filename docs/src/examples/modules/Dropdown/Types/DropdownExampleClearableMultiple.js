import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = _.map(faker.definitions.address.country, country => ({
  key: country,
  text: country,
  value: country,
}))

const DropdownExampleClearableMultiple = () => (
  <Dropdown
    clearable
    fluid
    multiple
    search
    selection
    options={countryOptions}
    placeholder='Select Country'
  />
)

export default DropdownExampleClearableMultiple
