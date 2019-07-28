import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { code: 'af', label: 'Afghanistan' },
  { code: 'ax', label: 'Aland Islands' },
  { code: 'al', label: 'Albania' },
  { code: 'dz', label: 'Algeria' },
  { code: 'as', label: 'American Samoa' },
  { code: 'ad', label: 'Andorra' },
  { code: 'ao', label: 'Angola' },
  { code: 'ai', label: 'Anguilla' },
  { code: 'ag', label: 'Antigua' },
  { code: 'ar', label: 'Argentina' },
  { code: 'am', label: 'Armenia' },
  { code: 'aw', label: 'Aruba' },
  { code: 'au', label: 'Australia' },
  { code: 'at', label: 'Austria' },
  { code: 'az', label: 'Azerbaijan' },
  { code: 'bs', label: 'Bahamas' },
  { code: 'bh', label: 'Bahrain' },
  { code: 'bd', label: 'Bangladesh' },
  { code: 'bb', label: 'Barbados' },
  { code: 'by', label: 'Belarus' },
  { code: 'be', label: 'Belgium' },
  { code: 'bz', label: 'Belize' },
  { code: 'bj', label: 'Benin' },
]

const SelectExample = () => (
  <Select
    placeholder='Select your country'
    options={countryOptions}
    labelField='label'
    valueField='code'
  />
)

export default SelectExample
