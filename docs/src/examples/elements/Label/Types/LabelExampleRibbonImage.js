import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const LabelExampleRibbonImage = () => (
  <Grid columns={2}>
    <Grid.Column>
      <Image
        fluid
        label={{
          as: 'a',
          color: 'black',
          content: 'Hotel',
          icon: 'hotel',
          ribbon: true,
        }}
        src='/images/wireframe/image.png'
      />
    </Grid.Column>

    <Grid.Column>
      <Image
        fluid
        label={{
          as: 'a',
          color: 'blue',
          content: 'Food',
          icon: 'spoon',
          ribbon: true,
        }}
        src='/images/wireframe/image.png'
      />
    </Grid.Column>
  </Grid>
)

export default LabelExampleRibbonImage
