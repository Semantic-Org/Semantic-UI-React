import React from 'react'
import { Grid, Icon, Label } from 'stardust'

// TODO: Update <Image> usage

const LabelExampleRibbonImage = () => (
  <Grid columns={2}>
    <Grid.Column>
      <div className='ui fluid image'>
        <Label color='black' ribbon>
          <Icon name='hotel' /> Hotel
        </Label>
        <img src='http://semantic-ui.com/images/wireframe/image.png' />
      </div>
    </Grid.Column>

    <Grid.Column>
      <div className='ui fluid image'>
        <Label color='blue' ribbon>
          <Icon name='spoon' /> Food
        </Label>
        <img src='http://semantic-ui.com/images/wireframe/image.png' />
      </div>
    </Grid.Column>
  </Grid>
)

export default LabelExampleRibbonImage
