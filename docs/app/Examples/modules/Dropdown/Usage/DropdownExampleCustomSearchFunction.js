import React from 'react'
import _ from 'lodash'
import { Dropdown } from 'semantic-ui-react'

const caseSensitiveSearch = (options, query) => {
  const re = new RegExp(_.escapeRegExp(query))
  return options.filter(opt => re.test(opt.text))
}

const options = [
  { key: 'a', value: 'a', text: 'UPPERCASE' },
  { key: 'b', value: 'b', text: 'lowercase' },
]

const DropdownExampleCustomSearchFunction = () => (
  <Dropdown
    options={options}
    search={caseSensitiveSearch}
    selection
    fluid
    placeholder={'Try to search for case or CASE'}
  />
)

export default DropdownExampleCustomSearchFunction
