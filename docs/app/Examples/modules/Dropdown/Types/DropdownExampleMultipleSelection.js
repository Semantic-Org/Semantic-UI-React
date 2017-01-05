import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { text: 'Angular', value: 'angular' },
  { text: 'CSS', value: 'css' },
  { text: 'Graphic Design', value: 'design' },
  { text: 'Ember', value: 'ember' },
  { text: 'HTML', value: 'html' },
  { text: 'Information Architecture', value: 'ia' },
  { text: 'Javascript', value: 'javascript' },
  { text: 'Mechanical Engineering', value: 'mech' },
  { text: 'Meteor', value: 'meteor' },
  { text: 'NodeJS', value: 'node' },
  { text: 'Plumbing', value: 'plumbing' },
  { text: 'Python', value: 'python' },
  { text: 'Rails', value: 'rails' },
  { text: 'React', value: 'react' },
  { text: 'Kitchen Repair', value: 'repair' },
  { text: 'Ruby', value: 'ruby' },
  { text: 'UI Design', value: 'ui' },
  { text: 'User Experience', value: 'ux' },
]

const DropdownExampleMultipleSelection = () => (
  <Dropdown placeholder='Skills' fluid multiple selection options={options} />
)

export default DropdownExampleMultipleSelection
