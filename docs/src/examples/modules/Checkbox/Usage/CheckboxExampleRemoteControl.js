import React from 'react'
import { Button, Checkbox } from 'semantic-ui-react'

function CheckboxExampleRemoteControl() {
  const [checked, setChecked] = React.useState(false)

  return (
    <div>
      <Button onClick={() => setChecked((prevChecked) => !prevChecked)}>
        Toggle it
      </Button>
      <Checkbox
        label='Check this box'
        onChange={(e, data) => setChecked(data.checked)}
        checked={checked}
      />
    </div>
  )
}

export default CheckboxExampleRemoteControl
