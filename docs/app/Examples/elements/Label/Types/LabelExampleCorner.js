import React from 'react'
import { Grid, Icon, Label } from 'stardust'

// TODO: Update <Image> usage

const LabelExampleCorner = () => (
  <Grid columns={2}>
    <Grid.Column>
      <div className='ui fluid image'>
        <Label as='a' corner='left'>
          <Icon name='heart' />
        </Label>
        <img src='http://semantic-ui.com/images/wireframe/image.png' />
      </div>
    </Grid.Column>

    <Grid.Column>
      <div className='ui fluid image'>
        <Label as='a' color='red' corner='right'>
          <Icon name='save' />
        </Label>
        <img src='http://semantic-ui.com/images/wireframe/image.png' />
      </div>
    </Grid.Column>
  </Grid>
)

export default LabelExampleCorner
