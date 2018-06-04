import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleTag = () => (
  <div>
    <Label as='a' tag>
      New
    </Label>
    <Label as='a' color='red' tag>
      Upcoming
    </Label>
    <Label as='a' color='teal' tag>
      Featured
    </Label>
  </div>
)

export default LabelExampleTag
