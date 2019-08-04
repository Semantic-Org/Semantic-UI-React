import React from 'react'
import { Label } from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const LabelExampleCircular = () => (
  <div>
    {colors.map((color) => (
      <Label circular color={color} key={color}>
        2
      </Label>
    ))}
  </div>
)

export default LabelExampleCircular
