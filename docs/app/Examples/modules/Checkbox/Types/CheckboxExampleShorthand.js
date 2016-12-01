import React from 'react'
import { Checkbox, Divider } from 'semantic-ui-react'

const CheckboxExampleCheckbox = () => (
  <div>
    <Checkbox label={{ children: 'Prop label', className: 'foo' }} />
    <Divider />
    <Checkbox label={<label><b>Element label</b></label>} />
  </div>
)

export default CheckboxExampleCheckbox
