import _ from 'lodash'
import React from 'react'
import { Label } from 'stardust'

const LabelExampleColored = () => {
  const colors = [
    'red', 'orange', 'yellow', 'olive', 'green', 'teal',
    'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
  ]

  return (
    <div>
      {colors.map(color => (
        <Label color={color} key={color}>
          {_.capitalize(color)}
        </Label>
      ))}
    </div>
  )
}

export default LabelExampleColored
