import React from 'react'
import { ListItem, Label, List } from 'semantic-ui-react'

const LabelExampleHorizontal = () => (
  <List divided selection>
    <ListItem>
      <Label color='red' horizontal>
        Fruit
      </Label>
      Kumquats
    </ListItem>
    <ListItem>
      <Label color='purple' horizontal>
        Candy
      </Label>
      Ice Cream
    </ListItem>
    <ListItem>
      <Label color='red' horizontal>
        Fruit
      </Label>
      Orange
    </ListItem>
    <ListItem>
      <Label horizontal>Dog</Label>
      Poodle
    </ListItem>
  </List>
)

export default LabelExampleHorizontal
