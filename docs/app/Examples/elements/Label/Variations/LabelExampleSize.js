import _ from 'lodash'
import React from 'react'
import { Label } from 'stardust'

const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']

const LabelExampleSize = () => (
  <div>
    {sizes.map(size => (
      <Label key={size} size={size}>
        {_.capitalize(size)}
      </Label>
    ))}
  </div>
)

export default LabelExampleSize
