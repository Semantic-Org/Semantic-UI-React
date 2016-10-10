import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = _.times(10, (i) => {
  const name = faker.name.findName()
  return { text: name, value: _.snakeCase(name), disabled: i % 3 === 0 }
})

const DropdownItemDisabledExample = () => (
  <Dropdown text='Disabled Item' options={options} />
)

export default DropdownItemDisabledExample
