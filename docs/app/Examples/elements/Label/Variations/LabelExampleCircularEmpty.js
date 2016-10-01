import React from 'react'
import { Label } from 'stardust'

const LabelExampleCircularEmpty = () => {
  const colors = [
    'red', 'orange', 'yellow', 'olive', 'green', 'teal',
    'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
  ]

  return (
    <div>
      {colors.map(color => <Label circular color={color} empty key={color} />)}
    </div>
  )
}

export default LabelExampleCircularEmpty
