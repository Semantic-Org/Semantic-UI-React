import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const LabelExampleCorner = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', corner: 'left', icon: 'heart' }}
        src='/images/wireframe/image.png'
      />
    </Grid.Column>

    <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', color: 'red', corner: 'right', icon: 'save' }}
        src='/images/wireframe/image.png'
      />
    </Grid.Column>
  </Grid>
)

export default LabelExampleCorner
